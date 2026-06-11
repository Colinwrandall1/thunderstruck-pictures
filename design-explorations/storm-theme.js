/* ============================================================
   STORM THEME — ambient WebGL stormscape for interior pages.
   Same engine as design-explorations/09-stormflight.html, tuned
   calmer: subtle scroll drift, ambient strikes only, rare bolts.
   Injects its own canvases; pairs with storm-theme.css.
   ============================================================ */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Inject layers
  const canvas = document.createElement('canvas');
  canvas.id = 'storm-bg'; canvas.setAttribute('aria-hidden', 'true');
  const overlay = document.createElement('canvas');
  overlay.id = 'storm-boltfx'; overlay.setAttribute('aria-hidden', 'true');
  const staticSky = document.createElement('div');
  staticSky.className = 'storm-static'; staticSky.setAttribute('aria-hidden', 'true');
  document.body.prepend(staticSky, canvas, overlay);

  function goStatic() { document.body.classList.add('storm-off'); }
  if (reduce) { goStatic(); return; }

  const gl = canvas.getContext('webgl', { antialias: false, depth: false, stencil: false, alpha: false });
  if (!gl) { goStatic(); return; }

  const isMobile = Math.min(innerWidth, innerHeight) < 700;
  const QUALITY = {
    layers: isMobile ? 3 : 4,
    resScale: isMobile ? 0.40 : 0.5,
    dprCap: isMobile ? 1 : 1.5,
  };

  const VERT = 'attribute vec2 aPos; void main(){ gl_Position = vec4(aPos, 0.0, 1.0); }';

  const FRAG = (
  'precision highp float;\n' +
  'uniform vec2 uRes;\n' +
  'uniform float uTime;\n' +
  'uniform float uFlight;\n' +
  'uniform float uRise;\n' +
  'uniform float uRoll;\n' +
  'uniform float uCalm;\n' +
  'uniform vec2 uLight;\n' +
  'uniform float uLightZ;\n' +
  'uniform float uStrike;\n' +
  'uniform float uAmb;\n' +
  '#define LAYERS ' + QUALITY.layers + '\n' +
  'float hash(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }\n' +
  'float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);\n' +
  '  float a = hash(i), b = hash(i+vec2(1.0,0.0)), c = hash(i+vec2(0.0,1.0)), d = hash(i+vec2(1.0,1.0));\n' +
  '  return mix(mix(a,b,u.x), mix(c,d,u.x), u.y); }\n' +
  'float fbm(vec2 p){ float v = 0.0, a = 0.5; mat2 r = mat2(0.8,-0.6,0.6,0.8);\n' +
  '  for(int i=0;i<5;i++){ v += a*vnoise(p); p = r*p*2.03 + vec2(7.3); a *= 0.55; } return v; }\n' +
  'void main(){\n' +
  '  vec2 uv = (gl_FragCoord.xy - 0.5*uRes)/uRes.y;\n' +
  '  float cr = cos(uRoll), sr = sin(uRoll);\n' +
  '  uv = mat2(cr,-sr,sr,cr)*uv;\n' +
  '  float up = clamp(uv.y+0.5, 0.0, 1.0);\n' +
  '  vec3 col = mix(vec3(0.012,0.017,0.034), vec3(0.065,0.098,0.175), pow(up,1.4));\n' +
  '  col = mix(col, vec3(0.085,0.135,0.225), uCalm*0.85);\n' +
  '  col += vec3(0.55,0.68,0.95)*uStrike*0.05;\n' +
  '  for(int i=0;i<LAYERS;i++){\n' +
  '    float fi = float(i);\n' +
  '    float t = fi/float(LAYERS-1);\n' +
  '    float par = mix(0.30, 1.85, t*t);\n' +
  '    float sc  = mix(2.5, 0.95, t);\n' +
  '    vec2 p = uv*sc;\n' +
  '    p.x += uFlight*par + fi*13.7;\n' +
  '    p.y += uRise*par*0.55 + fi*7.1;\n' +
  '    p   += vec2(uTime*0.013*(0.35+par*0.5), uTime*0.0035);\n' +
  '    float f;\n' +
  '    if(i >= LAYERS-2){\n' +
  '      vec2 q = vec2(fbm(p + vec2(uTime*0.018,0.0)), fbm(p + vec2(5.2,1.3)));\n' +
  '      f = fbm(p + 1.7*q);\n' +
  '    } else { f = fbm(p); }\n' +
  '    float cover = 0.38 + 0.10*vnoise(vec2(fi*3.1, uFlight*0.07)) - uCalm*0.22;\n' +
  '    float dens = smoothstep(cover, cover+0.30, f);\n' +
  '    dens *= mix(0.95, 0.42, uCalm);\n' +
  '    float la = mix(0.60, 0.97, t);\n' +
  '    float zaff = max(1.0 - abs(uLightZ - t)*1.7, 0.0); zaff *= zaff;\n' +
  '    float d2 = dot(uv-uLight, uv-uLight);\n' +
  '    float glow = uStrike*zaff*exp(-d2*mix(2.4, 7.0, t));\n' +
  '    float body = clamp(f*1.25, 0.0, 1.0); body *= body;\n' +
  '    vec3 cc = mix(vec3(0.014,0.020,0.038), vec3(0.155,0.205,0.305), body*1.35);\n' +
  '    cc *= 0.65 + 0.55*up;\n' +
  '    cc = mix(cc, vec3(0.19,0.25,0.36), uCalm*0.6);\n' +
  '    cc += vec3(0.60,0.72,1.0)*glow*(0.35+f*1.5);\n' +
  '    cc += vec3(0.45,0.56,0.85)*uAmb*f*f*0.9;\n' +
  '    col = mix(col, cc, dens*la);\n' +
  '  }\n' +
  '  col += vec3(0.65,0.76,1.0)*pow(uStrike,1.7)*0.10;\n' +
  '  float vig = smoothstep(1.35, 0.35, length(uv*vec2(0.82,1.05)));\n' +
  '  col *= mix(0.70, 1.0, vig);\n' +
  '  col += (hash(gl_FragCoord.xy + vec2(fract(uTime)*17.0, fract(uTime*1.3)*23.0)) - 0.5)*0.016;\n' +
  '  gl_FragColor = vec4(col, 1.0);\n' +
  '}'
  );

  function compile(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { console.error('storm shader:', gl.getShaderInfoLog(s)); return null; }
    return s;
  }
  const vs = compile(gl.VERTEX_SHADER, VERT);
  const fs = compile(gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) { goStatic(); return; }
  const prog = gl.createProgram();
  gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { goStatic(); return; }
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'aPos');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const U = {};
  ['uRes','uTime','uFlight','uRise','uRoll','uCalm','uLight','uLightZ','uStrike','uAmb']
    .forEach(n => U[n] = gl.getUniformLocation(prog, n));

  const octx = overlay.getContext('2d');

  let W = 0, H = 0, maxScroll = 1;
  function resize() {
    W = innerWidth; H = innerHeight;
    const dpr = Math.min(devicePixelRatio || 1, QUALITY.dprCap);
    canvas.width  = Math.max(2, Math.round(W * dpr * QUALITY.resScale));
    canvas.height = Math.max(2, Math.round(H * dpr * QUALITY.resScale));
    gl.viewport(0, 0, canvas.width, canvas.height);
    overlay.width = Math.round(W * dpr); overlay.height = Math.round(H * dpr);
    octx.setTransform(dpr, 0, 0, dpr, 0, 0);
    maxScroll = Math.max(1, document.documentElement.scrollHeight - H);
  }
  addEventListener('resize', resize);
  resize();

  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  // Ambient mode: calmer storm, gentle scroll drift, no breakthrough.
  const CALM_BASE = 0.14;
  let flight = 0, rise = 0, roll = 0;

  const strikes = [];
  let lastLight = { x: 0, y: 0.25, z: 0.7 };

  function uvFromScreen(px, py) { return { x: (px - W / 2) / H, y: (H / 2 - py) / H }; }

  function makeBolt(px, py, len) {
    const pts = [{ x: px, y: py }, { x: px + (Math.random() - 0.5) * 60, y: py + len }];
    for (let d = 0; d < 5; d++) {
      for (let i = pts.length - 2; i >= 0; i--) {
        const a = pts[i], b = pts[i + 1];
        const mx = (a.x + b.x) / 2 + (Math.random() - 0.5) * (b.y - a.y) * 0.55;
        const my = (a.y + b.y) / 2 + (Math.random() - 0.5) * 14;
        pts.splice(i + 1, 0, { x: mx, y: my });
      }
    }
    const branches = [];
    for (let n = 0; n < 2; n++) {
      const at = pts[Math.floor(pts.length * (0.3 + Math.random() * 0.4))];
      const bl = [{ x: at.x, y: at.y }];
      let bx = at.x, by = at.y;
      const dir = Math.random() < 0.5 ? -1 : 1;
      for (let s = 0; s < 7; s++) {
        bx += dir * (4 + Math.random() * 16); by += 8 + Math.random() * 18;
        bl.push({ x: bx, y: by });
      }
      branches.push(bl);
    }
    return { main: pts, branches };
  }

  function strike(opts) {
    const o = Object.assign({ amp: 1, sx: W * (0.3 + Math.random() * 0.4), sy: H * (0.10 + Math.random() * 0.18), z: 0.5 + Math.random() * 0.45, bolt: false }, opts);
    const uv = uvFromScreen(o.sx, o.sy);
    lastLight = { x: uv.x, y: uv.y, z: o.z };
    strikes.push({
      t0: performance.now(), amp: o.amp, x: uv.x, y: uv.y, z: o.z,
      bolt: o.bolt ? makeBolt(o.sx, o.sy, H * (0.25 + Math.random() * 0.25)) : null,
    });
    if (strikes.length > 6) strikes.shift();
  }
  window.__strike = strike; // dev hook for tuning

  function strikeEnv(now) {
    let e = 0;
    for (const s of strikes) {
      const ph = (now - s.t0) / 1000;
      if (ph < 0 || ph > 1.5) continue;
      let v = Math.exp(-ph * 16);
      if (ph > 0.10) v += 0.5 * Math.exp(-(ph - 0.10) * 10);
      if (ph > 0.27) v += 0.2 * Math.exp(-(ph - 0.27) * 7);
      e += s.amp * v;
    }
    return Math.min(e, 1.45);
  }

  let nextAmbient = performance.now() + 2800;
  function scheduleAmbient(now) {
    if (now < nextAmbient) return;
    nextAmbient = now + 3800 + Math.random() * 5200;
    strike({ amp: 0.15 + Math.random() * 0.35, bolt: Math.random() < 0.10 });
  }

  function drawPath(pts, width, style, blur) {
    octx.beginPath();
    octx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) octx.lineTo(pts[i].x, pts[i].y);
    octx.lineWidth = width; octx.strokeStyle = style;
    octx.shadowBlur = blur; octx.shadowColor = 'rgba(159,196,238,0.9)';
    octx.stroke();
  }
  function drawBolts(now) {
    octx.clearRect(0, 0, W, H);
    for (const s of strikes) {
      if (!s.bolt) continue;
      const ph = (now - s.t0) / 1000;
      if (ph < 0 || ph > 0.5) continue;
      let a = Math.exp(-ph * 18);
      if (ph > 0.10) a += 0.45 * Math.exp(-(ph - 0.10) * 12);
      a = Math.min(a * s.amp, 1);
      if (a < 0.03) continue;
      octx.save();
      octx.globalAlpha = a;
      octx.lineJoin = 'round'; octx.lineCap = 'round';
      drawPath(s.bolt.main, 9, 'rgba(159,196,238,0.30)', 32);
      drawPath(s.bolt.main, 3.2, 'rgba(200,220,248,0.70)', 14);
      drawPath(s.bolt.main, 1.3, 'rgba(255,255,255,1)', 0);
      octx.globalAlpha = a * 0.6;
      for (const b of s.bolt.branches) {
        drawPath(b, 2.2, 'rgba(190,214,245,0.55)', 10);
        drawPath(b, 0.9, 'rgba(255,255,255,0.9)', 0);
      }
      octx.restore();
    }
  }

  let running = true;
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) requestAnimationFrame(frame);
  });

  function frame(now) {
    if (!running) return;
    const t = now / 1000;
    const progress = clamp(scrollY / maxScroll, 0, 1);

    const fTarget = scrollY * 0.0009;
    flight = lerp(flight, fTarget, 0.06);
    rise = lerp(rise, Math.sin(progress * 4.0) * 0.5, 0.05);
    const bank = clamp((fTarget - flight) * 0.4, -0.035, 0.035);
    roll = lerp(roll, Math.sin(progress * 3.0) * 0.02 + bank, 0.04);

    scheduleAmbient(now);
    const env = strikeEnv(now);
    const amb = Math.max(0, Math.sin(t * 0.23) * Math.sin(t * 0.071 + 2.1)) *
                (0.5 + 0.5 * Math.sin(t * 2.3) * Math.sin(t * 5.1 + 1.3)) * 0.4;

    gl.uniform2f(U.uRes, canvas.width, canvas.height);
    gl.uniform1f(U.uTime, t);
    gl.uniform1f(U.uFlight, flight);
    gl.uniform1f(U.uRise, rise);
    gl.uniform1f(U.uRoll, roll);
    gl.uniform1f(U.uCalm, CALM_BASE);
    gl.uniform2f(U.uLight, lastLight.x, lastLight.y);
    gl.uniform1f(U.uLightZ, lastLight.z);
    gl.uniform1f(U.uStrike, env);
    gl.uniform1f(U.uAmb, amb);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    drawBolts(now);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  // one soft arrival flicker
  setTimeout(() => strike({ amp: 0.55, sx: W * 0.6, sy: H * 0.14, z: 0.6 }), 1100);
})();

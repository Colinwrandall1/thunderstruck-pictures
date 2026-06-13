/* ============================================================
   storm-theme-video.js — real-footage background for interior pages.
   Drop-in replacement for the WebGL shader (storm-theme.js): uses the v3
   hero clip, darkened so catalog content stays legible. Pairs with
   storm-theme.css (glass UI). Page-relative media paths (interior pages
   live at the site root).

   Performance guards:
   - mobile or prefers-reduced-motion -> static poster, no video
   - the fixed video freezes once you scroll past the hero, resumes near top
   ============================================================ */
(function () {
  var POSTER = 'media/storm-hero-poster.jpg';
  var CLIP   = 'media/storm-hero.mp4';

  var css = document.createElement('style');
  css.textContent = [
    '.storm-vidbg,.storm-vidtint,.storm-vidstatic{position:fixed;inset:0;width:100%;height:100%;pointer-events:none;}',
    '.storm-vidbg{object-fit:cover;z-index:-3;}',
    '.storm-vidstatic{z-index:-3;display:none;background:#04060c center center/cover no-repeat;background-image:url(' + POSTER + ');}',
    '.storm-vidtint{z-index:-2;background:linear-gradient(180deg,rgba(4,6,12,0.55) 0%,rgba(4,6,12,0.72) 45%,rgba(4,6,12,0.82) 100%);}',
    'body.vid-off .storm-vidbg{display:none;}',
    'body.vid-off .storm-vidstatic{display:block;}'
  ].join('');
  document.head.appendChild(css);

  var stat = document.createElement('div'); stat.className = 'storm-vidstatic'; stat.setAttribute('aria-hidden', 'true');
  var tint = document.createElement('div'); tint.className = 'storm-vidtint'; tint.setAttribute('aria-hidden', 'true');
  var vid  = document.createElement('video');
  vid.className = 'storm-vidbg';
  vid.muted = true; vid.loop = true; vid.playsInline = true; vid.preload = 'auto';
  vid.setAttribute('muted', ''); vid.setAttribute('playsinline', ''); vid.setAttribute('aria-hidden', 'true');
  vid.setAttribute('poster', POSTER);
  var src = document.createElement('source'); src.src = CLIP; src.type = 'video/mp4';
  vid.appendChild(src);

  function start() {
    var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    var isMobile = Math.min(innerWidth, innerHeight) < 700;
    document.body.insertBefore(tint, document.body.firstChild);

    // Mobile / reduced-motion: static poster only — never load the video.
    if (reduce || isMobile) {
      document.body.classList.add('vid-off');
      document.body.insertBefore(stat, document.body.firstChild);
      return;
    }

    // Desktop: the video's own poster frame shows until playback starts, so a
    // blocked autoplay degrades to a still storm with no extra fallback needed.
    document.body.insertBefore(vid, document.body.firstChild);
    var p = vid.play(); if (p && p.catch) p.catch(function () {});

    // The video is fixed/full-screen; freeze it once the hero is scrolled past
    // (it stays visible as a still storm behind the catalog), resume near the top.
    var ticking = false;
    addEventListener('scroll', function () {
      if (ticking) return; ticking = true;
      requestAnimationFrame(function () {
        if (scrollY > innerHeight * 1.1) { if (!vid.paused) vid.pause(); }
        else { if (vid.paused) { var q = vid.play(); if (q && q.catch) q.catch(function () {}); } }
        ticking = false;
      });
    }, { passive: true });

    // some browsers block muted autoplay until first interaction
    var kick = function () { var q = vid.play(); if (q && q.catch) q.catch(function () {}); };
    ['pointerdown', 'touchstart', 'keydown'].forEach(function (ev) { addEventListener(ev, kick, { once: true, passive: true }); });
  }

  if (document.body) start();
  else document.addEventListener('DOMContentLoaded', start);
})();

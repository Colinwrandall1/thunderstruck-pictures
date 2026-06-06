#!/usr/bin/env python3
import pathlib

base = pathlib.Path("home.html").read_text()

ORIG_LINK = '<link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">'

ORIG_ROOT = """  :root {
    --bg: #050608;
    --panel: #0c1014;
    --panel-2: #11161c;
    --line: #1c232b;
    --text: #f5f5f2;
    --muted: #93a0ac;
    --yellow: #FFD60A;
  }"""

ORIG_H1 = """  .hero-content h1 {
    font-family: 'Anton', sans-serif; font-size: clamp(3rem, 14vw, 10rem);
    letter-spacing: 0.03em; text-transform: uppercase; line-height: 0.86; text-shadow: 0 2px 50px rgba(0,0,0,0.7);
  }"""

ORIG_BTN = """  .btn {
    display: inline-block; cursor: pointer;
    background: var(--yellow); color: #0a0a0a;
    font-weight: 700; font-size: 0.82rem; letter-spacing: 0.06em; text-transform: uppercase;
    padding: 0.7rem 1.3rem; border: none; border-radius: 2px;
    transition: transform 0.15s, box-shadow 0.2s;
  }
  .btn:hover { transform: translateY(-1px); box-shadow: 0 6px 22px rgba(255,214,10,0.28); }
  .btn.ghost {
    background: transparent; color: var(--text);
    border: 1px solid #33404c;
  }
  .btn.ghost:hover { border-color: var(--yellow); box-shadow: none; }"""

SWITCHER = """
<a href="{other}" id="variant-switch" style="position:fixed;left:1.1rem;bottom:1.1rem;z-index:60;
  background:rgba(10,13,18,0.7);border:1px solid {chip};color:{chiptext};
  font-family:'JetBrains Mono',monospace;font-size:0.58rem;letter-spacing:0.18em;text-transform:uppercase;
  padding:0.5rem 0.85rem;border-radius:999px;backdrop-filter:blur(6px);text-decoration:none;">
  ◆ {label} <span style="opacity:0.6;">· flip →</span></a>
"""

def build(display_link_family, display_name, root_block, h1_block, btn_block,
          extra_css, brand_css, weight, switch_other, switch_label, chip, chiptext):
    s = base
    # font link
    new_link = ('<link href="https://fonts.googleapis.com/css2?'
                + display_link_family
                + '&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">')
    s = s.replace(ORIG_LINK, new_link)
    # targeted blocks (before global Anton swap)
    s = s.replace(ORIG_ROOT, root_block)
    s = s.replace(ORIG_H1, h1_block)
    s = s.replace(ORIG_BTN, btn_block)
    # global swaps
    s = s.replace("'Anton'", "'%s'" % display_name)
    s = s.replace("#FFD60A", ACCENT)
    s = s.replace("255,214,10", ACCENT_RGB)
    # append override block before </style>
    override = ("\n  /* --- %s system overrides --- */\n" % switch_label
                + "  .nav .brand,h2.head,.features .k,.card .meta .cat,.why-grid .col h3,.person h3,.foot-in .brand{font-weight:%s;}\n" % weight
                + brand_css + "\n" + extra_css + "\n")
    s = s.replace("</style>", override + "</style>")
    # title
    s = s.replace("<title>Thunderstruck Pictures — Grip Truck Rental & Production · Austin, TX</title>",
                  "<title>Thunderstruck — %s direction</title>" % switch_label)
    # switcher chip
    sw = SWITCHER.format(other=switch_other, label=switch_label, chip=chip, chiptext=chiptext)
    s = s.replace("</body>", sw + "</body>")
    return s

# ===================== VOLTAGE (chrome) =====================
ACCENT = "#9fc4ee"; ACCENT_RGB = "159,196,238"
voltage = build(
  display_link_family="family=Saira+Condensed:wght@500;700",
  display_name="Saira Condensed",
  root_block="""  :root {
    --bg: #04060c;
    --panel: #0e141c;
    --panel-2: #121a24;
    --line: #1f2a38;
    --text: #f4f8ff;
    --muted: #9fb4ce;
    --yellow: #9fc4ee;
  }""",
  h1_block="""  .hero-content h1 {
    font-family: 'Saira Condensed', sans-serif; font-weight:700; font-style:italic;
    font-size: clamp(3rem, 14vw, 10rem); letter-spacing: 0.01em; text-transform: uppercase; line-height: 0.86;
    background:linear-gradient(180deg,#ffffff 0%,#dfeaf8 16%,#8ea3bf 47%,#ffffff 52%,#6c81a0 66%,#c2d2e8 100%);
    -webkit-background-clip:text; background-clip:text; color:transparent;
    filter:drop-shadow(0 2px 30px rgba(150,190,255,0.35));
  }""",
  btn_block="""  .btn {
    display:inline-block; cursor:pointer;
    background:linear-gradient(180deg,#ffffff,#cdddf0 45%,#9fb4ce 55%,#eaf2fb);
    color:#0a0f16; font-family:'Saira Condensed',sans-serif; font-weight:700;
    font-size:0.92rem; letter-spacing:0.14em; text-transform:uppercase;
    padding:0.72rem 1.5rem; border:none; border-radius:3px;
    box-shadow:0 0 18px rgba(150,190,255,0.3), inset 0 1px 0 rgba(255,255,255,0.85);
    transition:transform .15s, box-shadow .2s;
  }
  .btn:hover { transform:translateY(-1px); box-shadow:0 0 26px rgba(150,190,255,0.5), inset 0 1px 0 rgba(255,255,255,0.95); }
  .btn.ghost { background:transparent; color:var(--text); border:1px solid #33485f; box-shadow:none; }
  .btn.ghost:hover { border-color:#9fc4ee; box-shadow:0 0 16px rgba(159,196,238,0.25); }""",
  extra_css="""  h2.head .y, .eyebrow { color:#9fc4ee; }
  .hero-content h1{ font-style:italic; }""",
  brand_css="  .nav .brand{ font-style:italic; }\n  .foot-in .brand{ font-style:italic; }",
  weight="700",
  switch_other="home-livewire.html", switch_label="Voltage",
  chip="#33485f", chiptext="#9fc4ee")

# ===================== LIVE WIRE (neon blue) =====================
ACCENT = "#4da3ff"; ACCENT_RGB = "77,163,255"
livewire = build(
  display_link_family="family=Rajdhani:wght@500;600;700",
  display_name="Rajdhani",
  root_block="""  :root {
    --bg: #050b18;
    --panel: #0c1c30;
    --panel-2: #0e2138;
    --line: #173049;
    --text: #eaf4ff;
    --muted: #8fb6e6;
    --yellow: #4da3ff;
  }""",
  h1_block="""  .hero-content h1 {
    font-family: 'Rajdhani', sans-serif; font-weight:700;
    font-size: clamp(3rem, 14vw, 10rem); letter-spacing: 0.04em; text-transform: uppercase; line-height: 0.9;
    color:#eaf4ff;
    text-shadow:0 0 6px #cfe6ff,0 0 18px #4da3ff,0 0 40px #3b82f6,0 0 70px rgba(37,99,235,0.6);
    animation:nflicker 6s infinite;
  }
  @keyframes nflicker{0%,100%{opacity:1}92%{opacity:1}93%{opacity:.6}94%{opacity:1}96%{opacity:.78}97%{opacity:1}}""",
  btn_block="""  .btn {
    display:inline-block; cursor:pointer;
    background:rgba(59,130,246,0.10); color:#eaf4ff;
    font-family:'Rajdhani',sans-serif; font-weight:700;
    font-size:0.95rem; letter-spacing:0.12em; text-transform:uppercase;
    padding:0.72rem 1.5rem; border:1px solid #4da3ff; border-radius:4px;
    box-shadow:0 0 10px rgba(77,163,255,0.4), inset 0 0 12px rgba(77,163,255,0.12);
    transition:all .2s;
  }
  .btn:hover { background:#4da3ff; color:#04101f; box-shadow:0 0 24px rgba(77,163,255,0.7); transform:translateY(-1px); }
  .btn.ghost { background:transparent; color:var(--text); border:1px solid #2d4d6e; box-shadow:none; }
  .btn.ghost:hover { border-color:#4da3ff; box-shadow:0 0 16px rgba(77,163,255,0.3); }""",
  extra_css="""  h2.head .y, .eyebrow { color:#6fc0ff; }
  .nav .brand{ text-shadow:0 0 12px rgba(77,163,255,0.55); }""",
  brand_css="  .nav .brand{ font-weight:600; }",
  weight="700",
  switch_other="home-voltage.html", switch_label="Live Wire",
  chip="#2d4d6e", chiptext="#6fc0ff")

pathlib.Path("home-voltage.html").write_text(voltage)
pathlib.Path("home-livewire.html").write_text(livewire)
print("wrote home-voltage.html (%d bytes), home-livewire.html (%d bytes)" % (len(voltage), len(livewire)))

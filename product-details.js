/* Extra per-product detail for the /product.html template.
   inventory.js provides the catalog index (name, price, spec, photo, dept, cat).
   This file adds the long description, kit list, and optional gallery shots.
   Items without an entry here still render fine — they just show the basics
   (hero block + related row), skipping the kit/story section entirely. */
const PRODUCT_DETAILS = {

  // ========== CAMERA ==========

  'red-komodo': {
    blurb: 'A workhorse 6K Super-35 cinema body that punches well above its weight — Vista Vision color science in a body small enough to fly, gimbal, or rig anywhere.',
    description: [
      'The RED Komodo 6K is our default body for narrative, commercial, and music video work. Global shutter eliminates rolling-shutter wobble on whip pans, vehicle work, and LED-heavy environments. The Super-35 sensor pairs cleanly with our DZOFilm PAVO anamorphics and VESPID full-frame primes.',
      'Our kit ships fully built — Wooden Camera VCT NATO baseplate, top and side plates, V-mount battery plate, and NATO handles — ready to mount the matte box, follow focus, or wireless video receiver of your choice. Just add lens, media, and battery.'
    ],
    kit: [
      'RED Komodo 6K body',
      'Wooden Camera VCT NATO baseplate',
      'Top + side plates',
      'V-Mount battery plate',
      'NATO handles',
      'Internal ND filter (built in)',
      'EF mount (PL adapter available)'
    ],
  },

  'pavo-set': {
    blurb: 'A complete two-lens DZOFilm PAVO 2x anamorphic set — classic anamorphic character on a modern PL-mount cine body.',
    description: [
      'The PAVO 2x set delivers the oval bokeh, horizontal flare, and squeezed frame anamorphic shooters love, without the rehousing-budget price tag. T2.1 across the set means consistent exposure in low light, and the close minimum focus opens up macro and tabletop work.',
      'Pairs naturally with the RED Komodo 6K for a Super-35 anamorphic capture path. Both lenses are matched in size, weight, and gear positions — quick lens swaps on set, predictable follow-focus marks.'
    ],
    kit: [
      'DZOFilm PAVO 2x 32mm T2.1',
      'DZOFilm PAVO 2x 55mm T2.1',
      'PL mount',
      'Front diameter 95mm (matches matte box)',
      'Standard 0.8 mod focus + iris gears',
      'Hard case'
    ],
  },

  'vespid-set': {
    blurb: 'A four-lens DZOFilm VESPID full-frame prime kit — sharp, fast, and cinematic across the full-frame circle.',
    description: [
      'The VESPID set is our go-to spherical full-frame package for narrative and commercial work. T2.1 across all four lenses gives you a fast, consistent stop. Image circle covers full-frame, so you\'re ready for our PL-mount cine bodies and Sony Venice/Komodo Super-35 alike.',
      'Color matches the PAVO anamorphics if you want to mix anamorphic and spherical on the same project. Standard 0.8 mod gears and a 95mm front diameter mean follow focus and matte box swap in seconds.'
    ],
    kit: [
      'DZOFilm VESPID 25mm T2.1',
      'DZOFilm VESPID 35mm T2.1',
      'DZOFilm VESPID 50mm T2.1',
      'DZOFilm VESPID 75mm T2.1',
      'PL mount on all lenses',
      'Hard case'
    ],
  },

  'laowa-ranger': {
    blurb: 'The Laowa Ranger 17–50mm T2.9 — a fast, lightweight cine zoom that covers the wide and medium range without a lens swap.',
    description: [
      'A go-to zoom for run-and-gun narrative, documentary, and music video work. T2.9 constant aperture, parfocal across the range, and small enough to live on a Ronin or gimbal — replaces three primes in many setups.',
      'Pairs with the RED Komodo or any Super-35 body. We rent it with the matching standard PL mount, but EF and RF mount swaps are available on request.'
    ],
    kit: [
      'Laowa Ranger 17–50mm T2.9',
      'PL mount (EF/RF available)',
      'Standard 0.8 mod focus, iris, zoom gears',
      'Lens support feet',
      'Hard case'
    ],
  },

  'sachtler-18': {
    blurb: 'Sachtler\'s Video 18 fluid head on a carbon-fiber tripod — the gold standard for handheld-feel pans and tilts on a heavy build.',
    description: [
      'The Video 18 supports up to 22 lbs and counterbalances at 15 levels, so a fully built Komodo, a Sony FX9, or even a small ARRI body sits balanced and smooth. Continuous fluid drag in both axes lets you reset tension mid-shot without rebuilding from scratch.',
      'Comes on Sachtler\'s 100mm carbon-fiber tripod with mid-level spreader, plus a 100mm hi-hat for low-mode setups. Whip pans, slow-motion tilts, and locked-off frames all live in the same kit.'
    ],
    kit: [
      'Sachtler Video 18 P fluid head (100mm ball)',
      'Sachtler carbon-fiber tripod',
      'Mid-level spreader',
      '100mm hi-hat',
      'Sachtler pan handles (×2)',
      'Quick-release sliding plate'
    ],
  },

  'mirage-mattebox': {
    blurb: 'A clamp-on matte box with built-in variable ND — flag the lens, kill reflections, and dial exposure all from one box.',
    description: [
      'The Tilta Mirage clamp-on lets you skip rod-mount setups on small builds. The built-in VND covers 2 to 8 stops without color shift, so you can shoot wide-open in daylight without juggling fixed filters.',
      'Two 4×5.65 filter trays accept any standard cine filter — diffusion, IRND, gels — and the eyebrow flag plus side flags kill flare on bright contre-jour setups. Works with any 95mm or 114mm front diameter (step-up rings included).'
    ],
    kit: [
      'Tilta Mirage matte box',
      'Built-in 2–8 stop VND',
      '4×5.65 filter trays (×2)',
      'Eyebrow flag',
      'Side flags (×2)',
      '95mm, 86mm, 80mm, 77mm step-up rings'
    ],
  },

  // ========== LIGHTING ==========

  'nanlux-2400b': {
    blurb: 'The Nanlux Evoke 2400B — a robust 2400W bi-color LED that throws like a 4K HMI but runs on a 120V household outlet.',
    description: [
      'The most powerful single-fixture LED in our kit. Output is comparable to a 4K HMI, but power draw fits a 20A circuit, so you can run it off house power without a generator. Wireless CRMX control means you can dim, change color, or fire pulses from the cart.',
      'Three reflectors (30°, 45°, 60°) cover every common beam spread, with barndoors for clean cutting. The included flight case carries everything — head, control box, reflectors, and cables — and breaks down for travel.'
    ],
    kit: [
      'Nanlux Evoke 2400B LED head',
      '45° reflector',
      '30° reflector',
      '60° reflector',
      'Barndoors',
      'Power supply',
      'Quick release clamp',
      'DC connection cable',
      'AC power cable',
      'Flight case + reflector bag'
    ],
  },

  'aputure-1200x': {
    blurb: 'Aputure\'s Storm 1200x — a 1200W bi-color LED with the BLAIR engine and built-in CRMX, equivalent to an 1800W HMI.',
    description: [
      'The Storm 1200x delivers breakthrough color accuracy from Aputure\'s BLAIR light engine. Output equals an 1800W HMI without the noise, heat, or ballast hassle. CRMX is built into the head — no extra receiver to rig.',
      'Two reflectors cover most setups: 15° for a tight punch, 45° for a wider spread. The 30° is a clean middle-of-the-road key option. The rolling case carries everything one PA can move.'
    ],
    kit: [
      'Aputure Storm 1200x LED head',
      'Control box',
      '45° reflector',
      '30° reflector',
      '15° reflector',
      'Weatherproof head cable',
      'AC power cable',
      'Skid',
      'Rolling case + reflector bag'
    ],
  },

  'aputure-600x': {
    blurb: 'The Aputure LS 600x Pro — a daylight-to-tungsten-tunable 600W LED that runs on V-mount when AC isn\'t around.',
    description: [
      'A full bi-color tunable range from 2700K to 6500K, with output strong enough to be a key on most narrative interiors. Sidus Link wireless control and CRMX let you adjust the head from across the set without a runner.',
      'V-mount battery plate on the control box means you can take this fixture into vans, cars, or anywhere off-AC. Water-resistant for outdoor work — daylight key for exteriors, with no scrim cart to wrangle.'
    ],
    kit: [
      'Aputure LS 600x Pro LED head',
      'F10 Fresnel',
      'F10 barndoors',
      'Hyper reflector',
      'Control box (V-mount plates)',
      'Weatherproof head cable',
      'AC power cable'
    ],
  },

  'astera-titan': {
    blurb: 'An 8-tube Astera Titan kit — wireless, battery-powered RGB tubes that go anywhere a stand or a piece of gaff tape can.',
    description: [
      'Titan tubes have become the rigging-tape Swiss Army knife of modern lighting. Each 3.4-foot tube runs 20 hours off its internal battery, controls via CRMX or the Astera app, and produces a usable amount of light at the full RGB+CCT range.',
      'Use them as practical replacements (under cabinets, behind shelves), as set decoration (built into walls), or as a soft 8-light grid hanging from C-stands. The charging case stores and charges all 8 simultaneously.'
    ],
    kit: [
      '8× Astera Titan tubes',
      'Charging power box',
      '8× foldable stands',
      '16× baby pin spigots',
      '16× metal holders + cotter pins',
      '16× M5 eyebolts',
      '8× waterproof charging port covers',
      'Charging case'
    ],
  },

  // ========== GRIP / POWER ==========

  'grip-truck-package': {
    blurb: 'The whole rig — 3-ton grip truck, full lighting + grip package, distro, generator, and a working grip to deliver and operate it.',
    description: [
      'For productions that want everything in one phone call. The full 3-ton truck rolls onto your location with the lighting package, the C-stands, the overheads, the distro, the generator — and a grip who knows where every piece lives. You point at what you need, it gets rigged.',
      'Day rate includes delivery and pickup within Greater Austin; longer hauls quoted separately. This is the right move when you\'re shooting multiple setups across a day, or when the production needs a single line item instead of a gear list.'
    ],
    kit: [
      '3-ton grip truck (with 7\' liftgate, jockey boxes, interior + exterior LED lighting)',
      'Full lighting package (Nanlux 2400B, Aputure 1200x, 600x Pro, Astera, etc.)',
      'Full grip package (C-stands, flags, frames, sandbags, overheads)',
      'Distro (Honda EU2200i + Aputure Delta Pro)',
      'Working grip on-site (delivery + operation)',
      'Greater Austin delivery + pickup'
    ],
  },

  'honda-eu2200': {
    blurb: 'A quiet 2,200-watt Honda inverter generator — the same clean power as your wall outlet, in a portable case.',
    description: [
      'Honda\'s commercial-grade EU2200i is our go-to silent power source for location work. Inverter technology means the output is genuinely clean — safe for any LED fixture, monitor, or battery charger. Fuel-efficient enough to run a Storm 1200x all day on a 5-gallon can.',
      'Lightweight enough that one person can lift it in and out of a vehicle. Quiet enough to sit just off-frame on a dialogue scene without anyone noticing.'
    ],
    kit: [
      'Honda EU2200i 2,200W inverter generator',
      '5-gallon gas can',
      'Quick-start instructions'
    ],
  },

  'delta-pro': {
    blurb: 'A 3,600W EcoFlow Delta Pro — silent battery power that can run the Aputure 1200x or Nanlux 2400B for hours.',
    description: [
      'When even a quiet Honda isn\'t quiet enough — dialogue interiors, libraries, hospitals — the Delta Pro is the silent option. 3,600W continuous AC output handles the biggest fixtures in our kit, and the battery charges back up in 2.7 hours from any wall outlet.',
      'Built-in wheels and a retractable handle mean one person moves it. Multiple AC outlets, USB, and 12V outputs cover everything from a Komodo charger to a tea kettle for craft.'
    ],
    kit: [
      'Aputure EcoFlow Delta Pro battery (3,600W)',
      'AC charging cable',
      'Car charging cable',
      'Solar charging cable'
    ],
  },

  'overhead-12': {
    blurb: 'A 12×12 / 6×6 overhead frame system — single textile for the soft-light fundamentals: diffusion, bounce, negative fill.',
    description: [
      'The most-used grip kit on any narrative set. The 12×12 frame breaks down to a 6×6 for tight interiors. Skins included cover the bread-and-butter: 1/4-stop silent, unbleached muslin, polysilk, and 1- and 2-stop silks.',
      'Comes with the corners, ropes, and gak to rig from C-stands or a menace arm. This is what turns a single hard source — sun or a 2400B — into a soft, wrappy key that flatters skin.'
    ],
    kit: [
      '12×12 + 6×6 modular frame',
      'Overhead 1/4 silent diffusion',
      'Overhead unbleached muslin',
      'Polysilk skin',
      '1-stop silk',
      '2-stop silk',
      'Ropes + corners + bag'
    ],
  },

  // ========== SOUND ==========

  'sd-633': {
    blurb: 'The Sound Devices 633 — a 6-input mixer/recorder that\'s been the workhorse of indie production sound for a decade.',
    description: [
      'A field mixer and recorder in one chassis. Six XLR inputs, dual SD card recording, and timecode in/out via BNC. Records to WAV in mirror or split modes, so your masters are always backed up.',
      'Comes with the ORCA OR-28 sound bag (Porta Brace harness) so it\'s ready to walk onto a moving set out of the case. Pairs cleanly with the Lectrosonics SMDWB wireless and the MKH 50 boom for narrative dialogue.'
    ],
    kit: [
      'Sound Devices 633 field mixer/recorder',
      '6 XLR inputs',
      'Timecode in/out (BNC)',
      'Dual SD card recording',
      'ORCA OR-28 sound bag',
      'Porta Brace harness',
      'AC power adapter'
    ],
  },

  'mkh50': {
    blurb: 'The Sennheiser MKH 50 — a supercardioid that is the industry-standard interior boom mic.',
    description: [
      'For dialogue inside rooms, you reach for the MKH 50. The supercardioid pattern rejects ceiling and side reflections, so you get the actor\'s voice without the room\'s flutter echo. RF condenser design means low self-noise even with a long cable run.',
      'Comes with the full Rycote Super-Shield blimp kit — wind protection, suspension mount, and pistol grip — so it\'s ready to walk under any boom pole. Pairs naturally with our Ambient QP480-SCM carbon-fiber pole.'
    ],
    kit: [
      'Sennheiser MKH 50 supercardioid',
      'Rycote Super-Shield blimp',
      'Rycote suspension mount',
      'Rycote pistol grip',
      'Rycote windjammer',
      'XLR cable'
    ],
  },

  'cos11d': {
    blurb: 'The Sanken COS-11D — the broadcast standard lavalier. Tiny, transparent, and bulletproof in talent\'s wardrobe.',
    description: [
      'The COS-11D is the lav you see hidden under blouse buttons and inside jacket lapels on every well-recorded interview. Omnidirectional, so it forgives slight mic-orientation shifts when talent turns their head. Sweat-resistant capsule survives a hot day of bodywork.',
      'Hardwire-terminated for the Lectrosonics SMDWB out of the box. Comes with Bubblebee concealers and clips for fast costume changes.'
    ],
    kit: [
      'Sanken COS-11D omni lavalier',
      'Lectrosonics-compatible termination',
      'Bubblebee concealer + clip',
      'Standard tie clip',
      'Mounts + tape',
      'Carrying case'
    ],
  },

};

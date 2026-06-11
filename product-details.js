/* Extra per-product detail for the /product.html template.
   inventory.js provides the catalog index (name, price, spec, photo, dept, cat).
   This file adds the long description, kit list, and optional gallery shots.
   Items without an entry here still render fine — they just show the basics
   (hero block + related row), skipping the kit/story section entirely.

   Lighting + power copy is from Martin's Google Slides deck verbatim
   ("Thunderstruck Pictures Website Product Pages Content for Lighting Category"). */
const PRODUCT_DETAILS = {

  // ========== CAMERA (Martin doesn't have a camera deck yet — copy is mine) ==========

  'arri-alexa-35': {
    blurb: 'The flagship Super-35 cinema body — 17 stops of dynamic range, REVEAL Color Science, and the rental-house gold standard for episodic and feature work.',
    description: [
      'The ALEXA 35 is ARRI\'s first new sensor in twelve years — a Super-35 4.6K CMOS with 17 stops of dynamic range, 2.5 stops more than any previous ALEXA, and a sensitivity range from EI 160 to EI 6400. REVEAL Color Science delivers the look the industry has trusted for fifteen years, now with richer skin tones and cleaner shadows.',
      'Our production set ships fully built — top handle, side handles, top cheese plate, V-mount battery plate adapter, PL mount, and the high-bright multi viewfinder. Pairs cleanly with our PAVO anamorphics or VESPID primes for narrative work where dynamic range, color, and a recognizable ARRI texture matter.'
    ],
    kit: [
      'ARRI ALEXA 35 Super-35 4.6K body',
      'ARRI MVF-2 Multi Viewfinder',
      'PL mount + LBUS contacts',
      'Top handle + cheese plate',
      'Side handle (right)',
      '15mm bridge plate baseplate',
      'V-mount battery plate adapter (2×)',
      'CFexpress Type B media'
    ],
  },

  'sony-a7iv': {
    blurb: 'Our default B-camera — 33MP full-frame, 4K60 10-bit, and the autofocus most projects expect for run-and-gun work.',
    description: [
      'The Sony A7 IV is the workhorse hybrid we reach for whenever the shoot calls for a small, fast, full-frame body — BTS, second-unit, doc, social, or pickup days. 33MP stills and 4K60 10-bit video in S-Log3 share the same body, and the real-time AF (human, animal, bird, vehicle) means you can hand it to a one-person crew without worrying about focus.',
      'Our kit ships with the Sony FE 24–105mm f/4 G OSS — the most versatile single-lens option Sony makes — plus dual card slots (CFexpress Type A + SD UHS-II). Add a battery and you\'re shooting in under two minutes.'
    ],
    kit: [
      'Sony α7 IV full-frame body (33MP)',
      'Sony FE 24–105mm f/4 G OSS lens',
      'NP-FZ100 battery × 2',
      'Dual battery charger',
      'CFexpress Type A card',
      'Body cap + lens cap'
    ],
  },

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

  'arri-signature-zoom-24-75': {
    blurb: 'ARRI\'s flagship full-frame cine zoom — covers Super-35 through large-format at a constant T2.8, with the same organic Signature look as the primes.',
    description: [
      'The Signature Zoom 24-75mm T2.8 is the lens we reach for when a project needs zoom versatility without compromising on the ARRI Signature look. Full-frame coverage on the wide end, large-format coverage across the range, and a constant T2.8 aperture mean exposure stays locked while you zoom — no compromise on quick-turnaround commercial or documentary work.',
      'LPL mount makes it a native pair for the ALEXA 35; LBUS connectors carry lens metadata for VFX and post. Internal focus with no front-rotation simplifies matte box and filter work. We ship the zoom in a Pelican case with front/rear caps and shims for matching focus marks across our other Signature glass.'
    ],
    kit: [
      'ARRI Signature Zoom 24-75mm T2.8',
      'LPL mount + LBUS',
      'Front + rear lens caps',
      'Pelican carrying case',
      'PL mount available on request'
    ],
  },

  'pavo-set': {
    blurb: 'A complete two-lens DZOFilm PAVO 2x anamorphic set — classic anamorphic character on a modern PL-mount cine body.',
    description: [
      'The PAVO 2x set delivers the oval bokeh, horizontal flare, and squeezed frame anamorphic shooters love, without the rehousing-budget price tag. T2.1 across the set means consistent exposure in low light, and the close minimum focus opens up macro and tabletop work.',
      'Pairs naturally with the RED Komodo 6K for a Super-35 anamorphic capture path. Both lenses are matched in size, weight, and gear positions — quick lens swaps on set, predictable follow-focus marks.'
    ],
    kit: [
      'DZOFilm PAVO 2x 28mm T2.1',
      'DZOFilm PAVO 2x 40mm T2.1',
      'DZOFilm PAVO 2x 75mm T2.1',
      'DZOFilm PAVO 2x 135mm T2.5',
      'PL mount on all four lenses',
      'Standard 0.8 mod focus + iris gears',
      'Hard case'
    ],
    gallery: [
      { src: 'pavo-set.webp',   caption: 'All four lenses' },
      { src: 'pavo-set-1.webp', caption: '28mm T2.1' },
      { src: 'pavo-set-2.webp', caption: '40mm T2.1' },
      { src: 'pavo-set-3.webp', caption: '75mm T2.1' },
      { src: 'pavo-set-4.webp', caption: '135mm T2.5' },
    ],
  },

  'vespid-set': {
    blurb: 'A four-lens DZOFilm VESPID full-frame prime kit — sharp, fast, and cinematic across the full-frame circle.',
    description: [
      'The VESPID set is our go-to spherical full-frame package for narrative and commercial work. T2.1 across all four lenses gives you a fast, consistent stop. Image circle covers full-frame, so you\'re ready for our PL-mount cine bodies and Sony Venice/Komodo Super-35 alike.',
      'Color matches the PAVO anamorphics if you want to mix anamorphic and spherical on the same project. Standard 0.8 mod gears and a 95mm front diameter mean follow focus and matte box swap in seconds.'
    ],
    kit: [
      'DZOFilm VESPID 16mm T2.1',
      'DZOFilm VESPID 25mm T2.1',
      'DZOFilm VESPID 35mm T2.1',
      'DZOFilm VESPID 75mm T2.1',
      'PL mount on all four lenses',
      'DZOFilm 4-lens hard case'
    ],
    gallery: [
      { src: 'vespid-set.webp',      caption: 'All four lenses' },
      { src: 'vespid-set-1.webp',    caption: '16mm T2.1' },
      { src: 'vespid-set-2.webp',    caption: '25mm T2.1' },
      { src: 'vespid-set-3.webp',    caption: '35mm T2.1' },
      { src: 'vespid-set-4.webp',    caption: '75mm T2.1' },
      { src: 'vespid-set-case.webp', caption: 'Hard case' },
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

  'mavic-mini': {
    blurb: 'A pocket-sized 2.7K drone that flies under the 250g registration threshold — fast to launch, easy to ship, and a working second-unit camera in your back seat.',
    description: [
      'The Mavic Mini is our go-to drone for B-roll on documentary, narrative, and music video work where pulling out a Phantom or Inspire is overkill. Under 250g means no FAA registration for hobby flight, easier permitting in many locations, and a more discreet presence on set.',
      'Comes as the Fly More Combo: three batteries (~30 min flight each), a propeller cage for tight indoor flights, a charging hub that tops all three batteries in sequence, and a carry case that fits everything. The 3-axis gimbal stabilizes the 2.7K camera for clean, broadcast-usable B-roll right out of the box.'
    ],
    kit: [
      'DJI Mavic Mini drone (under 250g)',
      'Remote controller',
      '3× intelligent flight batteries (~30 min each)',
      'Charging hub',
      '360° propeller cage',
      'Spare propellers',
      'Carrying case',
      'Cables + chargers'
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
    gallery: [
      { src: 'mirage-mattebox.webp', caption: '' },
      { src: 'mirage-mattebox-2.webp', caption: '' },
      { src: 'mirage-mattebox-3.webp', caption: '' },
    ],
  },

  'nucleus-m': {
    blurb: 'Wireless follow focus with real torque — hand unit plus motors, 1,000 feet of range, and no MDR brick to rig.',
    description: [
      'The Nucleus-M is our standard wireless lens control package. Three channels — focus, iris, zoom — run from a hand unit with a hard-stop calibrated wheel and a marking disc your 1st AC will actually use. Range is rated to 1,000 feet, so it covers everything from a dolly-side pull to a car-rig follow. Each motor has its drive built in, so there\'s no separate MDR box to power or velcro to the cage.',
      'The motors clamp to 15mm or 19mm rods and ship with standard 0.8 pitch gears, so they land straight onto our DZOFilm PAVO anamorphics, VESPID primes, or the Laowa Ranger zoom. On gimbal days it plays nicely with the DJI RS 3 Pro for run/stop and focus from the grips. Calibrate the lens, set your marks, and pull from anywhere on set.'
    ],
  },

  'tentacle-sync': {
    blurb: 'Bluetooth timecode in a matchbox — jam every camera and recorder once, and dailies sync themselves.',
    description: [
      'The Sync E Mk2 is how we keep multi-camera days out of post-production purgatory. The temperature-compensated oscillator drifts less than one frame in 24 hours, so a morning jam holds through wrap. Thirty-five hours of battery on a USB-C charge means it outlasts the crew, and the whole unit weighs 30 grams — light enough to stick to a Komodo with the built-in hook-and-loop and forget.',
      'Setup and monitoring happen over Bluetooth in the Tentacle app, so you can confirm every unit on set is jammed without touching a camera. We include the RED Komodo and 5-pin LEMO cables so it plugs straight into our camera packages, and it speaks the same SMPTE language as the Sound Devices 633 and Tentacle TRACK E on the audio side. One jam in the morning; matching timecode in every file at night.'
    ],
  },

  'rs3-pro': {
    blurb: 'DJI\'s flagship handheld gimbal — 10 pounds of payload, automated axis locks, and carbon arms that balance a fully built cinema camera.',
    description: [
      'The RS 3 Pro carries 10 pounds, which in practice means a RED Komodo with a VESPID prime, wireless video, and a follow-focus motor still balances with headroom. The extended carbon-fiber arms clear taller builds, and the automated axis locks release and unfold the moment you power on — rebalancing between setups takes seconds instead of minutes. A 1.8-inch OLED touchscreen puts modes and motor tuning right on the body.',
      'Our combo adds the wireless lens and gimbal control handles, so one operator runs the move while a focus puller works remotely — or pair it with our Tilta Float vest system for all-day handheld that doesn\'t read as handheld. Third-gen stabilization keeps the horizon locked through running shots, stairs, and vehicle work. Balance it, lock it, go.'
    ],
  },

  'smallhd-1303': {
    blurb: 'The 13-inch director\'s monitor — 1,500 nits of HDR-ready brightness that stays readable outside at noon.',
    description: [
      'The 1303 HDR is our standard video-village and director\'s monitor. Thirteen inches of full-HD IPS panel at 1,500 nits means it stays daylight-viewable without a hood — a real consideration on Texas exteriors. Dual 3G-SDI ins and outs plus HDMI let it sit mid-chain, looping program out to a client monitor while the director works off the front.',
      'It pairs naturally with the Teradek Bolt 6 LT receiver for a wireless village, or drops into our Director\'s Monitor Cage with a V-mount for a walking director\'s rig. SmallHD\'s toolset — false color, focus assist, frame guides, LUTs — runs onboard, so the image you\'re judging is the image you\'re grading toward. Add a stand and you\'re watching.'
    ],
  },

  'portkeys-bm5': {
    blurb: 'A 2,200-nit 5.5-inch touchscreen that runs the RED Komodo over Wi-Fi — monitor and camera assistant in one.',
    description: [
      'The BM5WR earns its place in our Komodo packages by doing two jobs. As a monitor, it\'s a 2,200-nit 1080p panel with 3G-SDI and HDMI inputs — daylight-bright and wrapped in an aluminum shell that survives life on the front of a camera. As a controller, it talks to the Komodo over Wi-Fi: record start/stop, ISO, shutter, white balance, and touch-to-focus straight from the screen.',
      'That control matters most on gimbal and rig days — when the camera is on the RS 3 Pro, a car mount, or flying overhead on a menace arm, you change settings from the monitor instead of breaking down the rig. At 376 grams it adds little to a balanced build, and the SDI out feeds a Teradek for village. Mount it, link it, and stop touching the camera.'
    ],
  },

  // ========== LIGHTING (from Martin's deck verbatim) ==========

  'nanlux-2400b': {
    blurb: 'A robust and versatile beast comparable to a 4K HMI — the most powerful LED spotlight that runs on a 120V household outlet, with wireless CRMX control.',
    description: [
      'This robust and versatile beast is comparable to a 4K HMI light. It\'s the most powerful LED spotlight capable of running on a 120V household outlet. It can be wirelessly controlled via CRMX.'
    ],
    kit: [
      'Nanlux Evoke 2400B LED Light',
      '45° Reflector',
      '30° Reflector',
      '60° Reflector',
      'Barndoors',
      'Power Supply',
      'Quick Release Clamp',
      'DC Connection Cable',
      'AC Power Cable',
      'Flight Case and Reflector Bag'
    ],
    gallery: [
      { src: 'nanlux-2400b.webp', caption: '' },
      { src: 'nanlux-2400b-2.webp', caption: '' },
      { src: 'nanlux-2400b-3.webp', caption: '' },
      { src: 'nanlux-2400b-4.webp', caption: '' },
    ],
  },

  'aputure-1200x': {
    blurb: 'A 1,200W bi-color lamp with Aputure\'s BLAIR light engine and built-in CRMX — output equivalent to an 1,800W HMI.',
    description: [
      'This 1200 watt bi-color lamp features the BLAIR light engine for breakthrough color accuracy and built-in wireless CRMX control. The light output is equivalent to a 1800-watt HMI.'
    ],
    kit: [
      'Aputure Storm 1200x LED Light',
      '45° Reflector',
      '15° Reflector',
      '30° Reflector',
      'Control Box',
      'Weatherproof Head Cable',
      'AC Power Cable',
      'Skid',
      'Rolling Case and Reflector Bag'
    ],
    gallery: [
      { src: 'aputure-1200x.webp', caption: '' },
      { src: 'aputure-1200x-2.webp', caption: '' },
      { src: 'aputure-1200x-3.webp', caption: '' },
    ],
  },

  'aputure-f10': {
    blurb: 'The CF12 Fresnel + Barndoors set for the Storm 1200x — intensifies output up to 9× to 60,000 lux, with 8-leaf barndoors for clean cutting.',
    description: [
      'The CF12 Fresnel is designed for the STORM 1200x. It intensifies the light output by up to 9 times, producing up to 60,000 lux. It focuses the light\'s beam spread from a tight 15° to a 45° medium flood with smooth falloff from the center to the edge.',
      'The CF12 Barndoors are designed for the CF12 Fresnel. The 8-leaf barndoors enable you to quickly shape and/or cut the light output.'
    ],
    kit: [
      'Aputure CF12 Fresnel',
      'Aputure CF12 Barndoors'
    ],
    gallery: [
      { src: 'aputure-f10.webp', caption: '' },
      { src: 'aputure-f10-2.webp', caption: '' },
    ],
  },

  'aputure-600x': {
    blurb: 'The LS 600x Pro — variable color temperature 2700–6500K with impressive output, Sidus Link + CRMX control, and V-Mount battery options.',
    description: [
      'The LS 600x Pro boasts a variable color temperature range of 2700 to 6500K while still maintaining an impressive output. Adjustments can be made locally on the fixture or wirelessly from a distance via the Sidus Link mobile app and CRMX. The light can be powered by optional V-Mount batteries when AC power is unavailable. The 600x Pro is water-resistant.'
    ],
    kit: [
      'Aputure LS 600x Pro LED Light',
      'Aputure F10 Fresnel',
      'Aputure F10 Barndoors',
      'Hyper Reflector',
      'Control Box w/ V-Mount Battery Plates',
      'Weatherproof Head Cable',
      'Power Cable'
    ],
    gallery: [
      { src: 'aputure-600x.webp', caption: '' },
      { src: 'aputure-600x-2.webp', caption: '' },
      { src: 'aputure-600x-3.webp', caption: '' },
    ],
  },

  'amaran-200x': {
    blurb: 'A 200W bi-color Bowens-mount point source that sets up in seconds — the interview light that fits in one hand.',
    description: [
      'The Amaran 200x is the light we reach for on interview and small-crew days — 200 watts of bi-color COB output from 2700 to 6500K, so it matches tungsten practicals or daylight windows without gelling. CRI 95+ keeps skin tones honest, and stepless 0–100% dimming from the onboard dial or the Sidus Link app means you trim exposure without ever moving the stand.',
      'The Bowens mount takes the same modifiers as our 600-series — Light Dome Mini III, Lantern 90 — and our kit includes barndoors, a grid, and a gel holder for quick hard-light shaping. At this weight it rides a C-stand instead of a combo, which matters in tight locations. Pair two with an Aputure 600x key and you\'ve lit a two-person interview from one cart. Plugs into a wall; no distro required.'
    ],
  },

  'aputure-spot': {
    blurb: 'The Aputure Spotlight Mount — dual drop-in slot for gobos, gels, or iris, with 36° and 19° interchangeable lenses for ellipsoidal-style control.',
    description: [
      'The spotlight\'s design incorporates a dual drop-in slot, which can accept the included B-size gobo holder, gel holder, or an adjustable iris for further control over the shape and size of the light beam. Like an ellipsoidal light, the 36° and 19° lenses can be easily swapped to achieve a different beam angle.'
    ],
    kit: [
      'Aputure Spotlight Mount',
      '36° Lens',
      '19° Lens',
      'Gobo Holder with 3 x B-Size Gobos',
      'Gel Frame',
      'Lens Pen, Blower, & Cleaning Cloth'
    ],
    gallery: [
      { src: 'aputure-spot.webp', caption: '' },
      { src: 'aputure-spot-2.webp', caption: '' },
    ],
  },

  'aputure-60x': {
    blurb: 'The LS 60x — bi-color 2700–6500K with a 15–45° focusing beam, NP-F or V-mount battery power for off-grid setups.',
    description: [
      'The LS 60x has a color temperature range of 2700 to 6500K. The light\'s beam spread ranges from a tight 15 degrees to medium flood of 45 degrees and can be further modified by the barndoors. It can run on NP-F-type batteries or a V-mount battery in situations where AC electric is undesirable.'
    ],
    kit: [
      'Aputure LS 60x LED Light',
      'Barndoors',
      'Power Supply with Cable',
      'NP-F Battery Plate Adapter',
      'D-Tap Cable',
      'Bowens Mount Adapter'
    ],
  },

  'mega-6fc': {
    blurb: 'A 320W full-color RGB mat light (4\' × 3\') with CRI/TLCI 97+, 16-bit dimming, 20 effects, and wired or wireless DMX control.',
    description: [
      'This large 320-watt, full-color RGB mat light boasts a high color accuracy with CRI/TLCI ratings of 97+ and offers smooth 16-bit dimming between 0-100% and 20 lighting effects. The LED mat fits into a 3\' x 4\' softbox and frame for quick assembly in minutes. It can be powered with the AC adapter or two optional V-mount batteries. Control options include wired DMX via 5-pin DMX ports, or a wireless DMX receiver.'
    ],
    kit: [
      'LED Flexible Mat',
      'Mounting Frame with Clamp',
      'Softbox with Diffuser',
      'Grid',
      'Control Box with V-Mount Battery Plates',
      'Head Extension Cable 26\''
    ],
    gallery: [
      { src: 'mega-6fc.webp', caption: '' },
      { src: 'mega-6fc-2.webp', caption: '' },
      { src: 'mega-6fc-3.webp', caption: '' },
    ],
  },

  'astera-titan': {
    blurb: 'An 8-tube Astera Titan kit — wireless RGB tubes with 20-hour battery life, CRMX + Astera App control, and a charging case that powers them inside.',
    description: [
      'With a wide 120° beam spread, the Titan Tube is ideal for creating a soft direct light on your subject for use as an accent light or design element on set. The wireless tube is powered by an integrated battery that will give you 20 hours of runtime. It features 16 LED emitters in a 3.4\' long tube that you can mount onto a set or on a stand, hang from a grid, or even hold in your hand. The hard case features a power box that can charge the tubes inside. The lights can be controlled by CRMX or the Astera App.'
    ],
    kit: [
      '8 x Astera Titan Tubes',
      'Power Box',
      '8 x Foldable Stands',
      '16 x Baby Pin Double-Ended Spigots',
      '16 x Metal Holders + Cotter Pins',
      '16 x M5 Eyebolts',
      '8 x Waterproof Covers for Charging Ports',
      'Charging Case'
    ],
  },

  'infinibar': {
    blurb: 'A 4ft RGB LED tube with 96 pixel zones — built directly into sets or rigged with the connector ecosystem to make custom shapes.',
    description: [
      'The Infinibar is designed to be a key light, built directly into sets, or used with its connector ecosystem to create new shapes and designs. The light\'s RGBWW chipset produces color temperature light of 2000 to 10,000K and has 96 individual pixels (or lighting zones). It can be wirelessly controlled by CRMX or the Sidus Link App. The unit features 9 built-in lighting effects.'
    ],
    kit: [
      'Aputure Infinibar',
      'DC Power Adapter (9.8\')',
      'AC Locking Power Cable (4.9\')',
      'Clamp to Baby Pin Adapter',
      '2 x Magnetic Spacers',
      'Straight Connector'
    ],
  },

  'mc-pro': {
    blurb: 'A palm-size RGB LED with 2,000–10,000K range, 45° tight beam, CRMX + Sidus Link control, IP65, USB-rechargeable, with built-in magnets.',
    description: [
      'The MC Pro has an impressive color temperature range from 2,000 to 10,000K and a tight beam spread of 45° for increased intensity. This light allows you to add color to your production and can be used for in-camera practical effects or as a portable accent light.',
      'You can control it remotely using the Sidus Link app or CRMX. The fixture is rated IP65 for wet weather resistance. Its USB-rechargeable battery lasts up to two hours at maximum output and quickly recharges in 90 minutes. It easily fits in the palm of your hand and attaches to various metal objects via its built-in magnets. Additionally, a 1/4"-20 thread allows you to utilize other mounting options.'
    ],
    kit: [
      'Aputure MC Pro',
      'MC Pro Flat Diffuser',
      'MC Pro Dome Diffuser',
      'MC Pro Light Control Grid (30°)',
      'Cold Shoe Ball Head',
      '1/4"-20 Screw to Magnetic Plate Adapter',
      'USB-C Charging Cable',
      '4 x Adhesive Magnetic Plates'
    ],
  },

  'mc': {
    blurb: 'A palm-size multifunction RGBWW light with built-in magnets, OLED display, 9 effects, and Sidus Link remote control.',
    description: [
      'This small, palm-size multifunction light can be mounted via a 1/4"-20 thread or attached to metal objects via its built-in magnets. It features RGB LEDs as well as tungsten- and daylight-balanced LEDs. The compact light also packs 9 built-in special effects. You can control it with its native buttons, control wheels, and a small OLED display in the top corner, or remotely using the Aputure Sidus Link.'
    ],
    kit: [
      'Aputure MC LED Light',
      'Silicone Rubber Diffuser',
      'Magic Tape',
      'USB-C Charging Cable'
    ],
  },

  'b7c': {
    blurb: 'A 7W RGBWW smart bulb with standard E26/E27 base, 2,000–10,000K white range, Bluetooth control via Sidus Link, and a 70-min internal battery.',
    description: [
      'This 7W RGBWW LED smart bulb has a standard E26/E27 household light bulb socket screw-in base. The white light range of 2000 to 10,000K blends in seamlessly in any ambient light situation, and you can match other light fixtures.',
      'The bulb can be controlled with onboard buttons or wirelessly via Bluetooth up to 164\' using the Sidus Link app, and it has 9 lighting special effects. It has a built-in rechargeable battery that will give you 70 minutes of runtime per charge.'
    ],
    kit: [
      'Aputure B7C RGBWW LED Bulb'
    ],
  },

  'c7r': {
    blurb: 'A 10W RGBWW smart bulb with standard E26/E27 base, 2,000–10,000K white range, Bluetooth control via Godox Light app, and internal rechargeable battery.',
    description: [
      'This 10W RGBWW LED smart bulb has a standard E26/E27 household light bulb socket screw-in base. The white light range of 2000 to 10,000K blends in seamlessly in any ambient light situation, and you can match other light fixtures.',
      'The bulb is controlled wirelessly via Bluetooth using the Godox Light app. It has a internal rechargeable battery.'
    ],
    kit: [
      'Godox C7R RGBWW LED Bulb',
      'USB-C Cable',
      'Round Cup Light Bouncer'
    ],
    gallery: [
      { src: 'c7r.webp', caption: '' },
      { src: 'c7r-2.webp', caption: '' },
    ],
  },

  // ========== GRIP / POWER (from Martin's deck verbatim where present) ==========

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
    blurb: 'Honda\'s advanced inverter technology — 2,200W of super quiet, lightweight, fuel-efficient power that\'s as reliable as your wall outlet.',
    description: [
      'Honda\'s advanced inverter technology provides 2,200 watts of super quiet, lightweight and fuel-efficient power that is as reliable as the power you get from your outlets at home. The commercial-grade EU2200i engine can power a wide variety of light fixtures on your production.'
    ],
    kit: [
      'Honda EU2200i Generator',
      '5-Gallon Gas Can'
    ],
  },

  'delta-pro': {
    blurb: 'The ultimate portable power station for filmmakers — 3,600W AC output that powers a 1200x or 2400B, recharges from a wall outlet in 2.7 hours.',
    description: [
      'Powered by EcoFlow, the Aputure Delta Pro is the ultimate portable power station for filmmakers. The unit offers a 3,600W AC output to power high-output light fixtures on location such as the Aputure 1200x and Nanlux 2400B. The battery can be fully charged from a standard AC wall outlet in 2.7 hours. The 99 lb unit features wheels and a retractable handle for easy transport.'
    ],
    kit: [
      'Aputure Ecoflow Delta Pro Battery',
      'AC Charging Cable',
      'Car Charging Cable',
      'Solar Charging Cable'
    ],
  },

  'jackery-880': {
    blurb: 'High-powered with 2,000W peak / 1,000W continuous output and 880Wh capacity — charges 7 devices simultaneously on location.',
    description: [
      'High-powered with 2000W peak/1000W continuous output and an 880Wh capacity, the Jackery Explorer can handle most outdoor situations. It can charge 7 different devices simultaneously on location, such as a LED light, drone, mobile phone, iPad, laptop, camera battery, and fan.'
    ],
    kit: [
      'Jackery Power Station 880 Battery',
      'AC Charging Cable'
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

  'high-roller': {
    blurb: 'A pair of 18-foot American Grip high rollers — the stands that keep your 12×12 rags and biggest heads steady in a Texas gust.',
    description: [
      'High rollers are the backbone of any overhead rig. These American Grip 18-footers roll on wheels, so two grips can reposition a rigged 12×12 without striking it — the difference between a five-minute move and a thirty-minute one. The Rocky Mountain leg adjusts independently for stairs, curbs, and uneven lots, and the Junior receiver takes our biggest fixtures, from the Nanlux 2400B to the Aputure 1200x.',
      'Each stand carries up to 60 pounds and includes a 4.5-inch grip head for arms and frame ears. We rent them as a pair because overheads need two points of contact — fly a 12×12 silk, a solid, or digital green between them and you\'ve changed the light over an entire scene. Bag the legs generously; the sandbag package is built for exactly this.'
    ],
  },

  'kupo-roller': {
    blurb: 'Kupo\'s 19-foot high rollers, rated to 88 pounds — the extra margin you want under a big rag or a heavy head, rented as a pair.',
    description: [
      'When the rig is heavier or higher, these are the rollers we send. Nineteen feet of working height and an 88-pound capacity give real margin over a standard high roller — enough for a fully dressed 12×12 frame on a windy day, or a Nanlux 2400B flown at full height. The wheels mean repositioning happens without a strike, and the leg locks are positive and glove-friendly.',
      'Each includes a 4.5-inch grip head and a Junior receiver, so they pull double duty: overhead frame support on one setup, big-light stand on the next. Order them alongside the 12×12 frame system, the overhead skins set, and sandbags and you\'ve got the complete exterior soft-light package on one quote. Bag every leg; physics isn\'t negotiable.'
    ],
  },

  'cstand-kit': {
    blurb: 'Six 40-inch Matthews C-stands with grip heads and arms — the grip department\'s alphabet, in one order.',
    description: [
      'Nothing on set works without C-stands, so we rent them six at a time. Each Matthews 40-inch stand comes complete with a grip head and arm — flag duty, floppy duty, boom-a-light-over-the-couch duty. The mix includes sliding-leg stands for stairs and uneven ground plus turtle-base stands, where the removable base lets you rig a fixture inches off the floor.',
      'Six covers a typical interview or small narrative day: two flags on the key, a floppy for negative fill, a stand for the backlight, and spares — because there are never spares for long. Knuckles to the right so gravity tightens the grip, and bag every stand; our sandbag package quotes alongside this kit for a reason. The set that holds everything else up.'
    ],
  },

  'scrim-jim': {
    blurb: 'Westcott\'s Scrim Jim Cine 8×8 — a modular frame that breaks down to a 4×4 and builds back up in minutes, with cine clamps and bag.',
    description: [
      'The Scrim Jim is the overhead frame for crews without a grip truck. The anodized tubes snap together into an 8×8 or a 4×4 with no tools, no ears, no speed rail — one person can build it in under ten minutes. Fabrics tension onto the frame with touch fasteners, so swapping a diffusion for a bounce takes seconds instead of a re-rig.',
      'At 8×8 it\'s big enough to soften the sun over a two-shot or turn the Aputure 600x into a genuine soft key; at 4×4 it works handheld as a bounce or flies on a single C-stand arm. The included cine clamps grab any grip head, and the whole system packs into one shoulder bag. Big-frame results, hatchback footprint.'
    ],
  },

  'overhead-skins': {
    blurb: 'The full textile wardrobe for overhead frames — grid cloth, muslin, UltraBounce, silk, magic cloth, single net, and digital green.',
    description: [
      'Skins are where the look actually happens — the frame is just the hanger. This set covers the full menu: grid cloth for clean diffusion that holds up in wind, silk for a softer roll-off, magic cloth for diffusion-plus-bounce in one fabric, and unbleached muslin for a warm bounce that flatters skin. UltraBounce gives you white on one side and black on the other — fill and negative fill on the same rag.',
      'The single net pulls roughly half a stop off a source without changing its quality — the move when the light is right but hot. Digital green turns the same frame into an instant VFX backing for car work or window comps. Everything pairs with our 12×12/6×6 frame system and high rollers, and ships in labeled bags so the right rag comes off the truck first.'
    ],
  },

  // ========== SOUND (Martin doesn't have a sound deck yet — copy is mine) ==========

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
    gallery: [
      { src: 'sd-633.webp', caption: '' },
      { src: 'sd-633-2.webp', caption: '' },
      { src: 'sd-633-3.webp', caption: '' },
      { src: 'sd-633-4.webp', caption: '' },
      { src: 'sd-633-5.webp', caption: '' },
    ],
  },

  'hollyland-solidcom-c1pro': {
    blurb: 'A full-duplex 8-user wireless intercom — get the director, 1st AD, DP, gaffer, key grip, sound mixer, and script all on the same comms loop, no bodypack required.',
    description: [
      'The Solidcom C1 Pro is the comms system we deploy when a set needs to move fast — feature pickups, commercial gigs, multi-camera live events. Full-duplex DECT 6.0 transmits in the 1.9 GHz spectrum, secure and clean of cellular interference, with a line-of-sight range of 1,100 feet. Dual-mic ENC kills set noise so a whisper from video village reaches the boom op clearly.',
      'Each headset is true-wireless — battery and radio are built into the unit, no bodypack, no antenna in the way of harnesses or grip gear. The included hub charges the headsets and gives the master a clear visual of who\'s connected. AD, DP, key grip, sound, and the director all run on one loop instead of three different walkie channels.'
    ],
    kit: [
      'Hollyland Solidcom C1 Pro hub (master)',
      '8 × Solidcom C1 Pro headsets (1 master + 7 remote)',
      'Rechargeable Li-ion batteries (in-headset)',
      'Hub charging dock',
      'USB-C charging cables',
      'Carrying case'
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
    gallery: [
      { src: 'mkh50.webp', caption: '' },
      { src: 'mkh50-2.webp', caption: '' },
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

  'sound-blanket': {
    blurb: 'Two 72×80" sound blankets — the cheapest fix in the truck for a room that rings like a bathroom.',
    description: [
      'Hang two sound blankets in a reflective room and the dialogue track changes immediately — the flutter echo off parallel drywall dies, the boom tightens, and post stops fighting the room. We send them in pairs because reflections come in pairs: treat the wall behind camera and the hard surface nearest talent first. Drape them over C-stands, clip them to a doorframe, or lay one over a tile floor just out of frame.',
      'They moonlight all over set, too: the black side works as a quick flag or negative fill, the white side as a soft bounce, and between locations they pad camera cases like the moving blankets they secretly are. Cheap to rent, impossible to regret. If the room sounds bad, the fix costs less than lunch — not a new location.'
    ],
  },

  'dpa4061': {
    blurb: 'The DPA 4061 — the low-sensitivity sibling of the world\'s favorite lav, built for talent who project, shout, or sing.',
    description: [
      'The 4061 is the lav we reach for when the source is loud — stage performances, raised-voice scenes, vocalists, a preacher mid-sermon. The low-sensitivity capsule handles peaks up to 144 dB SPL before clipping, so the take survives the exact moment the take is about. The omnidirectional pattern forgives head turns and wardrobe shift, and DPA\'s flat, open response is the closest a lav gets to sounding like a boom.',
      'Physically it\'s tiny and sweat-resistant, so it hides under wardrobe through a full day of body heat. It complements the Sanken COS-11D in our kit: the Sanken for standard dialogue, the DPA when the meters are going to slam. Terminated for our Lectrosonics SMDWB transmitters, so the talent package goes out as one line. When the scene gets loud, this is the mic still recording cleanly.'
    ],
  },

  'lectro-smdwb': {
    blurb: 'Lectrosonics\' SMDWB — a wideband bodypack that transmits and records simultaneously, so the wireless take always has a backup.',
    description: [
      'Lectrosonics is the wireless production sound trusts, and the SMDWB adds two upgrades that matter on real sets. Wideband tuning covers the entire B1 block — 537 to 614 MHz — so finding clean spectrum in RF-noisy locations is a scan, not a gamble. And it records: a Broadcast Wave file writes to a microSD card inside the pack while it transmits, so a dropout in the RF chain no longer means a lost line.',
      'Selectable 25/50/100 mW output trades range against battery life, and two AA batteries run a full shoot day at 50 mW. Digital Hybrid Wireless keeps latency low and the noise floor clean into our Sound Devices 633. We terminate our Sanken COS-11D and DPA 4061 lavs for these packs. Wire the talent, jam timecode, and stop worrying about RF.'
    ],
  },

  'mm1': {
    blurb: 'The Sound Devices MM-1 — a beltpack preamp that gives the boom op their own gain, headphones, and confidence.',
    description: [
      'On bigger sets the boom operator works far from the mixer, and the MM-1 is how they stay self-sufficient. It\'s a single-channel preamp that lives on the boom op\'s belt: up to 66 dB of clean gain, 48V phantom power for the MKH 50, and a dedicated headphone output so the operator hears exactly what the mic hears — boom placement by ear instead of by hand signal.',
      'Sound Devices\' dual-stage limiter is effectively unclippable, catching the door slam or sudden shout before it ruins the channel, and the high-pass filter strips handling rumble before it reaches the bag. Two AA batteries run it roughly eight hours. It slots between our Ambient boom pole and the 633 with two XLRs. Small box, noticeably better boom track.'
    ],
  },

  'tentacle-track-e': {
    blurb: 'A timecode-stamped pocket recorder with 32-bit float — clip it to talent and clipping becomes mathematically impossible.',
    description: [
      'The TRACK E is the simplest path to wireless-quality talent audio without wireless: a recorder the size of a matchbox that clips to a belt, takes a lav, and writes 32-bit float WAV files with embedded timecode. Float math means there\'s no gain to set and no clipping to fear — a whisper and a scream land in the same file, both recoverable. The battery runs up to ten hours; the card records far longer.',
      'Because every file carries SMPTE timecode, the post workflow is drag, sync, done — it speaks the same language as our Tentacle Sync E Mk2 units on camera. We use it where RF fails or doesn\'t fit: car interiors, crowd scenes, run-and-gun days, or as a body-pack backup under a Lectrosonics rig. Pair it with a lav, jam it once, and forget it\'s rolling.'
    ],
  },


  // --- New lighting + accessories (from Martin's deck, slides 7-40) ---

  'light-dome-ii': {
    blurb: 'This 16-sided modifier renders soft light with a wraparound quality.',
    description: [
      'This 16-sided modifier renders soft light with a wraparound quality. Its silver interior maximizes your light source\'s output. Its 24" depth produces a focused light with directional control that can be narrowed further with the 40° grid. It includes a removable inner diffuser and both 1.5-stop and 2.5-stop front diffusers. The dome uses the popular Bowens mount.',
    ],
    kit: [
      'Aputure Light Dome II',
      '1.5-Stop Front Diffuser',
      '2.5-Stop Front Diffuser',
      'Inner Diffuser',
      '40° Grid',
      'Gel Filter Holder',
    ],
  },

  'lantern-90': {
    blurb: 'The Lantern 90 has a 3-foot diameter and casts a near 360° soft light that spreads evenly over a large area.',
    description: [
      'The Lantern 90 has a 3-foot diameter and casts a near 360° soft light that spreads evenly over a large area. You can mount it horizontally or hang it overhead on a boom to raise the ambient light level, open up shadows, and let more focused fixtures work their magic. To add versatility, it includes a skirt to control the light. The lantern has a Bowens mount.',
    ],
    kit: [
      'Aputure Lantern 90',
      'Barndoor Skirt',
    ],
  },

  'storm-80c': {
    blurb: "The STORM 80c's BLAIR-CG chipset features blue, lime, amber, indigo, and red LEDs to deliver higher brightness levels and color accuracy levels.",
    description: [
      "The STORM 80c's BLAIR-CG chipset features blue, lime, amber, indigo, and red LEDs to deliver higher brightness levels and color accuracy levels. It produces an impressive CCT range of 1800 to 20,000K. The light can be controlled wirelessly via CRMX. It's rated IP65 for weather resistance.",
    ],
    kit: [
      'Aputure 80c LED Light',
      'Aputure CF4 Fresnel',
      'Aputure CF4 Barndoors',
      'Mini ProLock Hyper Reflector',
      'Mini Lantern Diffuser',
      'AC Power Cable',
      'D-Tap to DC Barrel Power Cable',
      'Mini ProLock to Bowens Mount Adapter',
    ],
    gallery: [
      { src: 'storm-80c.webp', caption: '' },
      { src: 'storm-80c-2.webp', caption: '' },
      { src: 'storm-80c-3.webp', caption: '' },
      { src: 'storm-80c-4.webp', caption: '' },
      { src: 'storm-80c-5.webp', caption: '' },
      { src: 'storm-80c-6.webp', caption: '' },
    ],
  },

  'spot-mini': {
    blurb: 'This compact ellipsoidal projector is designed for the STORM 80c.',
    description: [
      'This compact ellipsoidal projector is designed for the STORM 80c. With a rotating barrel that allows for orientation of the integrated 4-leaf cutter, this Spotlight Mini comes with a 19° interchangeable lens. The kit also includes a gobo holder and 10 M-sized gobos for unique light projection shapes.',
    ],
    kit: [
      'Aputure Spotlight Mini with 19° Lens',
      '18-Blade Iris (M-Size)',
      'Gobo Holder',
      '10 x Gobos (M-Size)',
      'Gel Holder',
    ],
    gallery: [
      { src: 'spot-mini.webp', caption: '' },
      { src: 'spot-mini-2.webp', caption: '' },
      { src: 'spot-mini-3.webp', caption: '' },
    ],
  },

  'dome-mini-iii': {
    blurb: 'Armed with an upgraded foldable quick release mechanism, the 22.8" Light Dome Mini III accelerates the set-up time for its 16-sided circular softbox.',
    description: [
      'Armed with an upgraded foldable quick release mechanism, the 22.8" Light Dome Mini III accelerates the set-up time for its 16-sided circular softbox. Optimized for lightweight portability, the parabolic structure is fortified by 16 durable steel support rods, which now snap into place with the downward press of its widely-compatible Bowens Mount bracket.',
    ],
    kit: [
      'Light Dome',
      'Front Diffusion Cloth',
      'Gold/Silver Inner Baffle',
      '40° Light Control Grid',
    ],
  },

  'nova-ii': {
    blurb: 'This new 1000-watt light panel is brighter than the comparable Creamsource Vortex 8.',
    description: [
      'This new 1000-watt light panel is brighter than the comparable Creamsource Vortex 8. Its BLAIR-CG light engine covers the greatest range of saturated colors of any panel light on the market. It has a phenomenal CCT range from 1800 to 20,000K. The native 35º beam is tight enough to make reflecting this light more efficient. Use the flat diffuser to gain a 95º spread to soften the NOVA II, perfect for cyc walls, green screen work, and soft color washes.',
      'The light can be controlled wirelessly via CRMX and Sidus Link app. The rugged IP65 body is engineered for demanding productions in wet weather.',
    ],
    kit: [
      "Aputure NOVA II Color Light Panel 2' x 1'",
      'Flat Diffuser',
      'Removable Yoke with Junior Pin',
      "AC Power Cable (19.6')",
      'Rolling Hard Case',
    ],
    gallery: [
      { src: 'nova-ii.webp', caption: '' },
      { src: 'nova-ii-2.webp', caption: '' },
    ],
  },

  'nova-ii-softbox': {
    blurb: 'This Aputure softbox diffuses the hard output of the NOVA II light panel.',
    description: [
      'This Aputure softbox diffuses the hard output of the NOVA II light panel. It has a silver interior to maximize output. It comes with one- and two-stop diffusion cloths plus a 45° grid for further light-shaping capabilities.',
    ],
    kit: [
      'Aputure NOVA II 2x1 Softbox',
      'Diffusion Cloth (1-Stop)',
      'Diffusion Cloth (2-Stop)',
      'Fabric Grid (45º)',
    ],
  },

  'truss-clamps': {
    blurb: 'Quickly and safely rig your NOVA II 2x1 LED fixture to trusses.',
    description: [
      "Quickly and safely rig your NOVA II 2x1 LED fixture to trusses. This sturdy set of two adapters features quick release latches and a truss clamp that fits into the mounting slots of the fixture's removable yoke.",
    ],
    kit: [
      '2 Truss Clamps',
    ],
  },

  'pavoslim-120c': {
    blurb: 'The PavoSlim mat light is extremely thin and lightweight.',
    description: [
      'The PavoSlim mat light is extremely thin and lightweight. It provides bright and accurate RGBWW light with CRMX control. Stick it on the end of boom arm or C-clamp for a far-side key light. It offers 15 built-in special effects. The control box has built-in battery plates for V-mount batteries.',
    ],
    kit: [
      'Nanlite PavoSlim LED Panel',
      'Control Unit',
      'Universal Holder & Baby Pin Holder',
      'Quick Release Clamp',
      'Softbox with Standard Diffuser',
      'Egg Crate Grid',
      'DC Connection Cable',
      'AC Power Cable',
      "Head Extension Cable 24.6'",
    ],
    gallery: [
      { src: 'pavoslim-120c.webp', caption: '' },
      { src: 'pavoslim-120c-2.webp', caption: '' },
      { src: 'pavoslim-120c-3.webp', caption: '' },
      { src: 'pavoslim-120c-4.webp', caption: '' },
    ],
  },

  'pavoslim-coupler': {
    blurb: "This coupler and softbox kit provides the hardware needed to join two PavoSlim 120C LED panels together in either a 2'x2' or a 1'x4' configuration.",
    description: [
      "This coupler and softbox kit provides the hardware needed to join two PavoSlim 120C LED panels together in either a 2'x2' or a 1'x4' configuration. Included with the kit are two folding softboxes, two sets of dual-layer diffusion, and two egg crate grids to accommodate both size configurations.",
    ],
    kit: [
      '2 Nanlite Folding Softboxes with Egg Crate',
      "2'x2' Mounting Bracket",
      "1'x4' Mounting Bracket",
    ],
    gallery: [
      { src: 'pavoslim-coupler.webp', caption: '' },
      { src: 'pavoslim-coupler-2.webp', caption: '' },
      { src: 'pavoslim-coupler-3.webp', caption: '' },
    ],
  },

  'astera-titan-4': {
    blurb: 'With a wide 120° beam spread, the Titan Tube is ideal for creating a soft direct light on your subject for use as an accent light or design element on set.',
    description: [
      "With a wide 120° beam spread, the Titan Tube is ideal for creating a soft direct light on your subject for use as an accent light or design element on set. The wireless tube is powered by an integrated battery that will give you 20 hours of runtime. It features 16 LED emitters in a 3.4' long tube that you can mount onto a set or on a stand, hang from a grid, or even hold in your hand. The hard case features a power box that can charge the tubes inside. The lights can be controlled by CRMX or the Astera App.",
    ],
    kit: [
      '4 x Astera Titan Tubes',
      '4 x Astera Chargers for Titan',
      '4 x Foldable Stands',
      '8 x Baby Pin Double-Ended Spigots',
      '8 x Metal Holders + Cotter Pins',
      '8 x M5 Eyebolts',
      '4 x Waterproof Covers for Charging Ports',
      'Soft Bag',
    ],
  },

  'astera-box': {
    blurb: 'The Astera Box is designed to support Wi-Fi connectivity that works with Astera lights when using your phone or iPad tablet.',
    description: [
      'The Astera Box is designed to support Wi-Fi connectivity that works with Astera lights when using your phone or iPad tablet. It can be used either as a transmitter or receiver of wireless DMX. It offers CRMX, Bluetooth, and Wi-Fi protocols to control Astera lights via the Astera App or CRMX. Thanks to its integrated battery and compact design, the box is easy to carry.',
    ],
    kit: [
      'Astera Box Wi-Fi CRMX Transmitter',
      'Power Supply',
      'DMX Adapter Cable',
    ],
  },

  'titan-grid': {
    blurb: 'This 40-Degree grid for Titan Tubes is a fabric light-shaper that eliminates spill light and provides the directional control necessary for selective lighting.',
    description: [
      'This 40-Degree grid for Titan Tubes is a fabric light-shaper that eliminates spill light and provides the directional control necessary for selective lighting.',
    ],
    kit: [
      'Grid for Astera Titan Tube',
    ],
  },

  'anker-bank': {
    blurb: 'This powerful 10,000mAh power bank has a built-in USB-C cable and delivers up to 2 full charges for an Aputure MC Pro.',
    description: [
      "This powerful 10,000mAh power bank has a built-in USB-C cable and delivers up to 2 full charges for an Aputure MC Pro. It's small enough that you can velcro it to your MC Pro when you deploy the light for longer run times. It features speedy 30W fast charging technology.",
    ],
    kit: [
      'Anker Power Bank with USB-C Cable',
    ],
  },

  'mc-pro-bubble': {
    blurb: 'This Bubble Diffuser is designed for the MC Pro LED light.',
    description: [
      'This Bubble Diffuser is designed for the MC Pro LED light. It attaches directly to the front of the panel and helps you create a wider and softer spread of light with your panel. Great as an eye light. The included mounting bracket secures to your light via a 1/4"-20 screw and provides one 3/8"-16 and two 1/4"-20 mounting sockets, creating a variety of mounting options.',
    ],
    kit: [
      'Bubble Diffuser',
      'L-Bracket',
    ],
  },

  'mcsocket': {
    blurb: 'The McSocket is a clever and simple mounting option that uses ferromagnetic plates to place puck lights into traditional lamps or any fixture with a standard medium base E26 socket.',
    description: [
      'The McSocket is a clever and simple mounting option that uses ferromagnetic plates to place puck lights into traditional lamps or any fixture with a standard medium base E26 socket.',
    ],
    kit: [
      'McSocket',
    ],
  },

  'oben-mount': {
    blurb: 'Mount a hockey puck light, action camera, or smartphone mount onto a flat metal surface such as a car, boat, or refrigerator.',
    description: [
      'Mount a hockey puck light, action camera, or smartphone mount onto a flat metal surface such as a car, boat, or refrigerator. The kit includes a magnetic mount with a 1/4"-20 mounting screw and a mini ball head that can tilt up to 90° and support up to 6.6 lb. The magnetic mount uses a rare-earth magnet to provide pull resistance of up to 44 lb, and it is rubber-coated for extra grip and to protect the mounting surface.',
    ],
    kit: [
      'Oben Magnetic Mount with 1/4"-20 Mounting Screw',
      'Oben BD-02 Mini Ball Head',
    ],
  },

  'bulb-mount-kit': {
    blurb: 'We assembled this customized collection of various mounts and magnets to help you rig light bulbs in a variety of production situations.',
    description: [
      'We assembled this customized collection of various mounts and magnets to help you rig light bulbs in a variety of production situations.',
    ],
    kit: [
      'Magnet Mount with Power Cable',
      'Matthews Bulb Mount',
      'Baby Pin to 1/4-20" M',
      'Androokie 66mm Magnet with 1/4-20" M',
      'Adapter 5/8" F Baby to 1/4-20" M',
      'Scissor Clamp',
    ],
  },

  'arrilite-1000': {
    blurb: 'This open face tungsten light is a versatile location lighting fixture.',
    description: [
      "This open face tungsten light is a versatile location lighting fixture. It offers robust construction, and the ability to be easily adjusted for both spot and flood lighting. The high light output is ideal for bouncing or diffusing. The light includes barndoors, providing control over the light's shape. It's also compact and lightweight, making it ideal for use in locations where space and weight are often limited.",
    ],
    kit: [
      'Arrilite Tungsten Light',
      'Barndoors',
      'Extra Ushio DXW Lamp 1000W',
    ],
  },

  'arri-650': {
    blurb: 'The classic ARRI 650W Fresnel is a compact, lightweight tungsten fresnel spotlight that delivers impressive output.',
    description: [
      "The classic ARRI 650W Fresnel is a compact, lightweight tungsten fresnel spotlight that delivers impressive output. Perfect for a key light, back light, or accent light. The high-quality lens and reflector are engineered for excellent optical performance, giving you a predictable fresnel look and consistent coverage over the full beam area. Plus tungsten always looks good on an actor's skin. The focus adjustment allows for fine-tuning the beam angle from a narrow 14° to a fully flooded 52°. The light is dimmable when paired with an AC dimmer.",
    ],
    kit: [
      'Arri 650 Plus Tungsten Fresnel Light',
      'Barndoors',
      'Single Scrim',
      'Double Scrim',
    ],
    gallery: [
      { src: 'arri-650.webp', caption: '' },
      { src: 'arri-650-2.webp', caption: '' },
      { src: 'arri-650-3.webp', caption: '' },
    ],
  },

  'chimera-xs': {
    blurb: 'The Chimera XS Softbox (16" x 22") with silver interior is ideal for work in small spaces when medium softening of the light is desired.',
    description: [
      'The Chimera XS Softbox (16" x 22") with silver interior is ideal for work in small spaces when medium softening of the light is desired. The front face of the softbox is removable and comes with a one stop diffuser. It can be used with hot lights up to 750 Watts.',
    ],
    kit: [
      'Chimera XS Softbox',
      'Chimera Speed Ring',
    ],
    gallery: [
      { src: 'chimera-xs.webp', caption: '' },
      { src: 'chimera-xs-2.webp', caption: '' },
    ],
  },

  'sidus-four': {
    blurb: 'The Sidus Four is a 4-universe CRMX transmitter with a built-in wireless router and Ethernet node that supports up to 4 additional wired DMX universes with its bidirectional 5-pin DMX ports.',
    description: [
      'The Sidus Four is a 4-universe CRMX transmitter with a built-in wireless router and Ethernet node that supports up to 4 additional wired DMX universes with its bidirectional 5-pin DMX ports. With both wired and wireless in operation, it can transmit up to 8 DMX universes. Combined with its high-output dual-band antennas, the Sidus Four is a powerful transmitter for all the popular lighting protocols including CRMX, DMX Sidus, Art-Net, and sACN.',
      'It has a V-mount battery plate and an 80-minute internal backup battery. Made for professional filmmakers, the Sidus Four is built with an IP65-rated water-resistant construction for outdoor use.',
    ],
    kit: [
      'Aputure Sidus Four CRMX Transmitter',
      '5 x Dual-Band Antennas',
      '3/8" to Baby Pin Receiver Adapter',
      '18W / 9V Power Adapter',
      'Power Plug Set',
      '5-Pin XLR Male to 5-Pin XLR Male Adapter',
    ],
  },

  'ratpac-satellite': {
    blurb: "RatPac's Satellite is the all-in-one Art-Net to CRMX transmitter, with splash resistant enclosure, tactile membrane LED buttons and a rugged micro USB connection.",
    description: [
      "RatPac's Satellite is the all-in-one Art-Net to CRMX transmitter, with splash resistant enclosure, tactile membrane LED buttons and a rugged micro USB connection. It features ethernet or WiFi operation, and Intelligent 2.4 GHZ frequency hopping. It is compatible with all WiFi tablets and smart phones and can transmit up to 300 meters away.",
    ],
    kit: [
      'RatPac Satellite CRMX Transmitter',
    ],
  },

  'timolink-rx': {
    blurb: 'Built with CRMX modules from LumenRadio, the TimoLink RX converts a wired DMX console to wireless by receiving signals from CRMX-compatible light fixtures or transmitters at a range of up to 984\'.',
    description: [
      "Built with CRMX modules from LumenRadio, the TimoLink RX converts a wired DMX console to wireless by receiving signals from CRMX-compatible light fixtures or transmitters at a range of up to 984'. The five-pin female XLR connector rotates up to 270° for wider compatibility with different interface designs.",
    ],
    kit: [
      'Godox TimoLink RX CRMX Receiver',
    ],
  },

  'ipad-blackout': {
    blurb: 'Rent our Apple iPad Pro preloaded with a variety of lighting apps including a monthly subscription to the very popular Blackout lighting control app that works with nearly all brands of LED light fixtures including Astera, Aputure, Nanlux, Godox, Creamsource, Arri, and more.',
    description: [
      'Rent our Apple iPad Pro preloaded with a variety of lighting apps including a monthly subscription to the very popular Blackout lighting control app that works with nearly all brands of LED light fixtures including Astera, Aputure, Nanlux, Godox, Creamsource, Arri, and more.',
    ],
    kit: [
      'Apple iPad Pro M4 11"',
      'Blackout App Subscription',
      'iPad Cage',
      'Side Handles with NATO Clamp',
    ],
    gallery: [
      { src: 'ipad-blackout.webp', caption: '' },
      { src: 'ipad-blackout-2.webp', caption: '' },
      { src: 'ipad-blackout-3.webp', caption: '' },
    ],
  },

  // --- More PDF audit additions (drone moved to camera, plus 6 items I'd previously skipped) ---

  'metabones': {
    blurb: 'Lets you mount any PL-mount cine lens (our DZOFilm PAVO and VESPID sets, the Laowa Ranger) on a Canon EF or RF camera body.',
    description: [
      "Lets you mount any PL-mount cine lens (our DZOFilm PAVO and VESPID sets, the Laowa Ranger) on a Canon EF or RF camera body. The integrated NATO-rail base supports heavier lenses so the load isn't transferred to the camera mount.",
      'We rent it alongside the RED Komodo when shooters bring their own glass.',
    ],
    kit: [
      'Metabones EF/RF-to-PL adapter',
      'PL locking ring',
      'NATO-rail support base',
    ],
  },

  'directors-cage': {
    blurb: 'Built for client monitoring on the move.',
    description: [
      "Built for client monitoring on the move. The cage holds your director's monitor (SmallHD or similar) and a V-mount battery on the back, with two leather grip handles and a padded shoulder strap.",
      "Pairs with the SmallHD 1303 or ULTRA 5 for a complete handheld director's pack.",
    ],
    kit: [
      "Director's monitor cage",
      'Dual leather hand grips',
      'Shoulder strap',
      'V-mount battery plate',
      '15mm rod mounts',
    ],
  },

  'yaeger-cart': {
    blurb: 'The cart that lives on a long-form set.',
    description: [
      'The cart that lives on a long-form set. Two padded shelves for camera build, monitors, batteries, and accessories. The integrated Mitchell mount mast accepts a tripod head for high-mode setups, a steadicam vest for dynamic moves, or a boxed dovetail spinner for high-low transitions.',
      'All-terrain wheels with brakes handle stages, locations, and rough pavement equally well.',
    ],
    kit: [
      'YaegerPro 2-tier cart',
      'Mitchell mount mast',
      'Boxed dovetail spinner',
      'Tripod mast (75mm/100mm)',
      'Steadicam mast',
      'V-mount battery box',
      'All-terrain wheels with brakes',
    ],
  },

  'tilta-float': {
    blurb: 'Turns a gimbal into an all-day rig.',
    description: [
      'Turns a gimbal into an all-day rig. The padded vest transfers the load to your hips, the spring arm absorbs sway, and the carbon post keeps the gimbal at eye level for hours instead of minutes.',
      "Works with the DJI RS 3 Pro out of the box. Pairs naturally with the RED Komodo + our PAVO or VESPID lens sets for handheld work that doesn't read as handheld.",
    ],
    kit: [
      'Tilta Float vest with padded back support',
      'Carbon-fiber center post',
      'Spring-loaded support arm',
      'V-mount battery counterweight base',
      'Monitor cage',
      'Mounts a DJI RS 3 Pro or similar gimbal',
    ],
  },

  'dinkum-pod': {
    blurb: 'A heavy-duty magic-arm clamp that mounts a monitor, light, or microphone to a stand, doorframe, c-stand, or any tubular grip.',
    description: [
      'A heavy-duty magic-arm clamp that mounts a monitor, light, or microphone to a stand, doorframe, c-stand, or any tubular grip. The 10" reach gets you where a friction arm can\'t, and it holds 5+ lbs without sag.',
      "Standard rental for any setup where you need a quick accessory mount that doesn't require a c-stand.",
    ],
    kit: [
      'Dinkum ActionPod PRO 10" arm',
      'Heavy-duty spring clamp jaw',
      '1/4"-20 male tip',
      '3/8"-16 male tip',
      'Padded jaw inserts',
    ],
  },

  'ath-m50x': {
    blurb: "The closed-back monitoring headphones you've seen on every production sound mixer for the last decade.",
    description: [
      "The closed-back monitoring headphones you've seen on every production sound mixer for the last decade. Flat response across the spectrum so what you hear is what's hitting the recorder, and the closed-back design isolates from boom-op room noise.",
      'We rent these as a backup or second pair for video village monitoring; the mixer typically has their own.',
    ],
    kit: [
      'Audio-Technica ATH-M50x',
      'Detachable straight cable',
      'Detachable coiled cable',
      'Carry pouch',
    ],
  },
  'core-vmount-batt': {
    blurb: 'V-Mount cinema batteries — Helix Max 360Wh down to NEO Slim 98Wh, plus 50Wh micros for accessory power.',
    description: [
      'Standard V-mount battery package for the RED Komodo and the rest of the camera build. The Helix Max 360Wh runs a Komodo build all day; the NANO Micro 50Wh slips behind a monitor for clean handheld weight.',
      'Mix and match per shoot — flagship Helix Max for the body, NEO Minis for monitors and follow focus, NANOs for accessory power. Charging is handled by the matching Mach4 + Mini Dual chargers (rented separately).'
    ],
    kit: [
      'Core Helix Max 360Wh Dual-Voltage',
      'Core NEO Mini 147Wh V-Mount',
      'Core NEO Mini 98Wh V-Mount (×2)',
      'Core NANO X Micro 98Wh',
      'Core NANO Micro 147Wh (×4)',
      'Core NANO Micro 50Wh',
      'Core NEO Slim 98Wh'
    ],
  },

  'core-vmount-charger': {
    blurb: "Core SWX Mach4 4-position V-mount rapid charger, plus two Core Mini Dual chargers — enough to keep an all-day shoot running.",
    description: [
      'The Mach4 charges four V-mounts simultaneously at a 4A rate — fully charges a Helix Max overnight, tops up smaller packs in under two hours. Two Core Mini Dual chargers cover smaller batteries on a cart.',
      'Standard inclusion with any V-mount battery package. No extra rental cost; quoted alongside the batteries.'
    ],
    kit: [
      'Core SWX Mach4 4-Position Charger (4A Rapid)',
      'Core Mini Dual V-Mount Chargers (×2)',
      'AC cables'
    ],
  },

  'npf-batteries': {
    blurb: 'NP-F750 batteries + travel chargers for monitors, on-camera LEDs, and audio gear. Sony L-series compatible.',
    description: [
      "The smaller batteries that power everything else on set — SmallHD on-camera monitors, the Aputure LS 60x and other Sony NP-F compatible LEDs, and audio recorders that accept L-series.",
      'Includes wall-plug travel chargers so the swing set or motel can recharge overnight.'
    ],
    kit: [
      'GVM / Sony NP-F750 batteries (multiple)',
      'Travel chargers (wall-plug)',
      'D-Tap adapter cables (on request)'
    ],
  },
  'fat-gecko': {
    blurb: "Three industrial-strength suction cups with a ball-head camera mount — sticks a DSLR or mirrorless to a car, boat, or any smooth surface.",
    description: [
      "When a car-mount rig isn't needed but you still want a camera locked to the hood, window, fender, or a boat hull, the Fat Gecko triples up suction cups with a built-in lever-tightener that doesn't loosen at 70mph.",
      "Holds a typical DSLR or mirrorless build. Heavier setups (RED Komodo with matte box) should use a proper car-mount rig instead."
    ],
    kit: [
      'Delkin Fat Gecko Triple Suction Cup Mount',
      'Ball-head with 1/4"-20 tip',
      'Safety tether'
    ],
  },

  'liteflow': {
    blurb: "20\"×20\" Godox LiteFlow mirror reflectors — Medium-Light and Hard-Light — for bouncing a hard source into the actor's eye.",
    description: [
      "The film-style mirror reflector kit. Bounces a sun source or a 1200x/2400B around corners and into actor positions without sending light spilling everywhere. The Hard-Light reflector keeps the source direction crisp; the Medium-Light softens it slightly.",
      "Both reflectors mount on the included rail mount for boom-arm or c-stand rigging."
    ],
    kit: [
      'Godox LiteFlow 50 (20"×20") Hard-Light reflector',
      'Godox LiteFlow 50 (20"×20") Medium-Light reflector',
      'Rail mount'
    ],
  },

  'baby-boom': {
    blurb: "An adjustable baby-pin boom arm — booms a flag, scrim, or light from a c-stand at any angle.",
    description: [
      "Standard grip kit item. Mounts on a c-stand and extends a flag, silk, or small fixture out to a position the stand itself can't reach. Two pivot points let you boom up, down, sideways, or angle through a window."
    ],
    kit: [
      'Steel Baby Boom Arm',
      'Two adjustable pivots',
      'Baby-pin tip + baby-pin receiver'
    ],
  },

  'varipole': {
    blurb: "Vertical pressure poles between floor and ceiling — rig a c-stand head or grip clamp where a stand footprint won't fit.",
    description: [
      "When you need to hang a small fixture, flag, or microphone above the actor but a c-stand would block the camera, varipoles pressure-fit between floor and ceiling and accept any baby-pin or 5/8\" grip head.",
      "Standard rental as a pair. Maximum extension depends on ceiling height — works in residential interiors up to about 10ft."
    ],
    kit: [
      'Varipole Polecat (×2)',
      'Pressure-pad ends',
      '5/8" grip head receivers'
    ],
  },

  'ktek-bag': {
    blurb: "Compact K-Tek Stingray Junior X mixer bag — rain hood, harness loops, side mic-cable passthroughs.",
    description: [
      "Alternative bag for a smaller recorder build — Sound Devices 633 or MixPre series. Less bulky than the ORCA OR-28; better for run-and-gun documentary work where the bag itself needs to disappear under a jacket or off to the side.",
      "Built-in rain hood unzips for outdoor weather. Pairs with the Porta Brace harness or any standard sound-bag belt."
    ],
    kit: [
      'K-Tek Stingray Junior X bag',
      'Rain hood',
      'Side cable passthroughs',
      'Standard harness loops'
    ],
  },

  // --- Auto-added galleries (auxiliary photos) ---

  'smallhd-ultra5': {
    blurb: 'A 3,000-nit 5-inch touchscreen that doubles as a camera controller — bright enough for full sun, smart enough to run the Komodo.',
    description: [
      'The ULTRA 5 is the on-camera monitor we send when the operator needs to actually see in daylight — 3,000 nits is roughly double most on-camera panels, so no more cupping a hand over the screen between takes. The 1080p touchscreen runs SmallHD\'s PageOS with the full toolset: false color, focus peaking, custom LUTs, and anamorphic de-squeeze for our PAVO set.',
      'Beyond monitoring, it\'s a control surface — with the camera-control license and cable it drives RED KOMODO and ARRI settings from the screen: record, ISO, white balance, shutter, without touching the body. Physical front buttons mean gloved hands still work. We include a V-mount plate so power is one battery, with no cables snaking across the build.'
    ],
    gallery: [
      { src: 'smallhd-ultra5.webp', caption: '' },
      { src: 'smallhd-ultra5-2.webp', caption: '' },
      { src: 'smallhd-ultra5-3.webp', caption: '' },
    ],
  },

  'teradek-bolt6': {
    blurb: 'Zero-delay wireless video to 750 feet — what the director sees is what the lens sees, the same instant.',
    description: [
      'The Bolt 6 LT 750 sends 1080p60 10-bit 4:2:2 video with effectively zero latency — under a millisecond — so a focus puller can pull off the receiver and a director can call action off a monitor that isn\'t lying to them. The 6GHz band is the headline: clean spectrum, free of the Wi-Fi congestion that plagues 5GHz links around buildings and busy locations.',
      'Rated to 750 feet line of sight, which covers video village across a parking lot or a process-trailer rig. AES-256 encryption keeps client feeds private. Both ends are V-mount ready, so the transmitter rides the camera battery plate and the receiver powers a director\'s monitor build — it pairs naturally with our SmallHD 1303 and the Director\'s Monitor Cage. Mount, pair, roll.'
    ],
    gallery: [
      { src: 'teradek-bolt6.webp', caption: '' },
      { src: 'teradek-bolt6-2.webp', caption: '' },
    ],
  },

  'dana-dolly': {
    blurb: 'The universal-track dolly that delivers real camera moves without a dolly truck — built and rolling in fifteen minutes.',
    description: [
      'The Dana Dolly is the most production value per pound in our camera support room. The dual-wheel carriage rides standard 1-1/4" speed rail, so your track can run three feet across a tabletop or twenty feet down a location hallway. The Mitchell riser takes a fluid head directly — our Sachtler Video 18 drops straight on — and the platform happily carries a fully built ALEXA 35 or Komodo.',
      'We ship it with the riser and slider stands for waist-height runs, and low mode goes straight onto apple boxes for ground-skimming moves. On interview days, a slow four-foot push-in reads like a jib shot at a fraction of the setup time. Add speed rail to the order and you\'re rolling by the first setup of the day.'
    ],
    gallery: [
      { src: 'dana-dolly.webp', caption: '' },
      { src: 'dana-dolly-2.webp', caption: '' },
    ],
  },

  'combo-triple': {
    blurb: 'A Matthews triple-riser combo stand — 14 feet of solid steel support with a Junior pin for fixtures that matter.',
    description: [
      'The combo stand is what you put under a light you can\'t afford to have move. This Matthews triple riser reaches 14 feet and carries 68 pounds on its Junior pin, so the Aputure 1200x, the Nanlux 2400B, or an Arrilite with a chimera rides without flex or wobble. The Rocky Mountain leg adjusts to stairs and slopes — set it on a curb or a hillside and the stand stays plumb.',
      'Unlike rollers, the combo plants and stays planted — the right call for a key light that holds position all day, or a backlight rigged high outside a window. The Junior receiver also takes baby adapters for smaller fixtures, so it scales from an Arri 650 up to the 2400B. Bag it according to height; the 35-pounders exist for stands like this.'
    ],
    gallery: [
      { src: 'combo-triple.webp', caption: '' },
      { src: 'combo-triple-2.webp', caption: '' },
    ],
  },

  'menace-arm': {
    blurb: 'The Matthews menace arm kit — boom a light or small frame out over the set from a stand that stays out of frame.',
    description: [
      'The menace arm solves the oldest problem in lighting: the light needs to be where a stand can\'t. A pipe cantilevers off a high roller or combo stand, counterweighted at the back, putting a fixture directly over the dinner table, the car hood, or the actor\'s head with nothing in the shot. It\'s how you hang a Lantern 90 over a table scene or rig an Astera Titan down a hallway ceiling.',
      'The kit includes the clamps and hardware to mount fixtures or fly a small frame off the end. Rig it with real counterweight — this is what the 35-pound sandbags and a second pair of hands are for — and always safety the fixture. Done right, it replaces a condor for low-ceiling overhead work. The most cinematic light on set usually hangs from one of these.'
    ],
    gallery: [
      { src: 'menace-arm.webp', caption: '' },
      { src: 'menace-arm-2.webp', caption: '' },
    ],
  },

  'flag-kit': {
    blurb: 'A full Matthews 24×36 scrim-and-flag kit — singles, doubles, silks, solids, and floppies, in studio and run-and-gun configurations.',
    description: [
      'This is the toolset that turns raw light into shaped light. The 24×36 size is the workhorse format: big enough to cut a key off a wall or flag a lens, small enough that one C-stand and one grip handle it. Singles and doubles pull half and full stops without changing the light\'s quality; silks soften the edge of a source; the solid kills it dead; the floppy unfolds to double its cut.',
      'We pack it two ways — the full studio kit for stage days, and a tighter run-and-gun selection when the whole package needs to fit in a van with the camera gear. It pairs with our C-stand package one-to-one: every flag wants a stand, and every stand wants a sandbag. The cheapest fix for almost any lighting problem is somewhere in this kit.'
    ],
    gallery: [
      { src: 'flag-kit.webp', caption: '' },
      { src: 'flag-kit-2.webp', caption: '' },
    ],
  },

  'floppy-cutters': {
    blurb: 'A pair of 4×4 floppy cutters — top-hinged solids that open to 4×8 for cutting big sources and building fast negative fill.',
    description: [
      'The 4×4 floppy is the big stick of light control. Closed, it\'s a solid that takes the 1200x or the sun off your talent; unfold the top hinge and it becomes a 4×8 wall of black — enough to wrap an actor in negative fill or kill the bounce off a white building across the street. On interiors, two floppies build an instant corridor of contrast around your key.',
      'We rent them as a pair because they work in pairs: one cutting the source, one shaping the fill side. Each wants a C-stand or combo with a real bag on it — 4×8 of fabric is a sail in any breeze. Add our scrim-and-flag kit for the smaller cuts and you\'ve got the full light-shaping arsenal. Black is a lighting tool; this is the big one.'
    ],
    gallery: [
      { src: 'floppy-cutters.webp', caption: '' },
      { src: 'floppy-cutters-2.webp', caption: '' },
    ],
  },

  'clamp-package': {
    blurb: 'The full grab-bag of grip clamps — Cardellinis, Mafers, super clamps, cheeseboros, baby pins, and adapters in one case.',
    description: [
      'Every rigging problem on set ends with someone calling for a clamp, and this case is the answer. Cardellinis bite onto shelving, doors, and round or square stock without marring the location; Mafer clamps with baby pins put a light anywhere a jaw fits; super clamps handle speed rail; cheeseboros join pipe to pipe for quick rail builds off a fence or scaffold.',
      'The baby pins and adapter collection bridges every thread and receiver standard on set — 5/8" baby to Junior, 1/4"-20 and 3/8"-16 for monitors and accessories. This is the kit that mounts an Astera Titan to a doorframe, an Aputure MC Pro inside a car, or a flag arm off set dressing with no stand in frame. We never send a truck out without it.'
    ],
    gallery: [
      { src: 'clamp-package.webp', caption: '' },
      { src: 'clamp-package-2.webp', caption: '' },
      { src: 'clamp-package-3.webp', caption: '' },
      { src: 'clamp-package-4.webp', caption: '' },
      { src: 'clamp-package-5.webp', caption: '' },
      { src: 'clamp-package-6.webp', caption: '' },
    ],
  },

  'sandbags': {
    blurb: 'A full sandbag package — 10s, 15s, 25s, and 35s — because every stand on set wants ballast before it gets a fixture.',
    description: [
      'Sandbags are the cheapest insurance on any call sheet. This package mixes weights to match the job: 10- and 15-pounders for C-stands carrying flags, 25s for combos under real fixtures, and 35s for high rollers flying 12×12 rags that catch wind like sails. The rule of thumb is one bag minimum per stand, doubled outdoors — and Austin afternoons produce gusts that enforce the rule.',
      'The saddle design drapes over knuckles and leg junctions so the weight loads the stand, not the ground beside it. They double as camera-department utility too — steadying a hi-hat, weighting a slider base, propping a lens case in a moving van. Quote them alongside any stand, frame, or overhead order. The gear they protect costs a lot more than they do.'
    ],
    gallery: [
      { src: 'sandbags.webp', caption: '15 lb' },
      { src: 'sandbags-2.webp', caption: '25 lb' },
      { src: 'sandbags-3.webp', caption: '35 lb' },
      { src: 'sandbags-4.webp', caption: '10 lb shot bag' },
      { src: 'sandbags-5.webp', caption: 'Filled set' },
    ],
  },

  'apple-boxes': {
    blurb: 'A full family of apple boxes — full, half, quarter, and pancake, four of each — the most-borrowed item on any set.',
    description: [
      'Apple boxes are the duct tape of the grip department. Sixteen total — four each of full, half, quarter, and pancake — handle leveling dolly track, raising an actor to a matching eyeline, propping a couch off its casters, building a low camera platform, or seating a director at the monitor. Stacked combinations get you to almost any height in small, predictable increments.',
      'They\'re rigging hardware, too: a pancake under a turtle-base C-stand puts a light at floor level, a full on end is an instant side table for the DIT, and two fulls plus a half makes the classic low-mode platform for the Dana Dolly. Solid construction means each box holds a standing adult without complaint. Nobody ever rented too many apple boxes.'
    ],
    gallery: [
      { src: 'apple-boxes.webp', caption: 'Full' },
      { src: 'apple-boxes-2.webp', caption: 'Half' },
      { src: 'apple-boxes-3.webp', caption: 'Quarter' },
      { src: 'apple-boxes-4.webp', caption: '1/8 (pancake)' },
    ],
  },

  'boom-pole': {
    blurb: 'Ambient\'s QP480-SCM carbon boom — 11 feet of reach with an internal coiled cable, light enough for a twelve-hour day.',
    description: [
      'Ambient\'s carbon-fiber poles are what working boom ops buy with their own money, and this one extends to 11 feet — enough to reach over a wide two-shot or down into a car window. Carbon matters at hour ten: ounces at the grip become pounds at the mic end, and this pole stays steady when arms get tired. The friction collets lock fast and don\'t creep mid-take.',
      'The internal coiled cable is the quiet hero — no external XLR slapping the pole between takes, no loose loop snagging a doorframe on a walking shot. It terminates at the base, so the boom op cables up once and forgets it. We include an Auray holder so the pole has a home on a C-stand between setups. Pairs with our MKH 50 blimp package and the Sound Devices MM-1 preamp.'
    ],
    gallery: [
      { src: 'boom-pole.webp', caption: '' },
      { src: 'boom-pole-2.webp', caption: '' },
      { src: 'boom-pole-3.webp', caption: '' },
    ],
  },

  'orca-bag': {
    blurb: 'The ORCA OR-28 sound bag with a Porta Brace harness — the mobile home your mixer\'s 633 lives in all day.',
    description: [
      'A bag rig is the difference between production sound that follows the action and a cart stuck at video village. The OR-28 carries a Sound Devices 633 or similar with clear sight lines to faders and screen, internal routing for antennas and power, and pouches for transmitters, spare lavs, and batteries. The rigid internal frame keeps its shape fully loaded.',
      'The included Porta Brace harness spreads the weight across the shoulders and lower back — which your mixer will appreciate by hour eleven. We also include the K-Tek Stingray Junior X for days when a smaller footprint matters, like doc work where the bag rides under a jacket. Pairs with our 633, Lectrosonics SMDWB wireless, and the MKH 50 boom package for a complete bag-based sound department.'
    ],
    gallery: [
      { src: 'orca-bag.webp', caption: '' },
      { src: 'orca-bag-2.webp', caption: '' },
      { src: 'orca-bag-3.webp', caption: '' },
    ],
  },
};

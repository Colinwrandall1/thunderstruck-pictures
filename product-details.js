/* Extra per-product detail for the /product.html template.
   inventory.js provides the catalog index (name, price, spec, photo, dept, cat).
   This file adds the long description, kit list, and optional gallery shots.
   Items without an entry here still render fine — they just show the basics
   (hero block + related row), skipping the kit/story section entirely.

   Lighting + power copy is from Martin's Google Slides deck verbatim
   ("Thunderstruck Pictures Website Product Pages Content for Lighting Category"). */
const PRODUCT_DETAILS = {

  // ========== CAMERA (Martin doesn't have a camera deck yet — copy is mine) ==========

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

/* Extra per-product detail for the /product.html template.
   inventory.js provides the catalog index (name, price, spec, photo, dept, cat).
   This file adds the long description, kit list, and optional gallery shots.
   Items without an entry here still render fine — they just show the basics. */
const PRODUCT_DETAILS = {
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
    // gallery: extra images beyond the hero (filename in media/products/)
    // gallery: ['red-komodo-2.webp','red-komodo-3.webp'],
  },
  // Template stub — copy/edit for the other 55 items in pass 2:
  // 'item-id': { blurb: '...', description: ['...'], kit: ['...'] },
};

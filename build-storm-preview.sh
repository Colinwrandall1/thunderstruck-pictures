#!/bin/sh
# Build the storm-variant preview site into storm-public/ for deploy to its own
# Netlify URL. The storm home (design-explorations/09-stormflight.html) becomes
# index.html at the root; supporting non-storm pages (all, product, production,
# contact) ride along with their nav links rewired to the storm set.
set -e
cd "$(dirname "$0")"
rm -rf storm-public
mkdir -p storm-public/assets storm-public/media storm-public/design-explorations

# v3 (real-footage video hero) is the canonical home -> root index.html
sed 's|\.\./||g' design-explorations/09-stormflight-v3.html > storm-public/index.html
# Older homes kept as aliases for reference/comparison
sed 's|\.\./||g' design-explorations/09-stormflight.html    > storm-public/v1.html
sed 's|\.\./||g' design-explorations/09-stormflight-v2.html > storm-public/v2.html
sed 's|\.\./||g' design-explorations/09-stormflight-v3.html      > storm-public/v3.html
# Photo-integration explorations: alt = gear plate in hero, alt2 = gear in intro section
sed 's|\.\./||g' design-explorations/09-stormflight-v3-alt.html  > storm-public/v3-alt.html
sed 's|\.\./||g' design-explorations/09-stormflight-v3-alt2.html > storm-public/v3-alt2.html
sed 's|\.\./||g' design-explorations/09-stormflight-v3-alt3.html > storm-public/v3-alt3.html

# Storm pages + shared scripts/data
cp camera-storm.html rentals-storm.html grip-truck-storm.html sound-storm.html \
   camera-storm-v2.html rentals-storm-v2.html grip-truck-storm-v2.html sound-storm-v2.html \
   product-storm.html truck-storm.html \
   nav-mobile.js inventory.js product-details.js inventory.js storm-public/
cp design-explorations/storm-theme.css design-explorations/storm-theme.js design-explorations/storm-theme-video.js design-explorations/accent-gold.css storm-public/design-explorations/

# Point the storm pages' home links at the root index
for f in storm-public/camera-storm.html storm-public/rentals-storm.html \
         storm-public/grip-truck-storm.html storm-public/sound-storm.html \
         storm-public/camera-storm-v2.html storm-public/rentals-storm-v2.html \
         storm-public/grip-truck-storm-v2.html storm-public/sound-storm-v2.html \
         storm-public/product-storm.html storm-public/truck-storm.html; do
  sed -i '' 's|href="design-explorations/09-stormflight.html"|href="index.html"|g' "$f"
done

# Supporting pages -> into the V3 flow: nav/product links pointed at the
# canonical -v2 set, and the storm video bg + glass theme + gold accent injected
# (done here, NOT in the source files, which are shared with the live non-storm site).
for f in all.html product.html production.html contact.html; do
  sed -e 's|href="camera.html"|href="camera-storm-v2.html"|g' \
      -e 's|href="rentals.html"|href="rentals-storm-v2.html"|g' \
      -e 's|href="grip-truck.html"|href="grip-truck-storm-v2.html"|g' \
      -e 's|href="sound.html"|href="sound-storm-v2.html"|g' \
      -e 's|product.html?id=|product-storm.html?id=|g' \
      -e 's|href="product.html"|href="product-storm.html"|g' \
      -e "s|camera:'camera.html', lighting:'rentals.html', grip:'grip-truck.html', sound:'sound.html'|camera:'camera-storm-v2.html', lighting:'rentals-storm-v2.html', grip:'grip-truck-storm-v2.html', sound:'sound-storm-v2.html'|" \
      -e "s|'rentals.html'|'rentals-storm-v2.html'|g" \
      -e 's|<span>Quote</span>|<span>Gear List</span>|g' \
      -e 's|aria-label="Open quote"|aria-label="Open gear list"|g' \
      -e 's|+ Add to Quote|+ Add to Gear List|g' \
      -e 's|} in quote</span>|} on gear list</span>|g' \
      -e 's|Your <span class="y">quote.</span>|Your <span class="y">gear list.</span>|g' \
      -e 's|<h4>Empty quote</h4>|<h4>Empty gear list</h4>|g' \
      -e 's|</head>|<link rel="stylesheet" href="design-explorations/storm-theme.css"><script defer src="design-explorations/storm-theme-video.js"></script><link rel="stylesheet" href="design-explorations/accent-gold.css"></head>|' \
      "$f" > "storm-public/$f"
done

# Only the assets the storm set actually references
cp assets/clouds-bg.jpg assets/hero-plate-lit.webp storm-public/assets/
cp media/truck-profile.webp media/gear-lineup-storm.webp storm-public/media/
cp media/storm-hero.mp4 media/storm-hero-poster.jpg storm-public/media/
cp media/martin-shapiro.jpg media/taylor-randall.jpg storm-public/media/
cp -R media/products storm-public/media/products

echo "Built storm-public/ ($(du -sh storm-public | cut -f1))"
echo "Deploy: netlify deploy --prod --dir storm-public --site <storm-site-id>"

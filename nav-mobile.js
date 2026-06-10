/* nav-mobile.js — drop-in mobile menu for any page whose nav follows the
   <nav class="nav"><a class="brand">...</a><div class="links">...</div></nav> pattern.
   Injects a hamburger button (visible <=960px) that slides the .links wrap down
   as a full-width drawer. Cart-trigger button (if present) is hoisted out of the
   drawer on mobile so it stays inline on the bar; restored inside .links on resize. */
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const linksWrap = nav.querySelector('.links');
  if (!linksWrap) return;
  const cartBtn = linksWrap.querySelector('.cart-trigger');
  if (linksWrap.dataset.navMobileInit) return;
  linksWrap.dataset.navMobileInit = '1';

  /* Scoped CSS */
  const css = document.createElement('style');
  css.textContent = `
    .nav-burger {
      display: none;
      background: transparent;
      border: 1px solid var(--line);
      width: 40px; height: 36px;
      padding: 0;
      cursor: pointer;
      position: relative;
      border-radius: 4px;
      transition: border-color .2s;
      flex: 0 0 auto;
    }
    .nav-burger:hover, .nav-burger:focus-visible { border-color: var(--yellow); outline: none; }
    .nav-burger span {
      position: absolute;
      left: 9px; right: 9px;
      height: 1.5px;
      background: var(--text);
      transition: transform .3s ease, opacity .2s ease, top .3s ease, bottom .3s ease;
    }
    .nav-burger span:nth-child(1){ top: 10px; }
    .nav-burger span:nth-child(2){ top: 50%; transform: translateY(-50%); }
    .nav-burger span:nth-child(3){ bottom: 10px; }
    .nav-burger[aria-expanded="true"] span:nth-child(1){ top: 50%; transform: translateY(-50%) rotate(45deg); }
    .nav-burger[aria-expanded="true"] span:nth-child(2){ opacity: 0; }
    .nav-burger[aria-expanded="true"] span:nth-child(3){ bottom: 50%; transform: translateY(50%) rotate(-45deg); }

    .nav-cluster { display: flex; align-items: center; gap: 0.55rem; }

    @media (max-width: 960px) {
      .nav-burger { display: inline-flex; align-items: center; justify-content: center; }

      .nav .links {
        position: fixed;
        top: 60px;
        left: 0; right: 0;
        flex-direction: column;
        align-items: stretch;
        background: rgba(6,8,11,0.98);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border-bottom: 1px solid var(--line);
        padding: 0.4rem clamp(1.2rem, 4vw, 3rem) 1.4rem;
        gap: 0;
        transform: translateY(-110%);
        transition: transform .35s cubic-bezier(.22,.85,.25,1);
        z-index: 49;
        pointer-events: none;
        flex-wrap: nowrap;
      }
      .nav .links.open { transform: translateY(0); pointer-events: auto; }

      .nav .links a:not(.cart-trigger){
        display: block !important;
        padding: 1rem 0;
        font-size: 1rem;
        letter-spacing: 0.06em;
        border-bottom: 1px solid var(--line);
        color: #c7d0da;
      }
      .nav .links a:not(.cart-trigger):last-of-type{ border-bottom: none; }
      .nav .links a.current { color: var(--yellow); }
    }

    body.nav-open { overflow: hidden; }
  `;
  document.head.appendChild(css);

  /* Build burger */
  const burger = document.createElement('button');
  burger.className = 'nav-burger';
  burger.setAttribute('aria-label', 'Open menu');
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-controls', 'nav-links-drawer');
  burger.innerHTML = '<span></span><span></span><span></span>';

  if (!linksWrap.id) linksWrap.id = 'nav-links-drawer';

  /* Right-side cluster holds cart-trigger (when mobile) + burger, sitting at far right */
  const cluster = document.createElement('div');
  cluster.className = 'nav-cluster';
  cluster.appendChild(burger);
  nav.appendChild(cluster);

  /* Place cart-trigger inline on the mobile bar, return to drawer on desktop */
  function adjustCartPlacement() {
    if (!cartBtn) return;
    const isMobile = window.innerWidth <= 960;
    if (isMobile && cartBtn.parentElement !== cluster) {
      cluster.insertBefore(cartBtn, burger);
    } else if (!isMobile && cartBtn.parentElement !== linksWrap) {
      linksWrap.appendChild(cartBtn);
    }
  }
  adjustCartPlacement();

  function toggle(open) {
    const isOpen = open !== undefined ? open : !linksWrap.classList.contains('open');
    linksWrap.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('nav-open', isOpen);
  }

  burger.addEventListener('click', () => toggle());
  linksWrap.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') toggle(false);
  });
  window.addEventListener('resize', () => {
    adjustCartPlacement();
    if (window.innerWidth >= 961) toggle(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && linksWrap.classList.contains('open')) toggle(false);
  });
})();

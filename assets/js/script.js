/*  script.js  --------------------------------------------------------------
   Vanilla-JS controller for the hero-page header (hamburger / slide-over)
   Works with the exact markup you pasted – no extra classes required.
---------------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
  /* -------------------------------------------------
     Cache DOM elements once
  --------------------------------------------------*/
  const header   = document.querySelector('header');
  const body     = document.body;

  // Open / close controls
  const openBtn  = header.querySelector('.lg\\:hidden button');          // hamburger
  const dialog   = header.querySelector('.lg\\:hidden[role="dialog"]');  // whole slide-over (inc. backdrop)
  const backdrop = dialog.querySelector('.fixed.inset-0');               // dark overlay
  const closeBtn = dialog.querySelector('button');                       // “X” button

  /* -------------------------------------------------
     Little helpers
  --------------------------------------------------*/
  const hide   = el => el.classList.add('hidden');
  const show   = el => el.classList.remove('hidden');

  /* -------------------------------------------------
     Start in the closed state (for JS-enabled browsers
     in case you didn’t pre-add `hidden` in the HTML).
  --------------------------------------------------*/
  hide(dialog);
  openBtn.setAttribute('aria-expanded', 'false');
  dialog.setAttribute('aria-hidden',  'true');

  /* -------------------------------------------------
     Open / close functions
  --------------------------------------------------*/
  function openMenu () {
    show(dialog);
    body.classList.add('overflow-hidden');           // lock page scroll
    openBtn.setAttribute('aria-expanded', 'true');
    dialog.setAttribute('aria-hidden', 'false');
  }

  function closeMenu () {
    hide(dialog);
    body.classList.remove('overflow-hidden');
    openBtn.setAttribute('aria-expanded', 'false');
    dialog.setAttribute('aria-hidden', 'true');
  }

  /* -------------------------------------------------
     Event wiring
  --------------------------------------------------*/
  openBtn .addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);     // tap the grey overlay

  // Close when any link inside the slide-over is clicked
  dialog.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // Escape key closes it too
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  // If user grows viewport past lg breakpoint, force menu shut
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) closeMenu();
  });
});


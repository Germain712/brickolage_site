/* Shared accessible menu script for site navigation
   Loaded with `defer` so DOM is available when executed. */
(function () {
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');
  if (!navToggle || !navList) return;
  const navLinks = navList.querySelectorAll('a');

  // Initialize ARIA state
  navToggle.setAttribute('aria-expanded', 'false');
  navList.setAttribute('aria-hidden', 'true');

  function openMenu() {
    navToggle.setAttribute('aria-expanded', 'true');
    navList.classList.add('open');
    navList.setAttribute('aria-hidden', 'false');
    document.addEventListener('keydown', onKeyDown);
    if (navLinks.length) navLinks[0].focus();
  }

  function closeMenu(returnFocus = true) {
    navToggle.setAttribute('aria-expanded', 'false');
    navList.classList.remove('open');
    navList.setAttribute('aria-hidden', 'true');
    document.removeEventListener('keydown', onKeyDown);
    if (returnFocus) navToggle.focus();
  }

  function onKeyDown(e) {
    if (e.key === 'Escape') {
      closeMenu();
      return;
    }

    if (e.key === 'Tab' && navList.classList.contains('open')) {
      const focusable = Array.from(navLinks);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    if (expanded) closeMenu(); else openMenu();
  });

  // Close menu if clicking outside while open
  document.addEventListener('click', (e) => {
    if (!navList.classList.contains('open')) return;
    const target = e.target;
    if (target === navToggle || navList.contains(target)) return;
    closeMenu(false);
  });
})();

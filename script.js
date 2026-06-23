const menuButton = document.querySelector('.hamburger');
const drawer = document.querySelector('.mobile-drawer');

if (menuButton && drawer) {
  menuButton.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open menu');
    });
  });
}

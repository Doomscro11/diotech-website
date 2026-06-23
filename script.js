const form = document.querySelector('#quoteForm');
const menuButton = document.querySelector('.hamburger');
const drawer = document.querySelector('.mobile-drawer');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const surface = data.get('surface') || '';
    const location = data.get('location') || '';
    const condition = data.get('condition') || '';
    const subject = encodeURIComponent(`DIOTECH assessment request - ${surface}`);
    const body = encodeURIComponent(`Surface / asset: ${surface}\nLocation: ${location}\nCondition / notes: ${condition}\n\nPlease attach wide, close-up, and access/context photos before sending.`);
    window.location.href = `mailto:info@diotech.ca?subject=${subject}&body=${body}`;
  });
}

if (menuButton && drawer) {
  menuButton.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

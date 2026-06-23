const form = document.querySelector('#quoteForm');
const menuButton = document.querySelector('.hamburger');
const drawer = document.querySelector('.mobile-drawer');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || '';
    const email = data.get('email') || '';
    const phone = data.get('phone') || '';
    const location = data.get('location') || '';
    const surface = data.get('surface') || '';
    const material = data.get('material') || '';
    const condition = data.get('condition') || '';

    const subject = encodeURIComponent(`DIOTECH assessment request - ${surface}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Location: ${location}\n` +
      `Surface / asset: ${surface}\n` +
      `Material / coating: ${material}\n` +
      `Condition / notes: ${condition}\n\n` +
      `Please attach wide, close-up, and access/context photos before sending.`
    );

    window.location.href = `mailto:info@diotech.ca?subject=${subject}&body=${body}`;
  });
}

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

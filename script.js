const form = document.querySelector('#quoteForm');
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

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

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    navLinks.classList.toggle('open');
  });
}

const navToggle = document.querySelector('.header-nav-icon');
const menu = document.querySelector('.header-nav-items');

navToggle.addEventListener('click', () => {
    const visibility = menu.getAttribute('data-visible');
    
    if (visibility === 'false') {
        menu.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true');
    } else if (visibility === 'true') {
        menu.setAttribute('data-visible', 'false')
        navToggle.setAttribute('aria-expanded', 'false');
    }


})
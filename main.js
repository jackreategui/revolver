const menuMobi = document.querySelector('#menuMobi');
const navMenu = document.querySelector('#navMenu');

menuMobi.addEventListener('click', () => {
    menuMobi.classList.toggle('menu_mobile_close');
    navMenu.classList.toggle('nav_menu_open');
});

navMenu.addEventListener('click', () => {
    menuMobi.classList.toggle('menu_mobile_close');
    navMenu.classList.toggle('nav_menu_open');
});

window.addEventListener('scroll', () => {
    // Verifica si el menú está abierto
    if (menuMobi.classList.contains('menu_mobile_close')) {
        // Cierra el menú
        menuMobi.classList.remove('menu_mobile_close');
        navMenu.classList.remove('nav_menu_open');
    }
})
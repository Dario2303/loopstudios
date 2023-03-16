const closeMenuBtn = document.querySelector('.nav-mobile__close');
const openMenuBtn = document.querySelector('.header__menu');
const navMobile = document.querySelector('.nav-mobile');

const h = navMobile.style;
h.height = '0';

menu()
function menu() {

    openMenuBtn.addEventListener('click', e => {
        if(e.isTrusted) {            
            h.height = '100vh';
        }
    })
    closeMenuBtn.addEventListener('click', e => {
        if(e.isTrusted) {
            h.height = '0';
        }
    })
}

resizing()
function resizing () {
    window.addEventListener('resize', () => {
        if (innerWidth > 375) {
            h.height = '0';
        }
    })
}
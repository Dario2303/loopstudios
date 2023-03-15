const closeMenuBtn = document.querySelector('.nav-mobile__close');
const openMenuBtn = document.querySelector('.header__menu');
const navMobile = document.querySelector('.nav-mobile');


menu()
function menu() {
    openMenuBtn.addEventListener('click', e => {
        if(e.isTrusted) {            
            navMobile.style.height = '100vh';
        }
    })
    closeMenuBtn.addEventListener('click', e => {
        if(e.isTrusted) {
            navMobile.style.height = '0';
        }
    })
}
document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    //гамбургер
    let hamburger = document.querySelectorAll('.hamburger'),
        hamburgerList = document.querySelectorAll('.hamburger__list'),
        hamburgerMenu = document.querySelector('.selection-menu__hamburger');

    for (let i = 0; i < hamburger.length; i++) {
        hamburgerList[i].addEventListener('click', hamburgerOpenClose);
    }

    function hamburgerOpenClose() {

        if (this.classList.contains('hamburger__list_click')) {
            this.classList.remove('hamburger__list_click');
            hamburgerMenu.style.display = 'none';
        } else {
            for (let i = 0; i < hamburger.length; i++) {
                if (hamburgerList[i].classList.contains('hamburger__list_click') != this) {
                    hamburgerList[i].classList.remove('hamburger__list_click');
                }
            }
            this.classList.add('hamburger__list_click');
            this.parentElement.append(hamburgerMenu);
            hamburgerMenu.style.display = 'block';
        }  
    }
}); 
import $ from 'jquery';
window.$ = window.jQuery = $;
// import './jquery-migrate-1.2.1.min.js';
import 'slick-carousel';
import './inputmask.js';
import './fontawesome-icons';

// import './_drop-down-list-info';

import '../css/bootstrap-grid.min.css';
import "../fonts/MyriadPro/stylesheet.css";
import "../fonts/FuturaStd/style.css";
import "../fonts/Gotham/stylesheet.css";
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import '../css/style.css';
// import '../sass/base/style.scss';


document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    //слайдер
    $('.carousel-inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    centerMode: true,
                    variableWidth: true,
                    autoplay:true
                }
            }
        ]
    });

    //гамбургер
    let hamburger = document.querySelectorAll('.hamburger'),
        hamburgerList = document.querySelectorAll('.hamburger__list'),
        hamburgerMenu = document.querySelector('.hamburger-menu');

    // console.log(hamburgerList);

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
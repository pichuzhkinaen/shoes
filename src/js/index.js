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

    //маска ввода номера телефона        
    // let form = document.querySelector('.form'),
    //     phone = document.getElementById('phone');


    // let im = new Inputmask("+7 (999) 999-99-99");
    // im.mask(phone);

    
});
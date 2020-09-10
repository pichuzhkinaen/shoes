import $ from 'jquery';
import "jquery-ui";
import 'slick-carousel';

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
});
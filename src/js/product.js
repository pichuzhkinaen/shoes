import $ from 'jquery';
window.$ = window.jQuery = $;
//import 'jquery-ui';
//require('webpack-jquery-ui');
import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';

import './fontawesome-icons';


import '../css/bootstrap-grid.min.css';
import "../fonts/MyriadPro/stylesheet.css";
import "../fonts/FuturaStd/style.css";
import "../fonts/Gotham/stylesheet.css";
import '../css/style.css';

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    //гамбургер
    let hamburger = document.querySelectorAll('.hamburger'),
        hamburgerList = document.querySelectorAll('.hamburger__list'),
        hamburgerMenu = document.querySelector('.selection-menu__hamburger');

    // console.log(hamburgerMenu);

    for (let i = 0; i < hamburger.length; i++) {
        hamburgerList[i].addEventListener('click', hamburgerOpenClose);
    }

    function hamburgerOpenClose() {

        if (this.classList.contains('hamburger__list_click')) {
            this.classList.remove('hamburger__list_click');
            // for (let j = 0; j < hamburgerMenu.length; j++) {
                hamburgerMenu.style.display = 'none';
            // }
        } else {
            for (let i = 0; i < hamburger.length; i++) {
                if (hamburgerList[i].classList.contains('hamburger__list_click') != this) {
                    hamburgerList[i].classList.remove('hamburger__list_click');
                }
            }
            this.classList.add('hamburger__list_click');
            this.parentElement.append(hamburgerMenu);
            // for (let j = 0; j < hamburgerMenu.length; j++) {
                hamburgerMenu.style.display = 'block';
            // }
        }  
    }

    $(function() {
        $( "#slider-range" ).slider({
          range: true,
          min: 20,
          max: 200,
          values: [44, 190],
          slide: function(event, ui) {
            //изменение значений при движении ползунков
            $( ".slider-range__amount-left" ).text( ui.values[ 0 ] + "$");
            $( ".slider-range__amount-right" ).text( ui.values[ 1 ] + "$");
          }
        });
        //добавление элементов со значениями ползунков при загрузке страницы
        $( ".ui-slider-handle:eq(0)" ).append( "<span class='slider-range__amount-left'>" + $( "#slider-range" ).slider( "values", 0 ) + "$" + "</span>" );
        $( ".ui-slider-handle:eq(1)" ).append( "<span class='slider-range__amount-right'>" + $( "#slider-range" ).slider( "values", 1 ) + "$" + "</span>" );
    });
}); 
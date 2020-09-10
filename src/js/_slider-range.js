import $ from 'jquery';
import "jquery-ui";
import 'slick-carousel';

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

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
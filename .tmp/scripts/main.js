'use strict';

$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        mobileFirst: true,
        adaptiveHeight: true,
        respondTo: 'min'
    });
    $('.left-btn').click(function () {
        var parent = $(this).parent();
        var slider = parent.children('.slider');
        slider.slick('slickPrev');
    });
    $('.right-btn').click(function () {
        var parent = $(this).parent();
        var slider = parent.children('.slider');
        slider.slick('slickNext');
    });
    $('.overlay-btn').click(function (e) {
        e.preventDefault();
        var parent = $(this).parent().prev().children('.slider-content');
        var pantalla = $(parent).children('.overlay-pantalla');
        if (pantalla.css('opacity') === '0') {
            pantalla.css('opacity', '0.7');
            pantalla.css('z-index', '2');
            $(this).addClass('gira');
        } else {
            $(pantalla).css('opacity', '0');
            pantalla.css('z-index', '0');
            $(this).removeClass('gira');
        }
    });

    $('.btn-hamburger').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(".pantalla-mobile").css('opacity', '0');
            $(".pantalla-mobile").css('height', '0');
        } else {
            $(this).addClass('active');
            $(".pantalla-mobile").css('opacity', '1');
            $(".pantalla-mobile").css('height', 'auto');
        }
    });
});
//# sourceMappingURL=main.js.map

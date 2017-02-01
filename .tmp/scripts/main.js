'use strict';

$(document).ready(function () {
    $('.slider').slick({
        arrows: false
    });
    $('.left-btn').click(function () {
        $('.slider').slick('slickPrev');
    });
    $('.right-btn').click(function () {
        $('.slider').slick('slickNext');
    });

    $('.overlay-btn').click(function (e) {
        e.preventDefault();
        var parent = $(this).parent().prev();
        var pantalla = $(parent).children('.overlay-pantalla');
        if ($(pantalla).css('opacity') === '0') {
            $(pantalla).css('opacity', '0.7');
            $(this).addClass('gira');
        } else {
            $(pantalla).css('opacity', '0');
            $(this).removeClass('gira');
        }
    });

    $('.btn-hamburger').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.pantalla-mobile').css('display', 'none');
        } else {
            $(this).addClass('active');
            $('.pantalla-mobile').css('display', 'flex');
        }
    });
});
//# sourceMappingURL=main.js.map

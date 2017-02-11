'use strict';

function mobileVsDesk() {
    var imgsSlider = $('.img-slider');
    var windowWidth = parseInt($(window).width());
    if (windowWidth >= 752) {
        for (var i = 0; i < imgsSlider.length; i++) {
            var src = $(imgsSlider[i]).attr('src');
            var mod = src.split('/');
            src = mod[0] + '/' + 'desktop/' + mod[2] + '/' + mod[3];
            $(imgsSlider[i]).attr('src', src);
        }
    }
}
//Sticky nav
function navs() {
    var nav = '';
    var windowWidth = parseInt($(window).width());
    if (windowWidth >= 752) {
        nav = $('.botonera-desktop');
    } else {
        nav = $('.cabecera');
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            nav.addClass('sticky');
        } else {
            nav.removeClass('sticky');
        }
    });
}

function links() {
    var botones = $('a');
    botones.each(function (index, value) {
        $(value).click(function (e) {
            e.preventDefault();
        });
        switch ($(value).html()) {
            case 'Monte':
                $(value).click(function () {
                    sectionClick('home');
                });
                break;
            case 'acciones':
                $(value).click(function () {
                    sectionClick('acciones');
                });
                break;
            case 'residencia':
                $(value).click(function () {
                    sectionClick('residencia');
                });
                break;
            case 'talleres':
                $(value).click(function () {
                    sectionClick('talleres');
                });
                break;
            case 'español':
                $(value).click(function () {
                    sectionClick('español');
                });
                break;
            case 'english':
                $(value).click(function () {
                    sectionClick('english');
                });
                break;
        }
    });
}

function sectionClick(section) {
    var sections = $('.visibility');
    sections.each(function (index, value) {
        if ($(value).attr('id') !== 'about') {
            $(value).css('display', 'none');
        }
        if ($(value).attr('id') === section) {
            $(value).css('display', 'block');
            console.log('yep');
        }
    });
}

$(document).ready(function () {
    //Slider Config
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

    //Overlay
    $('.overlay-btn').click(function (e) {
        e.preventDefault();
        var parent = $(this).parent().parent().prev().children('.slider-content');
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

    //Nav Mobie
    $('.btn-hamburger').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.pantalla-mobile').css('opacity', '0');
            $('.pantalla-mobile').css('height', '0');
            $('.pantalla-mobile').css('visibility', 'hidden');
        } else {
            $(this).addClass('active');
            $('.pantalla-mobile').css('opacity', '1');
            $('.pantalla-mobile').css('height', 'auto');
            $('.pantalla-mobile').css('visibility', 'visible');
        }
    });

    //Imgs mobile y desk
    mobileVsDesk();
    navs();
    links();
});
//# sourceMappingURL=main.js.map

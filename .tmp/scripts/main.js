'use strict';

//Nav sections : home en display none en la seccion home
//Cuando seccion !== home, el nav tiene una class sticky que no cambia
//Español none en pantalla mobile

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
function navs(actual) {
    var nav = '';
    var windowWidth = parseInt($(window).width());
    if (windowWidth >= 752) {
        nav = $('.botonera-desktop');
    } else {
        nav = $('.cabecera');
    }
    if (actual === undefined) {
        actual = 'home';
    }
    if (actual !== 'home') {
        nav.addClass('sticky');
        $('.botonera-home-btn').css('display', 'inline-block');
        $('.botonera-home-btn + li').css('padding-left', '30px');
    } else {
        nav.removeClass('sticky');
        $('.botonera-home-btn').css('display', 'none');
        $('.botonera-home-btn + li').css('padding-left', '0px');
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() < 1 && actual === 'home') {
            nav.removeClass('sticky');
        } else {
            nav.addClass('sticky');
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
                    sectionClick('home');setAbout('home');setHeader('Monte-home_intro.jpg');navs('home');
                });
                break;
            case 'home':
                $(value).click(function () {
                    sectionClick('home');setAbout('home');setHeader('Monte-home_intro.jpg');navs('home');
                });
                break;
            case 'acciones':
                $(value).click(function () {
                    sectionClick('acciones');setAbout('acciones');setHeader('acciones-header.jpg');navs('acciones');
                });
                break;
            case 'residencia':
                $(value).click(function () {
                    sectionClick('residencia');setAbout('residencia');setHeader('residencia-header.jpg');navs('residencia');
                });
                break;
            case 'talleres':
                $(value).click(function () {
                    sectionClick('talleres');setAbout('talleres');setHeader('talleres-header.jpg');navs('talleres');
                });
                break;
        }
    });
}

function setHeader(img) {
    var deskImg = $('.fondo-header source');
    var mobileImg = $('.fondo-header img');
    switch (img) {
        case 'Monte-home_intro.jpg':
            $(deskImg).attr('srcset', 'images/desktop/' + img);
            $(mobileImg).attr('srcset', 'images/mobile/' + img);
            break;
        case 'acciones-header.jpg':
            $(deskImg).attr('srcset', 'images/desktop/acciones/' + img);
            $(mobileImg).attr('srcset', 'images/mobile/acciones/' + img);
            break;
        case 'residencia-header.jpg':
            $(deskImg).attr('srcset', 'images/desktop/residencia/' + img);
            $(mobileImg).attr('srcset', 'images/mobile/residencia/' + img);
            break;
        case 'talleres-header.jpg':
            $(deskImg).attr('srcset', 'images/desktop/talleres/' + img);
            $(mobileImg).attr('srcset', 'images/mobile/talleres/' + img);
            break;
    }
    // $('header').css('background-image','url(../images/mobile/Monte-home_intro.jpg)');
}

function setAbout(section) {
    var titulo = $('.about-title');
    var contenido = $('.about-content');
    var consulta = $('#consulta_section span');
    if (section === 'home') {
        $('.home-structure').css('display', 'block');
        $('.other-structure').css('display', 'none');
    } else {
        $('.home-structure').css('display', 'none');
        $('.other-structure').css('display', 'block');
        switch (section) {
            case 'acciones':
                $(titulo).html(section).addClass('translate-js').attr('data-string', 'HOME_ACTIONS_TITLE');
                if ($(contenido).empty()) {
                    $(contenido).append($('<p></p>').html('encuentros de talleres, exposiciones y presentaciones vinculadas al arte.').addClass('translate-js').attr('data-string', 'HOME_ACTIONS_P')).append($('<p></p>').html('las acciones a lo largo del año se organizan en relación con las artes visuales: la pintura, la escultura y la imagen fija. también se reciben propuestas teniendo a disposición una sala equipada con: sillas, wi-fi, proyector, mesas. ').addClass('translate-js').attr('data-string', 'HOME_ACTIONS_OVER'));
                }
                $(consulta).html(section + ': ');
                break;
            case 'residencia':
                $(titulo).html(section).addClass('translate-js').attr('data-string', 'HOME_RESIDENCE_TITLE');
                if ($(contenido).empty()) {
                    $(contenido).append($('<p></p>').html('estimular el dialogo creativo mediante el intercambio y la hospitalidad cultural, por periodos de uno a tres meses.').addClass('translate-js').attr('data-string', 'HOME_RESIDENCE_P')).append($('<p></p>').html('la residencia es la posibilidad para artistas y demás creativos profesionales para residir y trabajar temporalmente fuera de su locación habitual. Esta oportunidad ofrece condiciones que conducen a la creatividad y provee de un contexto inspirador como también de facilidades prácticas, conexiones y la alternativa de exposición frente a una audiencia determinada. ').addClass('translate-js').attr('data-string', 'HOME_RESIDENCE_OVER'));
                }
                $(consulta).html(section + ': ');
                break;
            case 'talleres':
                $(titulo).html(section).addClass('translate-js').attr('data-string', 'HOME_WORKSHOPS_TITLE');
                if ($(contenido).empty()) {
                    $(contenido).append($('<p></p>').html('espacios personales de trabajo destinado para artistas visuales, escritores, productores, investigadores, editores, o personas a fin con las artes y el trabajo de oficio: pintura, escultura, imagen fija y en movimiento. ').addClass('translate-js').attr('data-string', 'HOME_WORKSHOPS_P')).append($('<p></p>').html('los talleres son 10 salas que varían en sus dimensiones y luminosidad. los alquileres son por un periodo mínimo de un año.').addClass('translate-js').attr('data-string', 'HOME_WORKSHOPS_OVER'));
                }
                $(consulta).html(section + ': ');
                break;
        }
    }
}

function sectionClick(section) {
    var sections = $('.visibility');
    sections.each(function (index, value) {
        if ($(value).attr('id') !== 'about') {
            $(value).css('display', 'none');
        }
        if ($(value).attr('id') === section) {
            $(value).css('display', 'block');
        }
    });
}

function translate() {
    $('.eng-btn').click(function () {
        $('.eng-btn').css('color', '#929292');
        $('.esp-btn').css('color', 'white');
        $.getJSON('../lang/lang_EN.json').done(function (data) {
            $('.translate-js').each(function () {
                var cadena = $(this).attr('data-string');
                $(this).text(data[cadena]);
            });
        });
    });
    $('.esp-btn').click(function () {
        $('.esp-btn').css('color', '#929292');
        $('.eng-btn').css('color', 'white');
        $.getJSON('../lang/lang_ES.json').done(function (data) {
            $('.translate-js').each(function () {
                var cadena = $(this).attr('data-string');
                $(this).text(data[cadena]);
            });
        });
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
    translate();
});
//# sourceMappingURL=main.js.map

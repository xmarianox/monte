//Español none en pantalla mobile

function closeNavBar(){
    if($('.btn-hamburger').hasClass('active')) {
        $('.btn-hamburger').removeClass('active');
        $( '.pantalla-mobile' ).css('opacity','0');
        $( '.pantalla-mobile' ).css('height','0');
        $( '.pantalla-mobile' ).css('visibility','hidden');
        $('.bar').css('display','inline-block');
    }
}

function mobileVsDesk(){
    var imgsSlider = $('.img-slider');
    var windowWidth = parseInt($(window).width());
    if(windowWidth >= 752) {
        for(var i = 0; i < imgsSlider.length; i ++) {
            var src = $(imgsSlider[i]).attr('src');
            var mod = src.split('/');
            src = mod[0] + '/' + 'desktop/' + mod[2] + '/' + mod[3];
            $(imgsSlider[i]).attr('src',src);
        }
    }
}
//Sticky nav
function navs(actual){
    var nav = '';
    var windowWidth = parseInt($(window).width());
        if(windowWidth >= 752) {
            nav = $('.botonera-desktop');
        }else{
            nav = $('.cabecera');
        }
        if(actual === undefined){
            actual = 'home';
        }
    if(actual !== 'home'){
        nav.addClass('sticky');
        if($(nav).hasClass('cabecera')){
            $('.fondo-header img').css('margin-top','70px');
        }else{
            // $(nav).css('background-color','rgba(0, 0, 0, 0.8)');
            $('.fondo-header img').css('margin-top','0');
        }
        $('.botonera-home-btn').css('display','inline-block');
        $('.botonera-home-btn + li').css('padding-left','30px');
        $('.cambio-botonera li:nth-child(1)').css('display','none');
        $('.cambio-botonera li:nth-child(3)').css('display','none');
        $('.botonera-sticky li:nth-child(2)').css('display','inline-block');
        $('.botonera-sticky li:nth-child(4)').css('display','inline-block');
    }else{
        nav.removeClass('sticky');
        $('.botonera-home-btn').css('display','none');
        $('.botonera-home-btn + li').css('padding-left','0px');
        $('.cambio-botonera li:nth-child(1)').css('display','inline-block');
        $('.cambio-botonera li:nth-child(3)').css('display','inline-block');
        $('.botonera-sticky li:nth-child(2)').css('display','none');
        $('.botonera-sticky li:nth-child(4)').css('display','none');
    }
        $(window).scroll(function () {
            if ($(this).scrollTop() < 1 && actual === 'home') {
                nav.removeClass('sticky');
            }
            else {
                nav.addClass('sticky');

            }
            if(nav.hasClass('sticky')){
                $('.botonera-sticky li:nth-child(2)').css('display','inline-block');
                $('.botonera-sticky li:nth-child(4)').css('display','inline-block');
                $('.cambio-botonera li:nth-child(1)').css('display','none');
                $('.cambio-botonera li:nth-child(3)').css('display','none');
            } else {
                $('.cambio-botonera li:nth-child(1)').css('display','inline-block');
                $('.cambio-botonera li:nth-child(3)').css('display','inline-block');
                $('.botonera-sticky li:nth-child(2)').css('display','none');
                $('.botonera-sticky li:nth-child(4)').css('display','none');
            }
        });
} //Modificar accion

function links() {
    var botones = $('a');
    botones.each(function(index, value){
        $(value).click(function (e){
            if(!($(value).hasClass('red'))){
                e.preventDefault();
            }
        });
        switch($(value).html()){
            case 'monte':
                $(value).click(function(){sectionClick('home');
                    setAbout('home');setHeader('Monte-home_intro.jpg');
                    navs('home');
                    translate();
                    $('body,html').animate({scrollTop : 0}, 500);
                    closeNavBar();});
                break;
            case 'home':
                $(value).click(function(){sectionClick('home');
                    setAbout('home');setHeader('Monte-home_intro.jpg');
                    navs('home');
                    translate();
                    $('body,html').animate({scrollTop : 0}, 500);
                    closeNavBar();});
                break;
            case 'acciones': $(value).click(function(){sectionClick('acciones');
                setAbout('acciones');
                setHeader('acciones-header.jpg');
                navs('acciones');translate();$('body,html').animate({scrollTop : 0}, 500);
                closeNavBar();});
                break;
            case 'residencia': $(value).click(function(){sectionClick('residencia');
                setAbout('residencia');
                setHeader('residencia-header.jpg');
                navs('residencia');
                translate();$('body,html').animate({scrollTop : 0}, 500);
                closeNavBar();});
                break;
            case 'talleres': $(value).click(function(){sectionClick('talleres');
                setAbout('talleres');
                setHeader('talleres-header.jpg');
                navs('talleres');
                translate();
                $('body,html').animate({scrollTop : 0}, 500);
                closeNavBar();
            });
                break;
        }
    });
} //Modificar accion de los links si cambia la navegacion
function setHeader(img) {
    var deskImg = $('.fondo-header source');
    var mobileImg = $('.fondo-header img');
    switch(img) {
        case 'Monte-home_intro.jpg':
            	$(deskImg).attr('srcset','images/desktop/'+img);
            	$(mobileImg).attr('srcset','images/mobile/'+img);

            break;
        case 'acciones-header.jpg':
            	$(deskImg).attr('srcset','images/desktop/acciones/'+img);
            	$(mobileImg).attr('srcset','images/mobile/acciones/'+img);
            break;
        case 'residencia-header.jpg':
            	$(deskImg).attr('srcset','images/desktop/residencia/'+img);
            	$(mobileImg).attr('srcset','images/mobile/residencia/'+img);
            break;
        case 'talleres-header.jpg':
            	$(deskImg).attr('srcset','images/desktop/talleres/'+img);
            	$(mobileImg).attr('srcset','images/mobile/talleres/'+img);
            break;
    }
    // $('header').css('background-image','url(../images/mobile/Monte-home_intro.jpg)');
} //Omitir si cambia la navegacion

function setAbout(section) {
    var titulo = $('.about-title');
    var contenido = $('.about-content');
    var consulta = $('#consulta_section span');
    // $('.about').each(function(index,value){
    //     if($(value).hasClass === 'about-acciones') {
    //
    //     }
    // });
    if(section === 'home') {
        $('.home-structure').css('display','block');
        $('.other-structure').css('display','none');
    }else{
        $('.home-structure').css('display','none');
        $('.other-structure').css('display','block');
        switch(section){
            case 'acciones':
                $(titulo).html(section).addClass('translate-js').attr('data-string', 'HOME_ACTIONS_TITLE');
                if($(contenido).empty()){
                    $(contenido)
                        .append($('<p></p>').html('encuentros de talleres, exposiciones y presentaciones vinculadas al arte.').addClass('translate-js').attr('data-string', 'HOME_ACTIONS_P'))
                        .append($('<p></p>').html('las acciones a lo largo del año se organizan en relación con las artes visuales: la pintura, la escultura y la imagen fija. también se reciben propuestas teniendo a disposición una sala equipada con: sillas, wi-fi, proyector, mesas. ').addClass('translate-js').attr('data-string', 'HOME_ACTIONS_OVER'))

                }
                $(consulta).html(section  + ': ');
            break;
            case 'residencia':
                $(titulo).html(section).addClass('translate-js').attr('data-string', 'HOME_RESIDENCE_TITLE');
                if($(contenido).empty()){
                    $(contenido)
                        .append($('<p></p>').html('estimular el dialogo creativo mediante el intercambio y la hospitalidad cultural, por periodos de uno a tres meses.').addClass('translate-js').attr('data-string', 'HOME_RESIDENCE_P'))
                        .append($('<p></p>').html('la residencia es la posibilidad para artistas y demás creativos profesionales para residir y trabajar temporalmente fuera de su locación habitual. Esta oportunidad ofrece condiciones que conducen a la creatividad y provee de un contexto inspirador como también de facilidades prácticas, conexiones y la alternativa de exposición frente a una audiencia determinada. ').addClass('translate-js').attr('data-string', 'HOME_RESIDENCE_OVER'))
                }
                $(consulta).html(section  + ': ');
            break;
            case 'talleres':
                $(titulo).html(section).addClass('translate-js').attr('data-string', 'HOME_WORKSHOPS_TITLE');
                if($(contenido).empty()){
                    $(contenido)
                        .append($('<p></p>').html('espacios personales de trabajo destinado para artistas visuales, escritores, productores, investigadores, editores, o personas a fin con las artes y el trabajo de oficio: pintura, escultura, imagen fija y en movimiento. ').addClass('translate-js').attr('data-string', 'HOME_WORKSHOPS_P'))
                        .append($('<p></p>').html('los talleres son 10 salas que varían en sus dimensiones y luminosidad. los alquileres son por un periodo mínimo de un año.').addClass('translate-js').attr('data-string', 'HOME_WORKSHOPS_OVER'))}
                $(consulta).html(section  + ': ');
            break;
        }
    }
} //Modificar para que complete cuando cargue la pagina en base a about- section

function sectionClick(section){
    var sections = $('.visibility');
    sections.each(function(index,value){
        if($(value).attr('id') !== 'about'){
            $(value).css('display','none');
        }
        if($(value).attr('id') === section) {
            $(value).css('display','block');
        }
    });
}

function translate(){
    var langHtml = $('#html').attr('lang');
    if(langHtml === 'es'){
        esp();
    }else{
    	eng();
    }
}
function eng(){
    $('.eng-btn').css('color','white');
    $('.esp-btn').css('color','#929292');
    $.getJSON('./lang/lang_EN.txt').done(function(data){
        $('.translate-js').each(function(){
            var cadena = $(this).attr('data-string');
            $(this).text(data[cadena]);
        });
    });
    $('#html').attr('lang','en');
}
function esp(){
    $('.esp-btn').css('color','white');
    $('.eng-btn').css('color','#929292');
    $.getJSON('./lang/lang_ES.txt').done(function(data){
        $('.translate-js').each(function(){
            var cadena = $(this).attr('data-string');
            $(this).text(data[cadena]);
        });
    });
    $('#html').attr('lang','es');
}
$(document).ready(function(){
    //Slider Config
    $('.slider').slick({
        arrows: false,
        mobileFirst: true,
        adaptiveHeight: true,
        respondTo: 'min'
    });
    $('.left-btn').click(function(){
        var parent = $(this).parent();
        var slider = parent.children('.slider');
        slider.slick('slickPrev');
    });
    $('.right-btn').click(function(){
        var parent = $(this).parent();
        var slider = parent.children('.slider');
        slider.slick('slickNext');
    });

    //Overlay
    $('.overlay-btn').click(function(e){
        e.preventDefault();
        var parent = $(this).parent().parent().prev().children('.slider-content');
        var pantalla = $(parent).children('.overlay-pantalla');
        if(pantalla.css('opacity') === '0'){
            pantalla.css('opacity','0.7');
            pantalla.css('z-index','2');
            $(this).addClass('gira');
        }else{
            $(pantalla).css('opacity','0');
            pantalla.css('z-index','0');
            $(this).removeClass('gira');
        }
    });
    //Nav Mobie
    $('.btn-hamburger').click(function(){
        if($(this).hasClass('active')) {
                $(this).removeClass('active');
                $( '.pantalla-mobile' ).css('opacity','0');
                $( '.pantalla-mobile' ).css('height','0');
                $( '.pantalla-mobile' ).css('visibility','hidden');
                $('.bar').css('display','inline-block');
        }else{
            $(this).addClass('active');
            $( '.pantalla-mobile' ).css('opacity','1');
            $( '.pantalla-mobile' ).css('height','auto');
            $( '.pantalla-mobile' ).css('visibility','visible');
            $('.bar').css('display','none');
        }
    });

    var waypoint = new Waypoint({
        element: document.getElementById('footer'),
        handler: function(direction) {
            if(direction === 'down') {
                $('.logo h1').addClass('bounce');
                $('.logo h1+div').addClass('bounce');
                console.log('animated');
            }
        },
        offset: '80%'
    });

    //Imgs mobile y desk
    mobileVsDesk();
    navs();
    links();
    translate();
    $('.eng-btn').click(function(){
        eng();
        closeNavBar();
    });
    $('.esp-btn').click(function(){
        esp();
        closeNavBar();
    });
});
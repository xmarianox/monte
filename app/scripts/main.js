$(document).ready(function(){
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
    $('.overlay-btn').click(function(e){
        e.preventDefault();
        var parent = $(this).parent().parent().prev().children('.slider-content');
        console.log(parent);
        var pantalla = $(parent).children('.overlay-pantalla');
        console.log(pantalla);
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

    $('.btn-hamburger').click(function(){
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $( '.pantalla-mobile' ).css('opacity','0');
            $( '.pantalla-mobile' ).css('height','0');
        }else{
            $(this).addClass('active');
            $( '.pantalla-mobile' ).css('opacity','1');
            $( '.pantalla-mobile' ).css('height','auto');
        }
    });
    mobileVsDesk();
    function mobileVsDesk(){
        var imgsSlider = $('.img-slider');
        var windowWidth = parseInt($(window).width());
        if(windowWidth >= 752) {
            for(var i = 0; i < imgsSlider.length; i ++) {
                var src = $(imgsSlider[i]).attr('src');
                var mod = src.split('/');
                src = mod[0] + '/' + 'desktop/' + mod[2] + '/' + mod[3];
                $(imgsSlider[i]).attr('src',src);
                console.log($(imgsSlider[i]));
            }
        }
    }
});
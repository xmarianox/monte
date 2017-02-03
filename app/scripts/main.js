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
        }else{
            $(this).addClass('active');
            $( '.pantalla-mobile' ).css('opacity','1');
            $( '.pantalla-mobile' ).css('height','auto');
            $( '.pantalla-mobile' ).css('visibility','visible');
        }
    });

    //Sticky nav

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
            $('.cabecera').addClass("sticky-mobile");
        }
        else{
            $('.cabecera').removeClass("sticky-mobile");
        }
    });


    //Imgs mobile y desk
    mobileVsDesk();
});
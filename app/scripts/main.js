$(document).ready(function(){
    $('.slider').slick({
        arrows: false
    });
    $('.left-btn').click(function(){
        $('.slider').slick('slickPrev');
    });
    $('.right-btn').click(function(){
        $('.slider').slick('slickNext');
    });

    $('.overlay-btn').click(function(e){
        e.preventDefault();
        var parent = $(this).parent().prev();
        var pantalla = $(parent).children('.overlay-pantalla');
        if($(pantalla).css('opacity') === '0'){
            $(pantalla).css('opacity','0.7');
            $(this).addClass('gira');
        }else{
            $(pantalla).css('opacity','0');
            $(this).removeClass('gira');
        }
            // $('.developers-container .item-partner').toggleClass('animated');
            // if($('.developers-container .item-partner').hasClass('animated')){
            //     $('#plusBtn').addClass('gira');
            // }else{
            //     $('#plusBtn').removeClass('gira');
            // }
    });
});
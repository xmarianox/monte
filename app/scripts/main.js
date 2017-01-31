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

    $('.overlay-btn').click(function(){
        if($('.overlay-pantalla').css('opacity') === '0'){
            $('.overlay-pantalla').css('opacity','0.7');
            $('.overlay-btn').removeClass('gira');
        }else{
            $('.overlay-pantalla').css('opacity','0');
            $('.overlay-btn').addClass('gira');
        }
            // $('.developers-container .item-partner').toggleClass('animated');
            // if($('.developers-container .item-partner').hasClass('animated')){
            //     $('#plusBtn').addClass('gira');
            // }else{
            //     $('#plusBtn').removeClass('gira');
            // }
    });
});
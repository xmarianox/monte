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
});
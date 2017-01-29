'use strict';

function initSlider() {
    $('.imgs-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right"></i></div>'
    });
}

$(document).on('ready', function () {
    initSlider();
    console.log('algo');
});
//# sourceMappingURL=main.js.map

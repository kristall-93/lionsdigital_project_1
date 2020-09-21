$(document).ready(function () {


});

$('.form_slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<button class="arrow_form_slider arrow_form_slider_prev"><img src="images/arrow-form-slider.svg" alt=""></button>',
    nextArrow: '<button class="arrow_form_slider arrow_form_slider_next"><img src="images/arrow-form-slider.svg" alt=""></button>',
});

$('.clients_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button class="arrow_prev_client"></button>',
    nextArrow: '<button class="arrow_next_client"><img src="images/arrow-next-client.svg" alt=""></button>',
    // responsive: [
    //     {
    //         breakpoint: 1301,
    //         settings: {
    //             arrows: false,
    //         }
    //     },         
    // ]
}); 
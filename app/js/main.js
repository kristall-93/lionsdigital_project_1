$(document).ready(function () {

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
        responsive: [{
            breakpoint: 1760,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1220,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 740,
            settings: {
                slidesToShow: 2,
            }
        },
        ]

    });

    $('.first_login_slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
    });

    $('.continue_free').on('click', function () {
        $.fancybox.close();
        $('.progress_bar').addClass('progress_bar_active');
        move();
        $('.check_btn').removeClass('check_btn_active');
    });

    function move() {
        var elem = document.getElementById("greenBar");
        var percent = document.getElementById("percent");
        var progress_bar_start = document.getElementById("progress_bar_start");
        var progress_bar_text = document.getElementById("progress_bar_text");
        var checker_text = document.getElementById("checker_text");
        var width = 1;
        var id = setInterval(frame, 100);
        function frame() {
            checker_text.innerHTML = '';
            checker_text.placeholder = '';
            if (width >= 100) {
                clearInterval(id);
                progress_bar_start.innerHTML = 'Done (100 %)..';
                progress_bar_text.innerHTML = 'Your search is complete. Continue for free?';
                $('.check_continue_btn').addClass('check_continue_btn_active');
            } else {
                width++;
                elem.style.width = width + '%';
                percent.innerHTML = width * 1;
            }
        }
    }

    $('.notification_close').on('click', function () {
        $('.notify').removeClass('notify_active');
    });

    $('.checker_text').on('click', function () {
        $('.checker_text').addClass('checker_text_active');
    });

    $('.menu_btn').on('click', function () {
        $('.header_line').slideToggle();
    });


    $('.user').on('click', function () {
        $('.sidebar').addClass('sidebar_active');
    });

    $(".user").click(function () {
        $(".sidebar").removeClass('hidden');
        $(".sidebar").addClass('active');
        $("body, html").css('overflow', 'hidden');
        return false;
    });

    $(document).mouseup(function (e) {
        var container = $(".sidebar");
        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($('.sidebar').hasClass('active')) {
                $(".sidebar").removeClass('active');
                $(".sidebar").addClass('hidden');
            }
            $("body, html").css('overflow', 'auto');
        }
    });


    if ($('.results_top_inner').hasClass('results_top_inner_red')) {
        $(".result_top_red_bg").addClass('result_top_red_bg_active');
    }

    $('.payment_choose, .select_style').styler();




    


});

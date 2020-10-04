$(document).ready(function () {

    // Слайдеры проекта :
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


    // Закрытие попапа и запуск прогресс-бара на landing page в plagiarism_checker :
    $('.continue_free').on('click', function () {
        $.fancybox.close();
        $('.progress_bar').addClass('progress_bar_active');
        move();
        $('.check_btn').removeClass('check_btn_active');
    });
    // движение прогресс-бара:
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

    // закрытие попап-уведомлений :
    $('.notification_close').on('click', function () {
        $('.notify').removeClass('notify_active');
    });

    // Увеличение высоты rextarea при нажатии на него :
    $('.checker_text').on('click', function () {
        $('.checker_text').addClass('checker_text_active');
    });

    // появление мобильного меню :
    $('.menu_btn').on('click', function () {
        $('.header_line').slideToggle();
        if ($('.menu_btn').hasClass('closed')) {
            $(".menu_btn").removeClass('closed');
            $(".menu_btn").addClass('opened');
            $("body, html").css('overflow', 'hidden');
        }
        else {
            $(".menu_btn").removeClass('opened');
            $(".menu_btn").addClass('closed');
            $("body, html").css('overflow-y', 'auto');
        }

    });
    $(document).mouseup(function (e) {
        var container_menu = $(".header_line");
        var container_menu_btn = $(".menu_btn");
        // if the target of the click isn't the container nor a descendant of the container
        if (!container_menu.is(e.target) && container_menu.has(e.target).length === 0 && !container_menu_btn.is(e.target) && container_menu_btn.has(e.target).length === 0) {
            if ($('.header_line').css('display', 'block')) {
                $('.header_line').css('display', 'none');
                $(".menu_btn").removeClass('opened');
                $(".menu_btn").addClass('closed');

            }
        }
    });

    // появление sidebar :
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
            $("body, html").css('overflow-y', 'auto');
        }
    });

    // Стилизация results_top_inner в research_result-1 page :
    if ($('.results_top_inner').hasClass('results_top_inner_red')) {
        $(".result_top_red_bg").addClass('result_top_red_bg_active');
    }

    // Стилизация на странице оплаты (Purcase_credit-1) "radio"-input и select:
    $('.payment_choose, .select_style').styler();

    // Увеличение высоты rextarea при нажатии на него :
    $(".checker_registered_text").click(function () {
        $(".checker_registered_text").addClass('active');
    });

    // движение прогресс бара в textarea :
    function move_registered_check() {
        var elem = document.getElementById("greenBar");
        var percent = document.getElementById("percent");
        var progress_bar_start = document.getElementById("progress_bar_start");
        var progress_bar_text = document.getElementById("progress_bar_text");
        var checker_registered_text = document.getElementById("checker_registered_text");
        var width = 1;
        var id = setInterval(frame, 100);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                progress_bar_start.innerHTML = 'Done (100 %)..';
                progress_bar_text.innerHTML = 'The search is complete. Redirecting...';
            } else {
                width++;
                elem.style.width = width + '%';
                percent.innerHTML = width * 1;
            }
        }
    }
    // запуск прогресс-бара в registered plagiarism checker :
    $('.checker_reg_check_btn').on('click', function () {
        $('.progress_bar').addClass('progress_bar_active');
        move_registered_check();
    });

    // переключение вкладок на settings page :
    $('.settings_tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.settings_tabs').find('.tab_item').removeClass('active_tab').hide();
        $('.settings_tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active_tab').fadeIn();
        return false;
    });

    // переключение вкладок на requests_list page :
    $('.requests_tabs_wrapper .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.requests_tabs_wrapper').find('.tab_item').removeClass('active_tab').hide();
        $('.requests_tabs_wrapper .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active_tab').fadeIn();
        return false;
    });

    // переключение 2х-шагового входа на setting page :
    $(".two_step_verify_btn").click(function () {
        if ($('.two_step_verify_btn').hasClass('active')) {
            $(".two_step_verify_btn").removeClass('active');
            // $(".two_step_verify_btn").innerHTML = 'TURN ON';
            $(".two_step_verify").removeClass('active');
            // $(".two_step_verify").innerHTML = 'Two-step verification off';
        }
        else {
            $(".two_step_verify_btn").addClass('active');
            // $(".two_step_verify_btn").innerHTML = 'TURN OFF';
            $(".two_step_verify").addClass('active');
            // $(".two_step_verify").innerHTML = 'Two-step verification on';
        }
    });

    // движение прогресс бара в popup на request premade content page :
    function move_premade_content() {
        var elem = document.getElementById("greenBar");
        var percent = document.getElementById("percent");
        var progress_bar_start = document.getElementById("progress_bar_start");
        var progress_bar_text = document.getElementById("progress_bar_text");
        var width = 1;
        var id = setInterval(frame, 100);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                // progress_bar_start.innerHTML = 'Done (100 %)..';
                // progress_bar_text.innerHTML = 'Premade content is complete.';
            } else {
                width++;
                elem.style.width = width + '%';
                percent.innerHTML = width * 1;
            }
        }
    }
    // запуск прогресс-бара в popup на request premade content page :
    $('.premade_content_submit_btn').on('click', function () {
        $('.progress_bar').addClass('progress_bar_active');
        move_premade_content();
    });

    // "звездный рейтинг" в article_feedback_popup :
    $("#rateYo").rateYo({
        starWidth: "39px",
        spacing: "9px",
        normalFill: "#E3E6F1",
        ratedFill: "#F6E266",        
        starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>'
    });

    


});

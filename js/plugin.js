$(document).ready(() => {
    
    /*
    ** SHOW NAVBAR ON MOBILE DEVICE
    */
    $('.mobile-nav-icon').click(() => {
        $(".mobile-nav").toggleClass("show-navbar");
    });

    $(window).scroll(() => {
        /*
        ** SHOW NAVBAR ON SCROLL
        */
        if ($(window).scrollTop() > 5) {
            $('nav').addClass('fixed-navbar');
        } else {
            $('nav').removeClass('fixed-navbar');
        }
        
        /*
        ** SYNC NAVBAR WITH SECTION
        */
        $('header, section, footer').each(function (i) {
            if ($(window).scrollTop() > $(this).offset().top - 10) {
                $('.main-navbar li a').removeClass('active');
                $('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });
    
    /*
    ** SCROLL TO THE SPECIFIQUE SECTION
    */
    $(".scroll-to-section").click(function (e) {
        e.preventDefault();
        var sectionName = $(this).attr('href').split('#')[1];
        $(this).parent().siblings('li').children('a').removeClass('active');
        $(this).addClass('active');
        if ($(window).width() < 900)
            $('.mobile-nav').removeClass('show-navbar');
        $('html, body').animate(
            {
                scrollTop: $("#" + sectionName).offset().top
            }, 1000);
    });
});
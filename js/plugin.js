$(document).ready(() => {

    /*
    ** SHOW Item when the item offset equal win / 2
    */

    function showOnScroll(mySection)
    {
        if ($(window).scrollTop() >= mySection.offset().top - $(window).height()/3) {
            var item = mySection.find('.hide-item');
            item.each(function (j) {
                setTimeout(function () {
                    item.eq(j).addClass('show-item');
                }, 800 * Math.random() * 2);
            });
        }
    }
    showOnScroll($('header'));
    
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
            showOnScroll($(this));
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
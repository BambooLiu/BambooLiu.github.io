//Doing this just for window detection
jQuery.browser = {};
(function() {
    jQuery.browser.msie = false;
    jQuery.browser.version = 0;
    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
        jQuery.browser.msie = true;
        jQuery.browser.version = RegExp.$1;
    }
})();

//SET VIEW PORT HEIGHT Functionally
function getBrowserHeight() {
    if ($.browser.msie) {
        return document.compatMode == 'CSS1Compat' ? document.documentElement.clientHeight :
            document.body.clientHeight;
    } else {
        return self.innerHeight;
    }
}

function getBrowserWidth() {
    if ($.browser.msie) {
        return document.compatMode == 'CSS1Compat' ? document.documentElement.clientWidth :
            document.body.clientWidth;
    } else {
        return self.innerWidth;
    }
}

//# sourceMappingURL=viewport.js.map

$(document).ready(function() {
    //sticky
    stickySet();


    //Nav
    $('#nav ul li').on('mouseenter', function() {
        $(this).siblings('li').children().removeClass('active');
        if ($(this).children('ul').length > 0) {
            $(this).children().addClass('active');
        }
    });
    $('#nav ul li').on('mouseleave', function() {
        $(this).find('*').removeClass('active');
    });


    //slidbar
    $.slidebars({
        disableOver: 1024
    });
    //Sb Menu
    $('#btn_menu').on('touchend click', function(event) {
        $(this).toggleClass('active');
        $('#sb_menu').find('*').removeClass('active');
    });
    $('#sb-site').on('touchend click', function(event) {
        $('#btn_menu').removeClass('active');
        $('#sb_menu').find('*').removeClass('active');
    });
    $('#sb_menu ul li a').click(function(event) {
        $(this).parent().siblings('li').find('*').removeClass('active');
        if ($(this).hasClass('active')) {
            $(this).siblings('ul').find('*').removeClass('active');
        }
        if ($(this).parent().children('ul').length) {
            $(this).toggleClass('active');
            $(this).siblings('ul').toggleClass('active');
        }
    });

    //Wechat
    $('#footer .wechat').click(function(event) {
        if( !$(this).hasClass('active')) {
            $('#footer .wechat_bubble').stop().fadeIn(400);
            $('#footer .wechat').addClass('active');
        } else {
            $('#footer .wechat_bubble').stop().fadeOut(400);
            $('#footer .wechat').removeClass('active');
        }
    });
    $(document).click(function(event) {
        if (!$(event.target).is('#footer .wechat, #footer .wechat_bubble, #footer .wechat_bubble *')) {
            $('#footer .wechat_bubble').stop().fadeOut(400);
            $('#footer .wechat').removeClass('active');
        }
    });


    //Portfolio Slider
    $('.portfolio_intro_slider .bxslider').bxSlider({
        mode: 'fade',
        auto: false,
        controls: false,
        swipeThreshold: 100,
        slideMargin: 20,
        adaptiveHeight: true
    });

    $('.portfolio_develop_slider .bxslider').bxSlider({
        auto: false,
        swipeThreshold: 100,
        slideMargin: 20,
        adaptiveHeight: true,
        prevSelector: '.portfolio_develop_slider .bx_pager .prev',
        nextSelector: '.portfolio_develop_slider .bx_pager .next'
    });


    //Service List
    $('.service_list .item .title').click(function(event) {
        if(getBrowserWidth() < 1024) {
            $(this).next('ul').slideToggle();
        }
    });


    //About Slider
    var historySlide = $('.history_slider .slickslider').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '30%',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20%',
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },{
            breakpoint: 600,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10%',
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.history_slider .slick_pager').on('click', 'a', function(event) {
        event.preventDefault();
        if($(this).hasClass('prev')) {
            historySlide.slick('slickPrev');
        } else  if($(this).hasClass('next')) {
            historySlide.slick('slickNext');
        }
    });


    //Back to top
    $('#backTop').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });


    //Block scroll
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').stop().animate({
                    scrollTop: target.offset().top - $('#header').outerHeight()
                }, 1000);
                return false;
            }
        }
    });


    //Resize
    var w = $(window).width();

    $(window).resize(function() {
        if ( w != $(window).width() ) {
            $('#header').unstick();
            stickySet();

            $('.service_list .item ul').css('display', '');

            w = $(window).width();
        }
    });
});


$(window).load(function() {
    //Link
    var url = window.location.toString();
    var loc = url.split('#')[1];
    if (loc != undefined) {
        var locObj = $('#' + loc);
        //Reset where animation starts.
        $(document).scrollTop(0);
        //Animate to
        $('html,body').animate({
            scrollTop: locObj.offset().top - $('#header').outerHeight()
        }, 1000);
    }

    //Custom Scroll Bar
    $('.scroll_bar').mCustomScrollbar();
    $('.scroll_bar_dark').mCustomScrollbar({
        theme: 'dark'
    });
});


function stickySet() {
    $('#header').sticky({
        topSpacing: 0,
        getWidthFrom: '#wrapper',
        responsiveWidth: true
    });
    if($('#header').hasClass('in_index')) {
        $('#header-sticky-wrapper').addClass('in_index')
    }
}
//# sourceMappingURL=main.js.map

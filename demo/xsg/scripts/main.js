function sticky(){$("#header").sticky({topSpacing:0,zIndex:99998})}var sideBar;$(document).ready(function(){function t(){$("#sideBar").stop().fadeOut(function(){$(this).removeClass("active")}),$("#btn_menu").removeClass("active"),$(".sb_menu ul li a").removeClass("active"),$(".sb_menu ul li ul").css("display","")}if($(".retina").retina(),sticky(),$("#btn_menu").on("click",function(i){i.preventDefault(),$(this).hasClass("active")?t():($("#sideBar").stop().fadeIn(function(){$(this).addClass("active")}),$(this).addClass("active"))}),$("#sideBar").on("click",".btn_close",function(i){i.preventDefault(),t()}),$(".sb_menu ul li a").on("click",function(){var i=$(this).attr("href");-1!==i.indexOf("#Contact")&&t(),$(this).siblings("ul").length>0&&(event.preventDefault(),$(this).hasClass("active")?"javascript:;"===i&&"#"===i||(window.location.href=i):($(this).addClass("active").siblings("ul").stop().slideDown(),$(this).parent("li").siblings("li").children("a").removeClass("active"),$(this).parent("li").siblings("li").children("ul").stop().slideUp()))}),$(".head_nav ul li").on("mouseenter",function(){$(this).children("a").addClass("active"),$(this).children("ul").length>0&&$(this).children("ul").stop().slideDown("250",function(){$(this).addClass("active")})}),$(".head_nav ul li").on("mouseleave",function(){$(this).children("a").removeClass("active"),$(this).children("ul").length>0&&$(this).children("ul").stop().slideUp("250",function(){$(this).removeClass("active")})}),$("#language").on("click",function(){$(this).addClass("open")}),$(document).on("click touchstart",function(t){$(t.target).is("#language, #language *")||$("#language").removeClass("open")}),$("#pages_controls .pages_scroll").length>0&&($(window).scroll(function(){$(this).scrollTop()>150?($("#pageTop").addClass("active"),$("#pageScroll").removeClass("active")):($("#pageScroll").addClass("active"),$("#pageTop").removeClass("active"))}),$("#pageTop").on("click",function(t){t.preventDefault(),$("html, body").stop().animate({scrollTop:0},500,"swing")})),$(".custom_scroll_horizontal").length>0&&$(".custom_scroll_horizontal").mCustomScrollbar({axis:"x",theme:"dark-3"}),$("#productVideo").length>0&&$("#productVideo").fitVids(),$(".share_buttons").length>0){var i=window.location.href;$(".share_buttons a").each(function(){$(this).hasClass("share_fb")?$(this).attr("href","https://www.facebook.com/sharer.php?u="+i):$(this).hasClass("share_twitter")&&$(this).attr("href","https://twitter.com/intent/tweet?url="+i)})}$(".iframe_popup").length>0&&$(".iframe_popup").magnificPopup({type:"iframe"})});var windowWidth=$(window).width();$(window).on("resize",function(){windowWidth!=$(window).width()&&($("#header").unstick(),sticky(),windowWidth=$(window).width())}),$(window).on("load",function(){$("#wrapper").addClass("loaded")});
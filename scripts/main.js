function sticky(){$("#header").sticky({topSpacing:0,zIndex:99})}$(document).ready(function(){var t="ontouchstart"in document.documentElement?"touchstart":"click";$(".retina").retina(),sticky(),$("#btn_menu").on(t,function(t){$(this).hasClass("active")?($(this).removeClass("active"),$(".head_nav").stop().fadeOut()):($(this).addClass("active"),$(".head_nav").stop().fadeIn())}),$(document).scroll(function(){$("[data-anchor]").each(function(t,o){var n=$(document).scrollTop(),a=$(this).offset().top,e=$("#header").outerHeight(),i=$(this).outerHeight(),h=$(this).attr("data-anchor");n>=a-e-5&&n<=a-e+i-5?$(".head_nav ul").find('a[href="#'+h+'"]').addClass("current"):$(".head_nav ul").find('a[href="#'+h+'"]').removeClass("current")})}),$("#backTop").length>0&&($("#backTop").on(t,function(t){t.preventDefault(),$("html, body").stop().animate({scrollTop:0},500,"swing")}),$(window).on("scroll",function(){$(window).scrollTop()>100?$("#backTop").stop().fadeIn(400,function(){$(this).css("display","block")}):$("#backTop").stop().fadeOut(400)})),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').on(t,function(t){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=$(this).attr("href"),n=o.split("#")[1],a=$('[data-anchor="'+n+'"]');a.length>0&&$("html, body").stop().animate({scrollTop:a.offset().top-$("#header").outerHeight()},800,"swing",function(t){window.location.hash=o})}})});var windowWidth=$(window).width();$(window).on("resize",function(){windowWidth!=$(window).width()&&($("#header").unstick(),sticky(),windowWidth=$(window).width())}),$(window).on("load",function(){var t=window.location.toString(),o=t.split("#")[1],n=$('[data-anchor="'+o+'"]');n.length>0&&(console.log,$("html, body").scrollTop(0),$("html, body").stop().animate({scrollTop:n.offset().top-$("#header").outerHeight()},800))}),$(window).on("hashchange",function(){var t=window.location.hash,o=t.split("#")[1],n=$('[data-anchor="'+o+'"]');n.length>0&&$("html, body").stop().animate({scrollTop:n.offset().top-$("#header").outerHeight()},800)});
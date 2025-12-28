//Doing this just for window detection
jQuery.browser = {};
(function () {
    jQuery.browser.msie = false;
    jQuery.browser.version = 0;
    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
        jQuery.browser.msie = true;
        jQuery.browser.version = RegExp.$1;
    }
})();


$(document).ready(function() {
	init();


	//slidbar
	$.slidebars({disableOver: 1279});


	//Sticker
	$("#header").sticky({
		topSpacing: 0
	});


	//Index Banner Slider
	var indexBanner = $('.index_banner ul.slider').bxSlider({
		auto: true,
		pause: 8000,
		controls: false,
		swipeThreshold: 100
	});


	//Index Procuct Slider
	$('.index_projects_slider ul.slider').bxSlider({
		slideWidth: 440,
		minSlides: 1,
		maxSlides: 3,
		slideMargin: 15,
		pager: false,
		swipeThreshold: 100,
		nextSelector: '#slider_next',
		prevSelector: '#slider_prev',
	})


	//About History Slider
	var historySlider = $('.history ul.slider').bxSlider({
		mode: 'fade',
		pager: false,
		infiniteLoop: false,
		swipeThreshold: 100,
		nextSelector: '#history_next',
		prevSelector: '#history_prev',
		onSliderLoad: function(currentIndex) {
			$('.history ul.slider li').eq(currentIndex).addClass('current');
			$('.history ul.slider, .history ul.slider li').css('height', '100%');
		},
		onSlideAfter:  function($slideElement, oldIndex, newIndex) {
			$slideElement.siblings('li').removeClass('current');
			$slideElement.addClass('current');
		}
	});


	//About Mag Slider
	$('.about_management ul.slider').bxSlider({
		slideMargin: 15,
		controls: false,
		infiniteLoop: false,
		swipeThreshold: 100,
		adaptiveHeight: true,
	});


	//Projects Banner Slider
	var projectsBanner = $('.projects_banner ul.slider').bxSlider({
		auto: true,
		pause: 8000,
		controls: false,
		swipeThreshold: 100
	});


	//Projects Sort Slider
	var projectsSort = $('.projects_sort ul.slider').bxSlider()
	if( projectsSort.length ) {
		projectsSortSet(projectsSort);
	}


	//Projects Detail Slider
	$('.projects_detail_slider ul.slider').bxSlider({
		auto: true,
		pause: 8000,
		controls: false,
		swipeThreshold: 100
	});


	//News Slider
	$('.news_slider ul.slider').bxSlider({
		pause: 8000,
		controls: false,
		infiniteLoop: false,
		swipeThreshold: 100,
		onSliderLoad: function(currentIndex) {
			$('.news_slider ul.slider li').eq(currentIndex).addClass('current');
		},
		onSlideAfter:  function($slideElement, oldIndex, newIndex) {
			$slideElement.siblings('li').removeClass('current');
			$slideElement.addClass('current');
		}
	});


	//Youtube
	if( $('.index_video .youtube_video').length ) {
		var playId = $('.index_video .youtube_video').attr('data-playId');
		$('.index_video .youtube_video').tubeplayer({
			width: 560,
			height: 315,
			allowFullScreen: "true",
			initialVideo: playId,
			preferredQuality: "default",
			showControls: 0,
			onPlayerPlaying: function(){
				if(getBrowserWidth() > 768) {
					$('.index_video .descripttion').hide();
				}
			},
			onPlayerEnded: function(){
				if(getBrowserWidth() > 768) {
					$('.index_video .descripttion').show();
				}
			},
		});
	}


	


	//Menu
	$('#btn_menu').click(function(event) {
		$('html').css('overflow', 'hidden');
		$('#nav_menu').addClass('active');
	});
	$('#nav_menu .btn_close').click(function(event) {
		$('html').css('overflow', 'auto');
		$('#nav_menu').removeClass('active');
	});


	//Back to top
	$('#backTop').click(function(event){
		event.preventDefault();
		$('html, body').animate({scrollTop : 0},1000);
	});


	//List Page
	$('#sortBlock a').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: $('#listBlock').offset().top}, 1000);
	});


	//About Music Control
	if( $('#musicPlayer').length ) {
		var audio = document.getElementById("musicPlayer");
		audio.load();
		audio.play();

		audio.onended = function() {
		    $('#musicControl').addClass('paused');
		};
		
		if( getBrowserWidth() <= 1024 ) {
			audio.pause();
			$('#musicControl').addClass('paused');
		}

		$('#musicControl').click( function() {
			if( $(this).hasClass('paused') ) {
				audio.play();
				$(this).removeClass('paused');
			} else {
				audio.pause();
				$(this).addClass('paused');
			}
		});
	}


	//News List Search
	if( getBrowserWidth() >= 768 ) {
		$('#btnSearch').click(function(event) {
			$('#searchBar').show();
		});
		$(document).click(function(e) {
	        if (!$(e.target).is('#btnSearch, #searchBar, #searchBar *')) {
	            $("#searchBar").hide();
	        }
	    });
    }


	//Block scroll
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({scrollTop: target.offset().top}, 1000);
				return false;
			}
		}
	});


	//resize
	$(window).resize( function(){
		init();

		if(indexBanner.length) {
			indexBanner.reloadSlider();
		}
		if(historySlider.length) {
			historySlider.reloadSlider();
		}
		if(projectsBanner.length) {
			projectsBanner.reloadSlider();
		}
		if(projectsSort.length) {
			projectsSortSet(projectsSort);
		}
	});
});


function init() {
	$('#main').css('min-height', getBrowserHeight()-$('#footer').outerHeight());

	$('.index_banner').css('height', getBrowserHeight());

	if( getBrowserWidth() < 768 ) {
		$('.projects_banner').css('height', getBrowserHeight());
	} else {
		$('.projects_banner').css('height', getBrowserHeight()*0.85);
	}

	if( getBrowserWidth() >= 1280 ) {
		$('.projects_detail').css('min-height',  getBrowserHeight()-$('#footer').outerHeight());
	} else if( getBrowserWidth() < 1280 ){
		$('.projects_detail').css('min-height', '');
	}
}


function projectsSortSet(projectsSort) {
	if( getBrowserWidth() < 640 ) {
		projectsSort.reloadSlider({
			slideWidth: 640,
			minSlides: 1,
			maxSlides: 1,
			slideMargin: 0,
			pager: false,
			infiniteLoop: false,
			swipeThreshold: 100,
			nextSelector: '#slider_next',
  			prevSelector: '#slider_prev',
		})
	}
	else if( getBrowserWidth() < 1280 ) {
		projectsSort.reloadSlider({
			slideWidth: 640,
			minSlides: 2,
			maxSlides: 2,
			slideMargin: 0,
			pager: false,
			infiniteLoop: false,
			swipeThreshold: 100,
			nextSelector: '#slider_next',
  			prevSelector: '#slider_prev',
		})
	}
	else {
		projectsSort.reloadSlider({
			slideWidth: 640,
			minSlides: 3,
			maxSlides: 3,
			slideMargin: 0,
			pager: false,
			infiniteLoop: false,
			swipeThreshold: 100,
			nextSelector: '#slider_next',
  			prevSelector: '#slider_prev',
		})
	}
}


//SET VIEW PORT HEIGHT Functionally
function getBrowserHeight() {
    if ($.browser.msie) {
        return document.compatMode == "CSS1Compat" ? document.documentElement.clientHeight :
                 document.body.clientHeight;
    } else {
        return self.innerHeight;
    }
}


function getBrowserWidth() {
  if ($.browser.msie) {
    return document.compatMode == "CSS1Compat" ? document.documentElement.clientWidth :
             document.body.clientWidth;
  } else {
    return self.innerWidth;
  }
}
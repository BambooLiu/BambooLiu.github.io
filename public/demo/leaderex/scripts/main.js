var windowWidth = $(window).width();
var clickHandler = ('ontouchstart' in document.documentElement ? 'touchstart' : 'click');
var stickyTimer;
var ajaxPath = '';
var ajaxWidth = 'auto';
var cantDecidePath = '';

$(document).ready(function () {
  $('.retina').retina();

  // Sticky
  sticky();

  // Captcha Size
  scaleCaptcha();

  // Main
  $('#main, .application_page').css('min-height', $(window).height() - $('#header').outerHeight() - $('#footer').outerHeight());

  // Index Setting
  $('#wrapper:has(#searchTickets)').addClass('in_index');

  // Sidebar
  $('.sidebar').on(clickHandler, '.btn_close, .sb_mask', function (event) {
    event.preventDefault();
    $('.sidebar').trigger('sidebar:close').removeClass('active');
  });
  $('#sidebar').sidebar({ side: 'left' });
  $('#btnMenu').on(clickHandler, function (event) {
    event.preventDefault();
    $('#sidebar').trigger('sidebar:open').addClass('active');
  });
  
  // Dropdown
  $(document).on(clickHandler, '.dropdown .dropdown_btn', function () {
    if (!$(this).parent('.dropdown').hasClass('active')) {
      $('.dropdown').not(this).removeClass('active');
    }
    if ($(this).parent('.dropdown').find('.captcha').length > 0 ) {
      scaleCaptcha();
    }
    $(this).parent('.dropdown').toggleClass('active');
  });
  $(document).on(clickHandler, function(event) {
    if (!$(event.target).is('.dropdown.active, .dropdown.active *')) {
      $('.dropdown.active').removeClass('active');
    }
  });

  // Dropdown Input
  $(document).on(clickHandler, '.dropdown_input_wrapper .dropdown_input', function () {
    $('.dropdown_input_wrapper.active').removeClass('active');
    $(this).parent('.dropdown_input_wrapper').addClass('active');
  });
  $(document).on(clickHandler, function (event) {
    if (!$(event.target).is('.dropdown_input_wrapper.active, .dropdown_input_wrapper.active *')) {
      $('.dropdown_input_wrapper.active').removeClass('active');
    }
  });
  
  $(document).on(clickHandler, '.location_select .location_select_main a', function () {
    $(this).addClass('active');
    $(this).parent('li').siblings('li').children('a').removeClass('active');
    if (windowWidth < 768) {
      $(this).parents('.location_select_main').hide();
    }
    $(this).parents('.location_select_main').siblings('.location_select_sub').addClass('active');
  });
  $(document).on(clickHandler, '.location_select .location_select_sub .btn_back', function () {
    $(this).parents('.location_select_sub').removeClass('active');
    $(this).parents('.location_select_sub').siblings('.location_select_main').attr('style', '');
    $(this).parents('.location_select_sub').siblings('.location_select_main').find('a.active').removeClass('active');
  });
  $(document).on(clickHandler, function (event) {
    if (!$(event.target).is('.dropdown_input_wrapper.active, .dropdown_input_wrapper.active *')) {
      if ($('.dropdown_input_wrapper.active').find('.location_select').length > 0) {
        var locationSelect = $('.dropdown_input_wrapper.active').find('.location_select');
        locationSelect.find('.active').removeClass('active');
        locationSelect.find('.location_select_main').attr('style', '');
      }
    }
  });

  // Dropdown Selector
  $(document).on(clickHandler, '.dropdown_selector .dropdown_selector_input', function () {
    $('.dropdown_selector.active').removeClass('active');
    $(this).parent('.dropdown_selector').addClass('active');
  });
  $(document).on(clickHandler, '.dropdown_selector .dropdown_selector_menu li', function () {
    var value = $(this).data('value');
    var txt = $(this).find('.text').text();

    $(this).parents('.dropdown_selector').find('.dropdown_selector_input input[type=text]').attr('data-value', value).val(txt);
    if ($(this).parents('.dropdown_selector').hasClass('has_icon')) {
      var src = $(this).find('.icon_logo img').attr('src');
      $(this).parents('.dropdown_selector').find('.dropdown_selector_input .icon_logo').html('<img src="' + src + '"/>');
    }
    $(this).parents('.dropdown_selector').removeClass('active');
  });
  $(document).on(clickHandler, function (event) {
    if (!$(event.target).is('.dropdown_selector.active, .dropdown_selector.active *')) {
      $('.dropdown_selector.active').removeClass('active');
    }
  });

  // Tab - jquery.tabber.js
  if ($('.tabber_wrapper').length > 0) {
    $('.tabber_wrapper').tabber();
  }

  // Popup - http://izimodal.marcelodolce.com/
  // Popup - ajax
  $('#ajaxPopup').iziModal({
    width: ajaxWidth,
    closeButton: false,
    overlayColor: 'rgba(255, 255, 255, 0.7)',
    headerColor: 'rgba(255, 255, 255, 0)',
    onOpening: function (modal) {
      modal.startLoading();
      $.get(ajaxPath, function (data) {
        $('#ajaxPopup').find('.iziModal-content').html(data);
        modal.stopLoading();
      });
    },
    onOpened: function() {
      if ($('#ajaxPopup').find('.tabber_wrapper')) {
        $('.tabber_wrapper').tabber();
      }
    }
  });
  $(document).on('click', '.popup_ajax', function(event) {
    var path = $(this).data('path');
    var width = $(this).data('width');
    var backBtn = $(this).data('backBtn');

    ajaxPopupOpen(path, width, backBtn);
  });
  // Popup - ajax - Cant decide
  $('#cantDecidePopup').iziModal({
    width: '1100px',
    closeButton: false,
    overlayColor: 'rgba(255, 255, 255, 0.7)',
    headerColor: 'rgba(255, 255, 255, 0)',
    onOpening: function (modal) {
      modal.startLoading();
      $.get(cantDecidePath, function (data) {
        $('#cantDecidePopup').find('.iziModal-content').html(data);
        modal.stopLoading();
      });
    }
  });
  // Popup - inline
  $('.inline_popup').iziModal({
    width: '900px',
    closeButton: false,
    overlayColor: 'rgba(255, 255, 255, 0.7)',
    headerColor: 'rgba(255, 255, 255, 0)'
  });

  // Copy Controls
  if ($('.copy_controls').length > 0) {
    $('.copy_controls').on('click', 'button', function (event) {
      event.preventDefault();
      $(this).siblings('input[type="text"]').select();
      document.execCommand('copy');
    });
    $('.copy_controls').on('click', 'input[type="text"]', function (event) {
      event.preventDefault();
      $(this).select();
    });
  }

  // Upload Controls
  if ($('.upload_controls').length > 0) {
    $('.upload_controls').on('change', 'input[type=file]', function(element) {
      var fileName = '';
      var $uploadControls = $(this).parents('.upload_controls');

      if (element.target.value) {
        fileName = element.target.value.split('\\').pop();
      }
      if (fileName){
        $uploadControls.addClass('has_file');
        $(this).attr('readonly', true);
      } else {
        $uploadControls.removeClass('has_file');
        $(this).attr('readonly', false);
      }
    })
    $('.upload_controls').on(clickHandler, '.file_clear', function (event) {
      event.preventDefault();
      var $uploadControls = $(this).parents('.upload_controls');
      var $fileInput = $(this).siblings('input[type=file]');

      $uploadControls.removeClass('has_file');
      $fileInput.find('input[type=file]').val('').attr('readonly', false);
    });
  }

  // Credit Card Number
  if($('.card_number_controls').length > 0) {
    $('.card_number_controls').on('keyup change', '.cc_number', function() {
      if($(this).val().length == 4) {
        $(this).nextAll('.cc_number:first').focus();
      } else if ($(this).val().length == 0) {
        $(this).prevAll('.cc_number:first').focus();
      }
    });
  }

  // Slick Slider
  if ($('.index_banner ').length > 0) {
    $('.index_banner .slider').slick({
      infinite: true,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 8000,
      pauseOnHover: false
    });
  }

  // Aside Menu
  if ($('.aside_menu').length > 0) {
    $('.aside_menu').on(clickHandler, '.menu_toggle', function () {
      $(this).siblings('ul').stop().slideToggle();
    });
  }

  // Filter Sidebar
  if ($('#filterSidebar').length > 0) {
    $('#filterSidebar').sidebar({
      side: 'right'
    });
    $('#filterBtn').on(clickHandler, function (event) {
      event.preventDefault();
      $(this).toggleClass('active');
      $('#filterSidebar').trigger('sidebar:toggle').toggleClass('active');
    });
  }
  // Filter
  if ($('.filter').length > 0) {
    $('.filter_items').on('click', '.item .item_title', function (event) {
      $(this).siblings('.item_content').stop().slideToggle(function() {
        $(this).parent('.item').toggleClass('active');
      });
    });
  }

  // Overview Sidebar
  if ($('#overviewSidebar').length > 0) {
    $('#overviewSidebar').sidebar({
      side: 'right'
    });
    $('#toggle_overview').on(clickHandler, function (event) {
      event.preventDefault();
      $('#overviewSidebar').trigger('sidebar:toggle').toggleClass('active');
    });
  }

  // Price Seat tickets
  $(document).on('change', '.price_seat_tickets .result_radio input[type=radio]', function () {
    var radioName = $(this).attr('name');

    if ($(this).is(':checked')) {
      $(this).parents('.result_item').addClass('checked');
      $('.result_radio input[type=radio][name=' + radioName + ']').not(this).parents('.result_item').removeClass('checked');
    }
  });

  // Toggle Block
  $(document).on(clickHandler, '.toggle_block .toggle_control', function () {
    $(this).toggleClass('active').siblings('.toggle_content').stop().slideToggle();
  })

  // Choose Flight Items
  $(document).on(clickHandler, '.choose_flight_items .btn_toggle', function () {
    $(this).toggleClass('active').parents('.item_content').siblings('.secondary_items').stop().slideToggle();
  })
  $(document).on('change', '.choose_flight_items .item_radio input[type=radio]', function () {
    var radioName = $(this).attr('name');

    if ($(this).is(':checked')) {
      $(this).parents('.item').addClass('checked');
      $('.item_radio input[type=radio][name=' + radioName + ']').not(this).parents('.item').removeClass('checked');
    }
  });

  // Refund Process
  if ($('.refund_process').length > 0) {
    $('.refund_process').on(clickHandler, '.refund_item .toggle_control', function() {
      $(this).toggleClass('active');
      $(this).parents('.refund_item').next('.refund_detail').toggleClass('active');
    });
  }

  // Back to top
  if ($('#backTop').length > 0) {
    $('#backTop').on(clickHandler, function (event) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: 0
      }, 500, 'swing');
    });
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 100) {
        $('#backTop').stop().fadeIn(400, function () {
          $(this).css('display', 'block');
        });
      } else {
        $('#backTop').stop().fadeOut(400);
      }
    });
  }

  // Checkbox table block
  if ($('.checkbox_table_block').length > 0) {
    $('.checkbox_table_block').each(function() {
      var $outCheckAll = $(this).find('.outside_check_all input[type="checkbox"]');
      var $checkTable = $(this).find('table');

      $outCheckAll.on('change', function(){
        if($(this).prop('checked')) {
          $checkTable.find($('tbody tr')).not('.disable').addClass('checked');
          $checkTable.find($('input[type="checkbox"]')).prop('checked', true);
        } else {
          $checkTable.find($('tbody tr')).not('.disable').removeClass('checked');
          $checkTable.find($('input[type="checkbox"]')).prop('checked', false);
        }
      });
      $checkTable.find('thead input[type="checkbox"]').on('change', function () {
        if ($(this).prop('checked')) {
          $checkTable.find($('tbody tr')).not('.disable').addClass('checked');
          $outCheckAll.prop('checked', true);
          $checkTable.find($('tbody input[type="checkbox"]')).prop('checked', true);
        } else {
          $checkTable.find($('tbody tr')).not('.disable').removeClass('checked');
          $outCheckAll.prop('checked', false);
          $checkTable.find($('tbody input[type="checkbox"]')).prop('checked', false);
        }
      });
      $checkTable.find($('tbody input[type="checkbox"]')).on('change', function() {
        if ($(this).prop('checked')) {
          $(this).parents('tr').addClass('checked');
          if ($(this).parents('tr').hasClass('full_top_half')) {
            $(this).parents('tr').next('.full_lower_half').addClass('checked');
          }
        } else {
          $(this).parents('tr').removeClass('checked');
          if ($(this).parents('tr').hasClass('full_top_half')) {
            $(this).parents('tr').next('.full_lower_half').removeClass('checked');
          }
        }

        if ($checkTable.find($('tbody input[type="checkbox"]:checked')).length == $checkTable.find($('tbody input[type="checkbox"]')).length) {
          $outCheckAll.prop('checked', true);
          $checkTable.find('thead input[type="checkbox"]').prop('checked', true);
        } else {
          $outCheckAll.prop('checked', false);
          $checkTable.find('thead input[type="checkbox"]').prop('checked', false);
        }
      });
    });
  }

  // Radio table block
  if ($('.radio_table_block').length > 0) {
    $('.radio_table_block').each(function () {
      var $radioTable = $(this).find('table');

      $radioTable.find($('tbody input[type="radio"]')).on('change', function () {
        var radioName = $(this).attr('name');
        if ($(this).is(':checked')) {
          $(this).parents('tr').addClass('checked');
          $radioTable.find($('tbody input[type=radio][name=' + radioName + ']')).not(this).parents('tr').removeClass('checked');
        }
      });
    });
  }

  // Block Link
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .on(clickHandler, function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var hash = $(this).attr('href');
        var hashName = hash.split('#')[1];
        var $target = $('[data-anchor="' + hashName + '"]');

        if ($target.length > 0) {
          $('html, body').stop().animate({
            scrollTop: $target.offset().top - $('#header').outerHeight()
          }, 800, 'swing', function (e) {
            window.location.hash = hash;
          });
        }
      }
    });
});

// Resize
$(window).on('resize', function () {
  if (windowWidth != $(window).width()) {
    windowWidth = $(window).width();

    // Sticky
    $('#header').trigger('detach.ScrollToFixed').attr('style', '');
    if ($('#searchTickets').length > 0 ) {
      $('#searchTickets .search_logo').trigger('detach.ScrollToFixed').attr('style', '');
    }
    if ($('#fixedOrder').length > 0) {
      $('#fixedOrder').trigger('detach.ScrollToFixed').attr('style', '');
    }
    sticky();

    // Sidebar
    $('#btnMenu').removeClass('active');
    $('#sidebar').trigger('sidebar:close').removeClass('active');

    // Captcha Size
    scaleCaptcha();

    // Main
    $('#main, .application_page').css('min-height', $(window).height() - $('#header').outerHeight() - $('#footer').outerHeight());

    // Dropdown Input
    if (windowWidth >= 768) {
      $('.dropdown_input_wrapper.active .location_select_main').attr('style', '');
    } else {
      $('.dropdown_input_wrapper.active .location_select_sub.active').siblings('.location_select_main').hide();
    }

    // Aside Menu
    if ($('.aside_menu').length > 0) {
      $('.aside_menu').children('ul').attr('style', '');
    }

    // Filter Sidebar
    if ($('#filterSidebar').length > 0) {
      $('#filterBtn').removeClass('active');
      $('#filterSidebar').trigger('sidebar:close').removeClass('active');
    }

    // Price Seat Tickets
    if ($('.price_seat_tickets').length > 0) {
      $('.price_detail .toggle_content').css('display', '');
    }

    // Order Detail - Price Detail
    // if ($('.order_detail').length > 0) {
    //   $('.order_detail .open_price_detail').removeClass('active');
    //   $('.order_detail .price_table').css('display', '');
    // }

    // Choose Flight Items
    $('.choose_flight_items').find('.btn_toggle').removeClass('active');
    $('.choose_flight_items').find('.secondary_items').css('display', '');
  }
});

$(window).on('load', function () {
  // Link
  var url = window.location.toString();
  var hashName = url.split('#')[1];
  var $target = $('[data-anchor="' + hashName + '"]');

  if ($target.length > 0) {
    $('html, body').scrollTop(0);
    $('html, body').stop().animate({
      scrollTop: $target.offset().top - $('#header').outerHeight()
    }, 800);
  }
});

$(window).on('hashchange', function () {
  var hash = window.location.hash;
  var hashName = hash.split('#')[1];
  var $target = $('[data-anchor="' + hashName + '"]');

  if ($target.length > 0) {
    $('html, body').stop().animate({
      scrollTop: $target.offset().top - $('#header').outerHeight()
    }, 800);
  }
});

// sticky
function sticky() {
  clearTimeout(stickyTimer);
  stickyTimer = setTimeout(function () {
    $('#header').scrollToFixed({
      zIndex: 99,
      dontSetWidth: true
    });
    if ($('#searchTickets').length > 0) {
      $('#searchTickets .search_logo').scrollToFixed({
        zIndex: 99,
        dontSetWidth: true
      });
    }
    if ($('#fixedOrder').length > 0) {
      var dontWidth = (windowWidth >= 1024) ? false : true;
      $('#fixedOrder').scrollToFixed({
        marginTop: function() {
          var marginTopH;
          if (windowWidth < 1024) {
            marginTopH = $('#header').outerHeight();
          } else if (windowWidth >= 1024) {
            marginTopH = $('#header').outerHeight() + 5;
          }
          return marginTopH;
        },
        limit: function() {
          var limitPosition;
          if (windowWidth < 1024) {
            limitPosition = $('#footer').offset().top - $('#fixedOrder').outerHeight()
          } else if (windowWidth >= 1024) {
            limitPosition = $('.aside').offset().top + $('.aside').outerHeight() - $('#fixedOrder').outerHeight()
          }
          return limitPosition;
        },
        zIndex: 98,
        dontSetWidth: dontWidth
      });
    }
  }, 300);
}

// use width google reCaptcha
var captchaTimer;
function scaleCaptcha() {
  clearTimeout(captchaTimer);
  captchaTimer = setTimeout(function () {
    $('.captcha').each(function() {
      var captcha = $(this);
      var reCaptchaWidth = 304;
      var containerWidth = captcha.width();

      if (reCaptchaWidth > containerWidth) {
        var captchaScale = containerWidth / reCaptchaWidth;
        captcha.find('.captcha_inner').css('transform', 'scale(' + captchaScale + ')');
        captcha.css('height', 78 * captchaScale);
      } else {
        captcha.find('.captcha_inner').css('transform', '');
        captcha.css('height', '');
      }
    })
  }, 300);
}

// Open Ajax Popup
function ajaxPopupOpen(popup_path, popup_width, popup_backBtn) {
  ajaxPath = popup_path;

  if (popup_width) {
    ajaxWidth = popup_width;
  } else if (popup_width === 'undefined') {
    ajaxWidth = 'auto';
  }

  if (popup_backBtn === true) {
    $('#ajaxPopup').iziModal('setTitle', '<button class="popup_close_back btn btn_step" data-izimodal-close>BACK</button>');
  } else {
    $('#ajaxPopup').iziModal('setTitle', '');
    $('#ajaxPopup').iziModal('setHeader', false);
  }

  $('#ajaxPopup').iziModal('setWidth', ajaxWidth);
  $('#ajaxPopup').iziModal('open');
}

function cantDecidePopupOpen(popup_path) {
  cantDecidePath = popup_path;
  $('#cantDecidePopup').iziModal('open');
}
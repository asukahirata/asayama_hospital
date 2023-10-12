//sp用ナビボタン
$(window).on('load', function () {
  // load後に呼ばれる
  $(document).on('click', '.menu-trigger', function () {
    $('.menu-trigger').toggleClass('active');
    $('.gnav').fadeToggle();
  });
  
});

$('.gnav__menu__item a').click(function() {
  $('.menu-trigger').toggleClass('active');
  $('.gnav').fadeToggle();
});

//スクロースしたら現れる浮いてるボタン
$(function () {
  var fixd_btn = $('.fixd_btns');
  fixd_btn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      fixd_btn.fadeIn();
    } else {
      fixd_btn.fadeOut();
    }
  });
});

$('a[href^="#"]').click(function() {
  var speed = 100;
  var adjust = $('#header').height();
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top - adjust;
  $('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;
});

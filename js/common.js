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


//スライダー
var $slide = $(".slide")
  .slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 1000,
    autoplaySpeed: 2000,
    autoplay: true
  })
  .on({
    beforeChange: function(event, slick, currentSlide, nextSlide) {
      $(".slick-slide", this).eq(currentSlide).addClass("preve-slide");
      $(".slick-slide", this).eq(nextSlide).addClass("slide-animation");
    },
    afterChange: function() {
      $(".preve-slide", this).removeClass("preve-slide slide-animation");
    }
  });
$slide.find(".slick-slide").eq(0).addClass("slide-animation");
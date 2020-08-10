$(document).ready(function () {
  var clicked = false;
  var $mainsection = $(".main-section");
  var $header = $("header");

  $header.find(".nav-btn").click(function () {
    var $this = $(this);
    if (!clicked) {
      clicked = true;
      $(this).parent().toggleClass("active");

      setTimeout(function () {
        clicked = false;
      }, 1400);
    }
  });

  $(document).on("click", function (e) {
    var $clickover = $(e.target);
    if (!$clickover.closest("header").length && $("nav").hasClass("active")) {
      $("nav").removeClass("active");
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= $mainsection.height() - 100) {
      $header.addClass("sticky");
    } else {
      $header.removeClass("sticky");
    }
  });

  function menuSlider() {
    var $sliderContainer = $(".menu-slider");
    var $slider = $sliderContainer.find(".slider");
    var $sliderBanner = $sliderContainer.find(".slider-banner");
    var $sliderItems = $sliderBanner.find(".slider-item");
    var itemsLength = $sliderItems.length;
    var $nextBtn = $sliderContainer.find(".arrow.next");
    var $pervBtn = $sliderContainer.find(".arrow.prev");
    var slidesToShow = 3;
    var activeSlides = slidesToShow;

    function responsiveSides() {
      activeSlides -= slidesToShow;
      if ($(window).width() <= 991 && $(window).width() > 550) {
        slidesToShow = 2;
      } else if ($(window).width() <= 550) {
        slidesToShow = 1;
      } else {
        slidesToShow = 3;
      }
      activeSlides += slidesToShow;
    }
    responsiveSides();

    var activeSlides = slidesToShow;
    $sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));

    var itemWidth;
    var itemsWidth;

    function fixWidth() {
      itemWidth = $(".menu-slider .slider-item").outerWidth();
      itemsWidth = itemWidth * itemsLength;
      $sliderBanner.width(itemsWidth);
    }
    fixWidth();

    function leftCalc() {
      return itemWidth * itemMove;
    }

    $(window).resize(function () {
      responsiveSides();

      $sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
      fixWidth();
      $sliderBanner.css("left", -leftCalc());
    });

    var left = 0;
    var clicked = false;
    var itemMove = 0;

    function checkStatus() {
      if (activeSlides == itemsLength) {
        $nextBtn.addClass("disabled");
      } else {
        $nextBtn.removeClass("disabled");
      }

      if (activeSlides == 3) {
        $pervBtn.addClass("disabled");
      } else {
        $pervBtn.removeClass("disabled");
      }
    }
    checkStatus();

    $nextBtn.click(function () {
      if (!clicked) {
        if (activeSlides != itemsLength) {
          clicked = true;
          itemMove++;
          left = -leftCalc();
          $sliderBanner.css("left", left);
          activeSlides++;
          setTimeout(function () {
            clicked = false;
          }, 400);
          checkStatus();
        }
      }
    });

    $pervBtn.click(function () {
      if (!clicked) {
        if (activeSlides > slidesToShow) {
          clicked = true;
          itemMove--;
          left = -leftCalc();
          $sliderBanner.css("left", left);
          activeSlides--;
          setTimeout(function () {
            clicked = false;
          }, 400);
          checkStatus();
        }
      }
    });
  }

  menuSlider();

  function chiefSlider() {
    var $sliderContainer = $(".chief-slider");
    var $slider = $sliderContainer.find(".slider");
    var $sliderBanner = $sliderContainer.find(".slider-banner");
    var $sliderItems = $sliderBanner.find(".slider-item");
    var itemsLength = $sliderItems.length;
    var $nextBtn = $sliderContainer.find(".arrow.next");
    var $pervBtn = $sliderContainer.find(".arrow.prev");
    var slidesToShow = 1;
    var activeSlides = slidesToShow;

    var activeSlides = slidesToShow;
    $sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));

    var itemWidth;
    var itemsWidth;

    function fixWidth() {
      itemWidth = $(".chief-slider .slider-item").outerWidth();
      itemsWidth = itemWidth * itemsLength;
      $sliderBanner.width(itemsWidth);
    }
    fixWidth();

    function leftCalc() {
      return itemWidth * itemMove;
    }

    $(window).resize(function () {
      $sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
      fixWidth();
      $sliderBanner.css("left", -leftCalc());
    });
    var left = 0;
    var clicked = false;
    var itemMove = 0;

    function checkStatus() {
      if (activeSlides == itemsLength) {
        $nextBtn.addClass("disabled");
      } else {
        $nextBtn.removeClass("disabled");
      }

      if (activeSlides == 1) {
        $pervBtn.addClass("disabled");
      } else {
        $pervBtn.removeClass("disabled");
      }
    }
    checkStatus();

    $nextBtn.click(function () {
      if (!clicked) {
        if (activeSlides != itemsLength) {
          clicked = true;
          itemMove++;
          left = -leftCalc();
          $sliderBanner.css("left", left);
          activeSlides++;
          setTimeout(function () {
            clicked = false;
          }, 400);
          checkStatus();
        }
      }
    });

    $pervBtn.click(function () {
      if (!clicked) {
        if (activeSlides > slidesToShow) {
          clicked = true;
          itemMove--;
          left = -leftCalc();
          $sliderBanner.css("left", left);
          activeSlides--;
          setTimeout(function () {
            clicked = false;
          }, 400);
          checkStatus();
        }
      }
    });
  }

  chiefSlider();
});

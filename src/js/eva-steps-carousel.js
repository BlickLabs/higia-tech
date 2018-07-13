var evaStepsWorkCarousel = $('.eva-steps-carousel-work');

evaStepsWorkCarousel.owlCarousel ({
  loop: false,
  nav: true,
  dots: true,
  navText: ['<img class="eva-steps-carousel-navigation" src="/img/icons/black-arrow-left.png" />', '<img class="eva-steps-carousel-navigation" src="/img/icons/black-arrow-right.png" />'],
  margin: 50,
  responsive:{
    0:{
      items:1,
      autoHeight: true,
    },
    700:{
      items: 1
    },
    880: {
      items: 1
    },
    1000:{
      items:1
    }
  }
});

evaStepsWorkCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='eva-steps-carousel-work-controls'></div>");
});
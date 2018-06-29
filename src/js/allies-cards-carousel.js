var evaFounderCarousel = $('.allies-cards-carousel');

evaFounderCarousel.owlCarousel ({
  loop: false,
  nav: true,
  dots: true,
  navText: ['<img class="allies-cards-carousel-navigation" src="/img/icons/black-arrow-left.png" />', '<img class="allies-cards-carousel-navigation" src="/img/icons/black-arrow-right.png" />'],
  margin: 50,
  responsive:{
    0:{
      items:1
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

evaFounderCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='allies-cards-carousel-controls'></div>");
});
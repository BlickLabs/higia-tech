var homeAwardsCarousel = $('.home-awards-carousel');

homeAwardsCarousel.owlCarousel ({
  loop: false,
  nav: true,
  dots: true,
  navText: ['<img class="home-awards-navigation" src="/img/icons/black-arrow-left.png" />', '<img class="home-awards-navigation" src="/img/icons/black-arrow-right.png" />'],
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

homeAwardsCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='home-awards-controls'></div>");
});
var homeAlliesCarousel = $('.home-allies-carousel');

homeAlliesCarousel.owlCarousel ({
  loop: false,
  nav: true,
  dots: true,
  navText: ['<img class="home-allies-navigation" src="/img/icons/white-arrow-left.png" />', '<img class="home-allies-navigation" src="/img/icons/white-arrow-right.png" />'],
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

homeAlliesCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='home-allies-controls'></div>");
});
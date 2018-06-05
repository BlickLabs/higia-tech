var homeNewsCarousel = $('.home-news-carousel');

homeNewsCarousel.owlCarousel ({
  loop: false,
  nav: true,
  dots: true,
  navText: ['<img class="home-news-navigation" src="/img/icons/black-arrow-left.png" />', '<img class="home-news-navigation" src="/img/icons/black-arrow-right.png" />'],
  margin: 18,
  responsive:{
    0:{
      items:1
    },
    700:{
      items: 1
    },
    781: {
      items: 2
    },
    1101:{
      items: 3
    }
  }
});

homeNewsCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='home-news-controls'></div>");
});
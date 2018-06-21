var newsCardCarousel = $('.news-card-carousel');

newsCardCarousel.owlCarousel ({
  loop: false,
  nav: true,
  dots: true,
  navText: ['<img class="news-card-carousel-navigation" src="/img/icons/black-arrow-left.png" />', '<img class="news-card-carousel-navigation" src="/img/icons/black-arrow-right.png" />'],
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

newsCardCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='news-card-carousel-navigation-container'></div>");
});
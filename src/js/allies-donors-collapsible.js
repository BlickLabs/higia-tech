$(function() { 
    $(".allies-donors-collapsible").on('click', function(){
   if (!$(this).hasClass("expanded")){
      $(".allies-donors-container").animate({height: '100%',},"slow");
      $(".allies-donors-fadeout").css({background: 'initial',},"slow");
      $(".allies-donors-carousel").animate({height: '100%',},"slow");
      $(".allies-donors-content").animate({height: '100%',},"slow");
      $(".allies-donors-collapsible").css({backgroundImage: 'url("/img/icons/icon-circle-arrow-up.png")',},"slow");
      $(this).addClass("expanded");
   }
   else {
      $(".allies-donors-container").animate({height: '235px',},"slow");
      $(".allies-donors-fadeout").css({background: 'linear-gradient(rgba(244,244,244,0) 0%, #f4f4f4 100%)',},"slow");
      $(".allies-donors-carousel").animate({height: '235px',},"slow");
      $(".allies-donors-content").animate({height: '235px',},"slow");
      $(".allies-donors-collapsible").css({backgroundImage: 'url("/img/icons/icon-circle-arrow.png")',},"slow");
      $(this).removeClass("expanded");
   }
  });
});

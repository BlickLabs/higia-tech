$(function() { 
    $(".allies-donors-collapsible").on('click', function(){
   if (!$(this).hasClass("expanded")){
      $(".allies-donors-container").animate({height: '100%',},"slow");
      $(".allies-donors-fadeout").css({display: 'none',},"slow");
      $(".allies-donors-collapsible").css({backgroundImage: 'url("/img/icons/icon-circle-arrow-up.png")',},"slow");
      $(this).addClass("expanded");
   }
   else {
      $(".allies-donors-container").animate({height: '235px',},"slow");
      $(".allies-donors-fadeout").css({display: 'block',},"slow");
      $(".allies-donors-collapsible").css({backgroundImage: 'url("/img/icons/icon-circle-arrow.png")',},"slow");
      $(this).removeClass("expanded");
   }
  });
});

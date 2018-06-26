$(function() { 
    $(".research-collapsible").on('click', function(){
   if (!$(this).hasClass("expanded")){
      $(".research").animate({height: '100%',},"slow");
      $(".research-fadeout").css({display: 'none',},"slow");
      $(".research-collapsible").css({backgroundImage: 'url("/img/icons/icon-circle-arrow-up.png")',},"slow");
      $(this).addClass("expanded");
   }
   else {
      $(".research").animate({height: '500px',},"slow");
      $(".research-fadeout").css({display: 'block',},"slow");
      $(".research-collapsible").css({backgroundImage: 'url("/img/icons/icon-circle-arrow.png")',},"slow");
      $(this).removeClass("expanded");
   }
  });
});
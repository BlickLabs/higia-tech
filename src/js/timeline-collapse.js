$(function() { 
    $(".who-timeline-collapsible").on('click', function(){
   if (!$(this).hasClass("expanded")){
      $(".who-timeline-container").animate({height: '100%',},"slow");
      $(this).addClass("expanded");
      $(".who-timeline-collapsible").css({backgroundImage: 'url("/img/icons/icon-circle-arrow-up.png")',},"slow");
   }
   else {
      $(".who-timeline-container").animate({height: '895px',},"slow");
      $(".who-timeline-collapsible").css({backgroundImage: 'url("/img/icons/icon-circle-arrow.png")',},"slow");
      $(this).removeClass("expanded");
   }
  });
});

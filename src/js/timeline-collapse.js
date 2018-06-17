$(function() { 
    $(".who-timeline-collapsible").on('click', function(){
   if (!$(this).hasClass("expanded")){
      $(".who-timeline-container").animate({height: '100%',},"slow");
      $(this).addClass("expanded");
   }
   else {
      $(".who-timeline-container").animate({height: '895px',},"slow");
      $(this).removeClass("expanded");
   }
  });
});

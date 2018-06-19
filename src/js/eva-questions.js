$('.eva-questions-question').click(function(e) {
  e.preventDefault();

  var $this = $(this);

  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);

  } else {
      $this.parent().parent().find('.eva-questions-content .eva-questions-answer-container').removeClass('show');
      $this.parent().parent().find('.eva-questions-content .eva-questions-answer-container').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }

   if ($this.hasClass('active')) {
      $this.removeClass("active");

  } else {
    $this.parent().parent().find('.eva-questions-content').removeClass('show');
    $this.toggleClass("active");
  }
});

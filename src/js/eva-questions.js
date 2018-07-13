document.addEventListener("DOMContentLoaded", function(event) { 
  var question = document.getElementsByClassName("eva-questions-question");
  var answer = document.getElementsByClassName('eva-questions-answer-container');

  function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
  }

  for (var i = 0; i < question.length; i++) {
    question[i].onclick = function() {
      var setClasses = !this.classList.contains('active');
      setClass(question, 'active', 'remove');
      setClass(answer, 'show', 'remove');

      if (setClasses) {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
      }
    }
  }
});

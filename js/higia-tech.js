var evaFounderCarousel=$(".allies-cards-carousel");evaFounderCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="allies-cards-carousel-navigation" src="/img/icons/black-arrow-left.png" />','<img class="allies-cards-carousel-navigation" src="/img/icons/black-arrow-right.png" />'],margin:50,responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),evaFounderCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='allies-cards-carousel-controls'></div>")});var alliesDonorsCarousel=$(".allies-donors-carousel");alliesDonorsCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="allies-donors-carousel-navigation" src="/img/icons/black-arrow-left.png" />','<img class="allies-donors-carousel-navigation" src="/img/icons/black-arrow-right.png" />'],margin:50,responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),alliesDonorsCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='allies-donors-controls'></div>")}),$(function(){$(".allies-donors-collapsible").on("click",function(){$(this).hasClass("expanded")?($(".allies-donors-container").animate({height:"235px"},"slow"),$(".allies-donors-fadeout").css({display:"block"},"slow"),$(".allies-donors-carousel").animate({height:"235px"},"slow"),$(".allies-donors-content").animate({height:"235px"},"slow"),$(".allies-donors-collapsible").css({backgroundImage:'url("/img/icons/icon-circle-arrow.png")'},"slow"),$(this).removeClass("expanded")):($(".allies-donors-container").animate({height:"100%"},"slow"),$(".allies-donors-fadeout").css({display:"none"},"slow"),$(".allies-donors-carousel").animate({height:"100%"},"slow"),$(".allies-donors-content").animate({height:"100%"},"slow"),$(".allies-donors-collapsible").css({backgroundImage:'url("/img/icons/icon-circle-arrow-up.png")'},"slow"),$(this).addClass("expanded"))})}),$('form[name="contact-form"]').validate({name:"required",email:"required",phone:"required",messages:{name:"Por favor, introduce tu Nombre.",email:"Por favor, introduce un Correo Electrónico.",phone:"Por favor, introduce tu Teléfono."},submitHandler:function(e){var o=$('form[name="contact-form"]').serialize();console.log(o),$.ajax({url:"http://integrations.blick.mx/",method:"POST",data:o}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("Correo enviado, gracias por contactarte con nosotros."),$('form[name="contact-form"]')[0].reset())})},invalidHandler:function(e,o){var a=o.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica tu información tienes "+a+" errores.")}});var evaFounderCarousel=$(".eva-founder-carousel");evaFounderCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="eva-founder-carousel-navigation" src="/img/icons/black-arrow-left.png" />','<img class="eva-founder-carousel-navigation" src="/img/icons/black-arrow-right.png" />'],margin:50,responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),evaFounderCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='eva-founder-carousel-controls'></div>")}),document.addEventListener("DOMContentLoaded",function(e){function o(e,o,a){for(var s=0;s<e.length;s++)e[s].classList[a](o)}for(var a=document.getElementsByClassName("eva-questions-question"),s=document.getElementsByClassName("eva-questions-answer-container"),i=0;i<a.length;i++)a[i].onclick=function(){var e=!this.classList.contains("active");o(a,"active","remove"),o(s,"show","remove"),e&&(this.classList.toggle("active"),this.nextElementSibling.classList.toggle("show"))}});var evaStepsWorkCarousel=$(".eva-steps-carousel-work");evaStepsWorkCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="eva-steps-carousel-navigation" src="/img/icons/black-arrow-left.png" />','<img class="eva-steps-carousel-navigation" src="/img/icons/black-arrow-right.png" />'],margin:50,responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),evaStepsWorkCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='eva-steps-carousel-work-controls'></div>")}),$(function(){function e(){var e=document.getElementById("home-particles-absolute").clientHeight;a.style.height=e+"px"}var o;if("/"!==window.location.pathname&&"/index.html"!==window.location.pathname&&"/higia-tech/"!==window.location.pathname&&"/higia-tech/index.html"!==window.location.pathname&&"/higia-tech/es/index.html"!==window.location.pathname&&"/es/index.html"!==window.location.pathname&&"/higia-tech/en/index.html"!==window.location.pathname&&"/en/index.html"!==window.location.pathname||(o=!0),o){particlesJS.load("home-particles-container","/js/particles-config.json")}var a=document.getElementById("home-particles-container");o&&(window.addEventListener("scroll",e),e()),particlesJS.load("particles-js","particles.js",function(){console.log("particles.js Is loaded!")})});var homeAlliesCarousel=$(".home-allies-carousel");homeAlliesCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="home-allies-navigation" src="/img/icons/white-arrow-left.png" />','<img class="home-allies-navigation" src="/img/icons/white-arrow-right.png" />'],margin:50,responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),homeAlliesCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='home-allies-controls'></div>")});var homeAwardsCarousel=$(".home-awards-carousel");homeAwardsCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="home-awards-navigation" src="/img/icons/black-arrow-left.png" />','<img class="home-awards-navigation" src="/img/icons/black-arrow-right.png" />'],margin:50,responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),homeAwardsCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='home-awards-controls'></div>")});var homeNewsCarousel=$(".home-news-carousel");homeNewsCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="home-news-navigation" src="/img/icons/black-arrow-left.png" />','<img class="home-news-navigation" src="/img/icons/black-arrow-right.png" />'],margin:18,responsive:{0:{items:1},700:{items:1},781:{items:2},1101:{items:3}}}),homeNewsCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='home-news-controls'></div>")}),$(function(){function e(){document.querySelector("#menuContainer").style.width="85%",document.querySelector("#hamburgerMenu").style.display="none"}function o(){document.querySelector("#menuContainer").style.width="0%",document.querySelector("#hamburgerMenu").style.display="inline"}window.addEventListener("click",function(e){e.target.dataset.hasOwnProperty("attribute")||o()});var a=document.querySelector("#hamburgerMenu");a.addEventListener("touchstart",function(o){o.preventDefault(),e()});var s=document.querySelector("#hideHamburger");s.addEventListener("touchstart",function(e){e.preventDefault(),o()}),a.addEventListener("click",function(o){o.preventDefault(),e()}),s.addEventListener("click",function(e){e.preventDefault(),o()})});var newsCardCarousel=$(".news-card-carousel");newsCardCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="news-card-carousel-navigation" src="/img/icons/black-arrow-left.png" />','<img class="news-card-carousel-navigation" src="/img/icons/black-arrow-right.png" />'],margin:50,responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),newsCardCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='news-card-carousel-navigation-container'></div>")}),$(function(){$(".research-collapsible").on("click",function(){$(this).hasClass("expanded")?($(".research").animate({height:"500px"},"slow"),$(".research-fadeout").css({display:"block"},"slow"),$(".research-collapsible").css({backgroundImage:'url("/img/icons/icon-circle-arrow.png")'},"slow"),$(this).removeClass("expanded")):($(".research").animate({height:"100%"},"slow"),$(".research-fadeout").css({display:"none"},"slow"),$(".research-collapsible").css({backgroundImage:'url("/img/icons/icon-circle-arrow-up.png")'},"slow"),$(this).addClass("expanded"))})}),$(function(){$(".who-timeline-collapsible").on("click",function(){$(this).hasClass("expanded")?($(".who-timeline-container").animate({height:"895px"},"slow"),$(".who-timeline-collapsible").css({backgroundImage:'url("/img/icons/icon-circle-arrow.png")'},"slow"),$(this).removeClass("expanded")):($(".who-timeline-container").animate({height:"100%"},"slow"),$(this).addClass("expanded"),$(".who-timeline-collapsible").css({backgroundImage:'url("/img/icons/icon-circle-arrow-up.png")'},"slow"))})});var whoCardCarousel=$(".who-card-carousel");whoCardCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="who-card-navigation" src="/img/icons/black-arrow-left.png" />','<img class="who-work-navigation" src="/img/icons/black-arrow-right.png" />'],margin:50,responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),whoCardCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='who-card-controls'></div>")});var whoWorkCarousel=$(".who-work-card-carousel");whoWorkCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="who-work-navigation" src="/img/icons/black-arrow-left.png" />','<img class="who-work-navigation" src="/img/icons/black-arrow-right.png" />'],margin:50,responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),whoWorkCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='who-work-controls'></div>")}),$(function(){$("a[data-modal]").click(function(e){return $(this).modal(),!1})});
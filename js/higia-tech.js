function openModal(e){idModal="#"+e,modalFull=$(idModal),modalFull.css("display","flex"),modalFull.on("click",function(e){e.target.id===modalFull.attr("id")&&modalFull.css("display","none")})}function closeModal(e){idModal="#"+e,modalFull=$(idModal),modalFull.css("display","none")}$('form[name="contact-form"]').validate({name:"required",email:"required",phone:"required",messages:{name:"Por favor, introduce tu Nombre.",email:"Por favor, introduce un Correo Electrónico.",phone:"Por favor, introduce tu Teléfono."},submitHandler:function(e){var o=$('form[name="contact-form"]').serialize();console.log(o),$.ajax({url:"http://integrations.blick.mx/",method:"POST",data:o}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("Correo enviado, gracias por contactarte con nosotros."),$('form[name="contact-form"]')[0].reset())})},invalidHandler:function(e,o){var a=o.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica tu información tienes "+a+" errores.")}}),$(function(){function e(){var e=document.getElementById("home-particles-absolute").clientHeight;a.style.height=e+"px"}var o;if("/"!==window.location.pathname&&"/index.html"!==window.location.pathname&&"/higia-tech/"!==window.location.pathname&&"/higia-tech/index.html"!==window.location.pathname&&"/higia-tech/es/index.html"!==window.location.pathname&&"/es/index.html"!==window.location.pathname&&"/higia-tech/en/index.html"!==window.location.pathname&&"/en/index.html"!==window.location.pathname||(o=!0),o){particlesJS.load("home-particles-container","/js/particles-config.json")}var a=document.getElementById("home-particles-container");o&&(window.addEventListener("scroll",e),e()),particlesJS.load("particles-js","particles.js",function(){console.log("particles.js Is loaded!")})});var homeAlliesCarousel=$(".home-allies-carousel");homeAlliesCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="home-allies-navigation" src="/img/icons/white-arrow-left.png" />','<img class="home-allies-navigation" src="/img/icons/white-arrow-right.png" />'],margin:50,responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),homeAlliesCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='home-allies-controls'></div>")});var homeAwardsCarousel=$(".home-awards-carousel");homeAwardsCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="home-awards-navigation" src="/img/icons/black-arrow-left.png" />','<img class="home-awards-navigation" src="/img/icons/black-arrow-right.png" />'],margin:50,responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),homeAwardsCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='home-awards-controls'></div>")});var homeNewsCarousel=$(".home-news-carousel");homeNewsCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="home-news-navigation" src="/img/icons/black-arrow-left.png" />','<img class="home-news-navigation" src="/img/icons/black-arrow-right.png" />'],margin:18,responsive:{0:{items:1},700:{items:1},781:{items:2},1101:{items:3}}}),homeNewsCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='home-news-controls'></div>")}),$(function(){function e(){document.querySelector("#menuContainer").style.width="85%",document.querySelector("#hamburgerMenu").style.display="none"}function o(){document.querySelector("#menuContainer").style.width="0%",document.querySelector("#hamburgerMenu").style.display="inline"}window.addEventListener("click",function(e){e.target.dataset.hasOwnProperty("attribute")||o()});var a=document.querySelector("#hamburgerMenu");a.addEventListener("touchstart",function(o){o.preventDefault(),e()});var n=document.querySelector("#hideHamburger");n.addEventListener("touchstart",function(e){e.preventDefault(),o()}),a.addEventListener("click",function(o){o.preventDefault(),e()}),n.addEventListener("click",function(e){e.preventDefault(),o()})}),$(function(){$(".who-timeline-collapsible").on("click",function(){$(this).hasClass("expanded")?($(".who-timeline-container").animate({height:"895px"},"slow"),$(this).removeClass("expanded")):($(".who-timeline-container").animate({height:"100%"},"slow"),$(this).addClass("expanded"))})});var whoWorkCarousel=$(".who-work-card-carousel");whoWorkCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="who-work-navigation" src="/img/icons/black-arrow-left.png" />','<img class="who-work-navigation" src="/img/icons/black-arrow-right.png" />'],margin:50,responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),whoWorkCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='who-work-controls'></div>")});var botones=$(".who-card-icon"),btnClose=$(".who-modal-close"),modalFull="";botones.on("click",function(e){openModal(e.target.dataset.modal)}),btnClose.on("click",function(e){closeModal(e.target.dataset.close)});
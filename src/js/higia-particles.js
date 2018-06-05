$(function(){
  var indexLocation;
  if (window.location.pathname === '/' ||
      window.location.pathname === '/index.html' ||
      window.location.pathname === '/higia-tech/' ||
      window.location.pathname === '/higia-tech/index.html' ||
      window.location.pathname === '/higia-tech/es/index.html' ||
      window.location.pathname === '/es/index.html' ||
      window.location.pathname === '/higia-tech/en/index.html' ||
      window.location.pathname === '/en/index.html'
    ) {
    indexLocation = true;
  }

  if (indexLocation) {
    var partConfig = '/js/particles-config.json';
    particlesJS.load('home-particles-container', partConfig);
  }

  var partContainerA = document.getElementById('home-particles-container');

  function resizeContainer() {
    var absContainerHeight = document.getElementById('home-particles-absolute').clientHeight;
    partContainerA.style.height = absContainerHeight+'px';
  }


  if (indexLocation) {
    window.addEventListener('scroll', resizeContainer)

    resizeContainer()
  }

  particlesJS.load('particles-js', 'particles.js', function(){
    console.log("particles.js Is loaded!");
  });
});

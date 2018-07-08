$(function(){
  $('a[data-modal]').click(function(event) {
    $(this).modal();
    
		$(function() {
			var pathLocation = window.location.pathname;
			if(pathLocation === '/' || pathLocation === '/higia-tech/' || pathLocation === '/higia-tech/index' || pathLocation === '/index' || pathLocation === '/higia-tech/es/index.html' || pathLocation === '/es/index.html' || pathLocation === '/higia-tech/en/index.html' || pathLocation === '/en/index.html' || pathLocation === '/higia-tech/es/eva.html' || pathLocation === '/es/eva.html' || pathLocation === '/higia-tech/en/eva.html' || pathLocation === '/en/eva.html') {
				if ($.modal.isActive()) {
					var dataId = event.currentTarget.dataset.id;
					var dataVideo = document.getElementById(dataId);

					dataVideo.currentTime = 0;
					dataVideo.play();
				}

				function log_modal_event(event, modal) {
					var dataVideo = document.getElementById(dataId);
					dataVideo.pause();
				}

				$(document).on($.modal.CLOSE, log_modal_event);
			}
		});
    return false;
  });
});

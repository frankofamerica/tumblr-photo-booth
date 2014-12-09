$( document ).ready(function() {
	var postData;
	var element = document.documentElement;
	var newFileName;
	var capturedImg = $('#canvasImg');
	detectMedia();

	function detectMedia () {
		navigator.getUserMedia ||
			(navigator.getUserMedia = navigator.mozGetUserMedia ||
			navigator.webkitGetUserMedia || navigator.msGetUserMedia);
		
		if (navigator.getUserMedia){
				navigator.getUserMedia({video:true,audio:false}, onSuccess, onError);
			}else{
				alert('Your browser is not supported');
		}
	};

	function setBinds() {
		//make entire page clickable to take pic
		$('body').on('click', '.clickable',function(){
			console.log('hit');
			hideElement($('.instructions'));
			$('.wrapper').removeClass('clickable');
			initCountdown();
		});	
	
		//save image that was captured
		$('.saveit').on('click', function(){
	
			var ajax = new XMLHttpRequest();
			ajax.open("POST",'writefile.php',true);    
			ajax.setRequestHeader('Content-Type', 'canvas/upload');
	
			ajax.onreadystatechange=function()
		  	{
				if (ajax.readyState == 4)
				{ 
					console.log('SAVED', ajax.responseText);
					newFileName = ajax.responseText;
			
					postToTumblr(newFileName); 
				}
		  	}

			ajax.send(postData); 
		});
	
		//retake pic
		$('.retake').on('click', function() {
			resetStage();
		});
	
		//enable full screen
		$('.fullScreenBtn').on('click', function () {
		  if(element.requestFullscreen) {
		    element.requestFullscreen();
		  } else if(element.mozRequestFullScreen) {
		    element.mozRequestFullScreen();
		  } else if(element.webkitRequestFullscreen) {
		    element.webkitRequestFullscreen();
		  } else if(element.msRequestFullscreen) {
		    element.msRequestFullscreen();
		  }
		});
	
		//detect full screen on/off
		$(document).bind('webkitfullscreenchange mozfullscreenchange fullscreenchange', function(e) {
		    var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
		    var event = state ? 'FullscreenOn' : 'FullscreenOff';
			console.log(event);
			if(event == "FullscreenOff"){
				$('.fullScreenBtn').css('display', 'block');
			}else if(event == "FullscreenOn"){
				$('.fullScreenBtn').css('display', 'none');
			} 
		});
	};

	function resetStage () {
		showElement($('#webcam'));
		showElement($('.instructions'));
		showElement($('.countdown'));
		$('.countdown h1').text("");
		hideElement($('.pic-options'));
	
		capturedImg.attr("src", "");
	
		$('.wrapper').addClass('clickable');
	};

	//init countdown to take pic
	function initCountdown() {
		console.log('countdown!');
		var sec = 5;
		var timer = setInterval(function() {
		    $('.countdown h1').animate({
		        opacity: 0.25,
		        fontSize: '5em'
		    }, 500, function() {
		        $('.countdown h1').css('opacity', 1);
		        $('.countdown h1').css('font-size', '1em');
		        $('.countdown h1').text(sec--);
		    })

		    if (sec == 0) {
		        hideElement($('.countdown'));
		        clearInterval(timer);
				picCapture();
		    }
		}, 500);
	};

	function hideElement (ele) {
		ele.addClass('hide');
	};

	function showElement (ele) {
		ele.removeClass('hide');
	};

	function onSuccess(stream){
		// Helper function to Fill and Center the HTML5 Video
		$('video, object').maximage('maxcover');
	
		setBinds();
		
		vidContainer = document.getElementById('webcam');
		var vidStream;
	
		if (window.webkitURL){
				vidStream = window.webkitURL.createObjectURL(stream);
			}else{
			vidStream = stream;
		}
	
		vidContainer.autoplay = true;
		vidContainer.src = vidStream;
	}

	function onError(){
		alert('Houston, we have a problem');
	}

	function picCapture () {
		console.log('take pic');
		var picture = $('#capture')[0],
			context = picture.getContext('2d');
	
		picture.width = "1080";
		picture.height = "720";
	
		context.drawImage(vidContainer, 0, 0, picture.width, picture.height);
	
		dataURL = picture.toDataURL("image/png");
	
		capturedImg.attr("src", dataURL);
	
		postData = "canvasData="+dataURL;

		hideElement($('#webcam'));
		showElement($('.pic-options'));
	}


	function postToTumblr(img) {
		var jqxhr = $.post('post_tumblr.php', 'val=' + img, function (response) {
		  console.log( "success" );
		})
		  .done(function() {
		    console.log( "second success" );
		  })
		  .fail(function() {
		    console.log( "error" );
		  })
		  .always(function() {
		    console.log( "finished" );
		});

	};
});
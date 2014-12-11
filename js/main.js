$( document ).ready(function() {
	var postData;
	var element = document.documentElement;
	var newFileName;
	var capturedImg = $('#canvasImg');
	var takePicBtn = $('.take-pic-btn');
	var instructions = $('.instructions');
	var picOptions = $('.pic-options');
	var countdown = $('.countdown');
	var fullScreenBtn = $('.fullScreenBtn');
	var imgSaving = $('.img-saving');
	var tumblrSaving = $('.tumblr-saving');
	var overlay = $('.overlay-container ');
	var thankyou = $('.thank-you');
	
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
		takePicBtn.on('click', takePic); 
		//make entire page clickable to take pic

		//save image that was captured
		$('.saveit').on('click', function(){
			overlay.addClass('saving-img');
			hideElement(picOptions);
			
			var ajax = new XMLHttpRequest();
			ajax.open("POST",'writefile.php',true);    
			ajax.setRequestHeader('Content-Type', 'canvas/upload');
	
			ajax.onreadystatechange=function()
		  	{
				if (ajax.readyState == 4 && ajax.status == 200)
				{ 
					console.log('SAVED', ajax.responseText);
					newFileName = ajax.responseText;
					
					imgSaved();
					
					postToTumblr(newFileName); 

				}else if (ajax.readyState == 4 && ajax.status == 404) {
					console.log('ERROR SAVING');
				}
		  	}

			ajax.send(postData); 
		});
	
		//retake pic
		$('.retake').on('click', resetStage);
	
		//enable full screen
		fullScreenBtn.on('click', function () {
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
				fullScreenBtn.css('display', 'block');
			}else if(event == "FullscreenOn"){
				fullScreenBtn.css('display', 'none');
			} 
		});
	};
	
	function takePic () {
		console.log('hit');
		hideElement(instructions);
		initCountdown();
		hideElement(takePicBtn);
	};
	
	function imgSaved() {
		imgSaving.find('.saving').addClass('success');
	};
	
	function resetStage () {
		showElement($('#webcam'));
		showElement(instructions);
		hideElement(picOptions);
	
		capturedImg.attr("src", "");
	
		showElement(takePicBtn);
	};

	//init countdown to take pic
	function initCountdown() {
		console.log('countdown!');
		showElement(countdown);
		var sec = 3;
		$('.countdown h1').text('LOOK HERE!');
		var timer = setInterval(function() {
		    $('.countdown h1').animate({
		        opacity: 0
		    }, 1000, function() {
		        $('.countdown h1').css('opacity', 1);
		        $('.countdown h1').text(sec--);
		    })

		    if (sec == 0) {
		        hideElement(countdown);
		        clearInterval(timer);
				picCapture();
		    }
		}, 1000);
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
		showElement(picOptions);
	}

	function postToTumblr(img) {
		tumblrSaving.addClass('uploading');
		
		var jqxhr = $.post('post_tumblr.php', 'val=' + img, function (data) {
		var str = data.substring(data.indexOf('=') +1);
		  
		  var obj = jQuery.parseJSON(str);
		  console.log(obj);
		  if (obj.meta.status == 201){
			  imgUploaded();
		  }else if(obj.meta.status == 401){
			  failUpload();
		  }
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
	
	function imgUploaded() {
		tumblrSaving.find('.saving').addClass('success');
		thankyou.html('Photo saved and uploaded!<br>Enjoy the party!');
		thankyou.css('padding', '1em');
		
		resetDelay();
	};
	
	function failUpload () {
		tumblrSaving.find('.saving').addClass('failed');
		
		resetDelay();
	};
	
	function resetDelay() {
		var timer = setInterval(function() {
			clearInterval(timer);
			resetOverlay();
			resetStage();
		}, 4000);
	};
	
	function resetOverlay() {
		overlay.removeClass('saving-img');
		imgSaving.find('.saving').removeClass('success');
		tumblrSaving.find('.saving').removeClass('success');
		
		imgSaving.find('.saving').removeClass('failed');
		tumblrSaving.find('.saving').removeClass('failed');
		
		thankyou.text('');
		thankyou.css('padding', '0');
	};
});
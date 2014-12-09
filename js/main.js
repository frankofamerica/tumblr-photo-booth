$(function(){
 // Helper function to Fill and Center the HTML5 Video
 $('video, object').maximage('maxcover');
});

var photoButton = $('#webcam');
var postData;
var sec = 5;
var element = document.documentElement;

photoButton.on('click', function(){
	hideElement($('.instructions'));
	
	initCountdown();
});

var initCountdown = function() {
	var timer = setInterval(function() {
	    $('.countdown h1').animate({
	        opacity: 0.25,
	        fontSize: '5em'
	    }, 500, function() {
	        $('.countdown h1').css('opacity', 1);
	        $('.countdown h1').css('font-size', '1em');
	        $('.countdown h1').text(sec--);
	    })

	    if (sec == -1) {
	        $('.countdown').fadeOut('fast');
	        clearInterval(timer);
			picCapture();
	    }
	}, 500);
};

var hideElement = function (ele) {
	ele.addClass('hide');
};

var showElement = function (ele) {
	ele.removeClass('hide');
};

navigator.getUserMedia ||
	(navigator.getUserMedia = navigator.mozGetUserMedia ||
	navigator.webkitGetUserMedia || navigator.msGetUserMedia);
	
if (navigator.getUserMedia){
		navigator.getUserMedia({video:true,audio:false}, onSuccess, onError);
	}else{
		alert('Your browser is not supported');
}

function onSuccess(stream){
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
	var picture = $('#capture')[0],
		context = picture.getContext('2d');
	
	picture.width = "1080";
	picture.height = "720";
	
	context.drawImage(vidContainer, 0, 0, picture.width, picture.height);
	
	dataURL = picture.toDataURL("image/png");
	
	$('#canvasImg').attr("src", dataURL);
	
	postData = "canvasData="+dataURL;

	hideElement($('#webcam'));
	showElement($('.pic-options'));
}

var newFileName;

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
var photoButton = $('#snapPicture');
var postData;

photoButton.on('click', function(){
	picCapture();
});

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

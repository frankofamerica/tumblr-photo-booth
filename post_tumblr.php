<?php

	$value = $_POST['val'];

	//TUMBLR API 

	define("CONSUMER_KEY", "nwCmTktZ8vvHVumGnJDeVu7InqkJH7wWzgQUMX1peDIyP4nF7p");
	define("CONSUMER_SECRET", "cp5ijAtXxarzYuR5hCem8a6xo2UC2wRn3RMJhzsW9rQcrXSLo9");
	define("OAUTH_TOKEN", "tyEZBN17O8NjS8LSMNTHB3SayWgGmd5UG60KmJyHlQrDFc4Zy0");
	define("OAUTH_SECRET", "tOowfu7ejtwsxhFK12F8kWJnVsJj1DTUt2e8Hc9n4rnfIBjnJU");

	function oauth_gen($method, $url, $iparams, &$headers) {

	    $iparams['oauth_consumer_key'] = CONSUMER_KEY;
	    $iparams['oauth_nonce'] = strval(time());
	    $iparams['oauth_signature_method'] = 'HMAC-SHA1';
	    $iparams['oauth_timestamp'] = strval(time());
	    $iparams['oauth_token'] = OAUTH_TOKEN;
	    $iparams['oauth_version'] = '1.0';
	    $iparams['oauth_signature'] = oauth_sig($method, $url, $iparams);
	    print $iparams['oauth_signature'];  
	    $oauth_header = array();
	    foreach($iparams as $key => $value) {
	        if (strpos($key, "oauth") !== false) { 
	           $oauth_header []= $key ."=".$value;
	        }
	    }
	    $oauth_header = "OAuth ". implode(",", $oauth_header);
	    $headers["Authorization"] = $oauth_header;
	}

	function oauth_sig($method, $uri, $params) {

	    $parts []= $method;
	    $parts []= rawurlencode($uri);

	    $iparams = array();
	    ksort($params);
	    foreach($params as $key => $data) {
	            if(is_array($data)) {
	                $count = 0;
	                foreach($data as $val) {
	                    $n = $key . "[". $count . "]";
	                    $iparams []= $n . "=" . rawurlencode($val);
	                    $count++;
	                }
	            } else {
	                $iparams[]= rawurlencode($key) . "=" .rawurlencode($data);
	            }
	    }
	    $parts []= rawurlencode(implode("&", $iparams));
	    $sig = implode("&", $parts);
	    return base64_encode(hash_hmac('sha1', $sig, CONSUMER_SECRET."&". OAUTH_SECRET, true));
	}

	$recentImgPath = "img/pics/".$value.".png";
	$headers = array("Host" => "http://api.tumblr.com/", "Content-type" => "application/x-www-form-urlencoded", "Expect" => "");
	$params = array("data" => array(file_get_contents($recentImgPath)),
	"type" => "photo");

	$blogname = "brnye.tumblr.com";
	oauth_gen("POST", "http://api.tumblr.com/v2/blog/$blogname/post", $params, $headers);

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_USERAGENT, "PHP Uploader Tumblr v1.0");
	curl_setopt($ch, CURLOPT_URL, "http://api.tumblr.com/v2/blog/$blogname/post");
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1 );

	curl_setopt($ch, CURLOPT_HTTPHEADER, array(
	    "Authorization: " . $headers['Authorization'],
	    "Content-type: " . $headers["Content-type"],
	    "Expect: ")
	);

	$params = http_build_query($params);

	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $params);

	$response = curl_exec($ch);
	print $response;
?>
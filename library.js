


(function(module) {
	"use strict";

	var AudioPlayer = {},
	type = "",
	embed= "",

	embedUrl_stream = /<a href="(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6}):?([\/\w .\%\-]*)\/?.*>stream<\/a>/ig,     //regex stream 
	embedUrl_ip = /<a href(https?:\/\/)?([0-9]|[0-9]{2}|[0-9]{3})\.([0-9]|[0-9]{2}|[0-9]{3})\.([0-9]|[0-9]{2}|[0-9]{3})\.([0-9]|[0-9]{2}|[0-9]{3})(\/|\:)([\/\w \.\%\-]*)\/?.*>stream<\/a>/ig,  //regex ip
	embedUrl_ogg  = /<a href=".*\/uploads\/files\/(\w*-(.*\.ogg)).*>.*<\/a>/ig,   // regex ogg
	embedUrl_wav  = /<a href=".*\/uploads\/files\/(\w*-(.*\.wav)).*>.*<\/a>/ig;   // regex wav


	AudioPlayer.parse = function(data, callback) {
		if (!data || !data.postData || !data.postData.content) {
			return callback(null, data);
		}
		// stream
		if (data.postData.content.match(embedUrl_stream)) {
			type = "audio/mpeg";
			embed  = '<div class="playit" data-link="http://$2.$3:$4" data-name="$4" ><p>stream <i class="fa fa-play">&nbsp;&nbsp;</i>$4</p></div>';
			data.postData.content = data.postData.content.replace(embedUrl_stream, embed);
		}


		// stream_ip
		if (data.postData.content.match(embedUrl_ip)) {
			type = "audio/mpeg";
			embed  = '<div class="playit" data-link="$1$2.$3.$4.$5$6$7" data-name="$7" ><p>stream ip <i class="fa fa-play">&nbsp;&nbsp;</i>$7</p></div>';
			data.postData.content = data.postData.content.replace(embedUrl_ip, embed);
		}

		// ogg
		if (data.postData.content.match(embedUrl_ogg)) {
			console.log("audio/ogg");
			type = "audio/ogg";
			data.postData.content = data.postData.content.replace(embedUrl_ogg, embed);
		}
		// wav
		if (data.postData.content.match(embedUrl_wav)) {
			console.log("audio/wave");
			type = "audio/wav";
			data.postData.content = data.postData.content.replace(embedUrl_wav, embed);
		}
		callback(null, data);
	};




	module.exports = AudioPlayer;
}(module));

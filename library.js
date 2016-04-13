


(function(module) {
	"use strict";
    
	var AudioPlayer = {}, 
	    type = "",	    	    
		 embed  = '<div class="playit" data-link="http://$2.$3:$4" data-name="$4" ><p>stream <i class="fa fa-play">&nbsp;&nbsp;</i>$4</p></div>',
		  
       embedUrl_mpeg = /<a href="(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6}):?([\/\w \.-]*)\/?.*>stream<\/a>/ig,     //regex mp3
       embedUrl_ogg  = /<a href=".*\/uploads\/files\/(\w*-(.*\.ogg)).*>.*<\/a>/ig,   // regex ogg
       embedUrl_wav  = /<a href=".*\/uploads\/files\/(\w*-(.*\.wav)).*>.*<\/a>/ig;   // regex wav
       
  
	AudioPlayer.parse = function(data, callback) { 
	    if (!data || !data.postData || !data.postData.content) { 
            return callback(null, data);
        }
        // mp3
        if (data.postData.content.match(embedUrl_mpeg)) {
           type = "audio/mpeg";
            data.postData.content = data.postData.content.replace(embedUrl_mpeg, embed);
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

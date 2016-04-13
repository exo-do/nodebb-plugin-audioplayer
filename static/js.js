$('document').ready(function() {
  var html = "";

  $(document ).on("click", ".playit", function() {
    if ( $("#audioplayerPlayer").attr("id") === "audioplayerPlayer" ) {
      $(".playdemo").stop();
      $("#audioplayerPlayer").html("");

    } else {

      $( "body" ).append('<div id="audioplayerPlayer"></div>');
    }

    html = "";
    html += '<span id="audioplayer_user"></span>';
    html += '<span><audio class="playdemo inline" src="" preload="auto" controls loop autoplay></audio></span>';
    //html += '<a  id="linkToContent" class="pointer inline" ></a>';
    html += '<a id="linkToTopic" <span class="fa fa-bars pointer t20w inline hover" rel="nofollow"></span></a>';
    html += '<span id="linkToDownload" class="fa fa-cloud-download pointer t20w inline hover" rel="nofollow"></span>';
    html += '<span class="closeAudioPlayer right fa fa-times t30w pointer hover" ></span>';

    $( "#audioplayerPlayer" ).html(html);

    var src 	= $(this).data("link"),   // link from file
    name 	= $(this).data("name"),   // name from file
    topic = $(".topic-title").text(),  // topic title
    URL 	= $(location).attr('href'),  // Topic Link
    PHAT  = $(location).attr('pathname'); // Returns path only

    // theme persona
    if ( $( ".clearfix" ).length ) {

      var  user  = $(this).closest('.clearfix').children().children().children().html();
      //  console.log(  "theme => persona" );
    }

    // console.log(  "user code => " + user);
    $(".playdemo").attr("src", src);
    //$("#audioplayer_user").html(name));
    //$("#linkToContent").attr("href", URL).text(topic);
    $("#linkToTopic").attr("href", URL);
    // $("#linkToDownload").attr("href", src).title("Download " + name);

    /*  $('#linkToDownload').click(function(e) {
    e.preventDefault();  //stop the browser from following
    window.location.href = src;
  });
  */
  $(document ).on("click", "#linkToDownload", function() {
    var win = window.open(src, '_blank');
    win.focus();
  });

});

// close and remove audioplayer
$(document ).on("click", ".closeAudioPlayer", function() {
  $(".playdemo").stop();
  $("#audioplayerPlayer").remove();
});



});

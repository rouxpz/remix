var url;
var str;
var vi;

// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {

    //converts the JSON to a string and displays it in the "search container" div
    str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');

    //parses the JSON to return the video ID number for the first element in the list
    var arr = response.result;
    var videoID = arr.items[0].id
    vi = videoID.videoId;
    console.log(vi);
    url = "http://www.youtube.com/embed/" + String(vi) + "?rel=0;showinfo=0";
    
  });

}

//dynamically changes the content of the iframe
function loadIframe() {
    var $iframe = $('#frame'); //looks for element with ID "frame"
    if ( $iframe.length ) {
        $iframe.attr('src',url);    // pass in the url to the 'src' attribute
        return false;
    }
    return true;
} 

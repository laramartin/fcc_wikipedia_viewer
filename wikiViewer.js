$(document).ready(function() {
  console.log("this is the wikiViewer.js")
  var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert+Einstein"
  console.log("this is the url: " + url);



  // // need permissions to access to JSON, neeed to check documentation
  // function getEntries(url){
  //   $.getJSON(url, function(data){
  //     var searchResults = data.query.search.length;
  //     console.log("search results length is: " + searchResults);
  //   });
  // };

});

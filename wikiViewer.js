$(document).ready(function() {

  $( "#searchForm" ).submit(function( event ) {
    //this prevents the page to be refreshed
    event.preventDefault();
    searchInput = document.getElementById("searchValue").value;
    search(searchInput);
  });

  $( "#randomButton" ).click(function() {
    var win = window.open('http://en.wikipedia.org/wiki/Special:Random', '_blank');
      if(win){
          win.focus();
      }else{
          alert('Please allow popups for this site');
      };
  });
});

var searchInput = "";

function getEntries(url){
  $.ajax({
    type: "GET",
    url: url,
    contentType: "application/json; charset=utf-8",
    async: true,
    dataType: "json",
    success: function (data, textStatus, jqXHR) {
      console.log(data);
      displayData(data);
    },
    error: function (errorMessage) {
      console.log(errorMessage);
    }
  });

};

function search(input){
  var str = searchInput.split(' ').join('+');
  var urlTest = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=" +
  str + "&callback=?";
  getEntries(urlTest);
};

function displayData(data){
  var searchResults = data.query.search.length;
  var html = "";

  for (var i = 0; i < data.query.search.length; i++){
    var title = data.query.search[i].title;
    var snippet = data.query.search[i].snippet;
    var titleStr = title.split(' ').join('_');
    var entryUrl = "https://en.wikipedia.org/wiki/" + titleStr;
    html += "<a href='" + entryUrl + "' target='_blank'>"
      + "<div class='resultEntry'> <p>" +
      "<br><b>" + title + "</b>" +
      "<br>" + snippet +
      "</p></div></a>";
  };

  $(".resultTitle").html(html);

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-74834254-1', 'auto');
  ga('send', 'pageview');

};

$(document).ready(function() {
  console.log("this is the wikiViewer.js")
  var url = "https://en.wikipedia.org/w/api.php?action=query&format=jsonfm&list=search&utf8=1&srsearch=Albert+Einstein"
  console.log("this is the url: " + url);

  // data format "json"
  var data = {
     "batchcomplete":"",
     "continue":{
        "sroffset":10,
        "continue":"-||"
     },
     "query":{
        "searchinfo":{
           "totalhits":4408
        },
        "search":[
           {
              "ns":0,
              "title":"Albert Einstein",
              "snippet":"&quot;<span class=\"searchmatch\">Einstein</span>&quot; redirects here. For other uses, see <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> (disambiguation) and <span class=\"searchmatch\">Einstein</span> (disambiguation). <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> (/ˈaɪnstaɪn/; German: [ˈalbɛɐ̯t",
              "size":132354,
              "wordcount":14285,
              "timestamp":"2016-03-06T09:27:50Z"
           },
           {
              "ns":0,
              "title":"Albert Einstein Medal",
              "snippet":"The <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> Medal is an award presented by the <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> Society in Bern. First given in 1979, the award is presented to people for &quot;scientific",
              "size":2420,
              "wordcount":222,
              "timestamp":"2016-02-02T08:35:54Z"
           },
           {
              "ns":0,
              "title":"List of things named after Albert Einstein",
              "snippet":"named after <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span>.   Bose–<span class=\"searchmatch\">Einstein</span> condensate Bose–<span class=\"searchmatch\">Einstein</span> statistics <span class=\"searchmatch\">Einstein</span>'s mass-energy relation <span class=\"searchmatch\">Einstein</span>'s constant <span class=\"searchmatch\">Einstein</span>'s radius of",
              "size":6728,
              "wordcount":695,
              "timestamp":"2015-12-29T12:19:07Z"
           },
           {
              "ns":0,
              "title":"Albert Einstein Award",
              "snippet":"The <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> Award (sometimes mistakenly called the <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> Medal because it was accompanied with a gold medal) was an award in theoretical",
              "size":6073,
              "wordcount":560,
              "timestamp":"2015-09-11T03:50:27Z"
           },
           {
              "ns":0,
              "title":"Albert Einstein Peace Prize",
              "snippet":"The <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> Peace Prize is/was a peace prize awarded annually since 1980 by the <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> Peace Prize Foundation. The Foundation dates from",
              "size":8667,
              "wordcount":581,
              "timestamp":"2016-01-31T14:42:18Z"
           },
           {
              "ns":0,
              "title":"Max Planck Institute for Gravitational Physics",
              "snippet":"Gravitational Physics (<span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> Institute) is a Max Planck Institute whose research is aimed at investigating <span class=\"searchmatch\">Einstein</span>’s theory of relativity and",
              "size":2681,
              "wordcount":282,
              "timestamp":"2015-06-06T20:29:07Z"
           },
           {
              "ns":0,
              "title":"Albert Einstein Memorial",
              "snippet":"The <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> Memorial is a monumental bronze statue depicting <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> seated with manuscript papers in hand by sculptor Robert Berks. It",
              "size":7619,
              "wordcount":879,
              "timestamp":"2016-02-14T16:38:42Z"
           },
           {
              "ns":0,
              "title":"Albert Einstein House",
              "snippet":"The <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> House at 112 Mercer Street in Princeton, Mercer County, New Jersey, United States was the home of <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> from 1935 until",
              "size":5872,
              "wordcount":482,
              "timestamp":"2016-02-28T10:57:02Z"
           },
           {
              "ns":0,
              "title":"Albert Einstein School",
              "snippet":"<span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> School may refer to: <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> College of Medicine, the Bronx, New York, a graduate school of Yeshiva University <span class=\"searchmatch\">Albert</span>-Einstein-Schule",
              "size":982,
              "wordcount":130,
              "timestamp":"2013-12-20T19:10:12Z"
           },
           {
              "ns":0,
              "title":"Albert Einstein World Award of Science",
              "snippet":"The <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> World Award for Science is a yearly award given by the World Cultural Council &quot;as a means of recognition, and as an incentive to scientific",
              "size":26085,
              "wordcount":1113,
              "timestamp":"2016-03-01T06:35:05Z"
           }
        ]
     }
  };

  // data format "jsonfm"
  // var data = {
  //   "batchcomplete": "",
  //   "continue": {
  //       "sroffset": 10,
  //       "continue": "-||"
  //   },
  //   "query": {
  //       "searchinfo": {
  //           "totalhits": 4407
  //       },
  //       "search": [
  //           {
  //               "ns": 0,
  //               "title": "Albert Einstein",
  //               "snippet": "&quot;<span class=\"searchmatch\">Einstein</span>&quot; redirects here. For other uses, see <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> (disambiguation) and <span class=\"searchmatch\">Einstein</span> (disambiguation). <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> (/ˈaɪnstaɪn/; German: [ˈalbɛɐ̯t",
  //               "size": 132354,
  //               "wordcount": 14285,
  //               "timestamp": "2016-03-06T09:27:50Z"
  //           },
  //           {
  //               "ns": 0,
  //               "title": "Albert Einstein Medal",
  //               "snippet": "The <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> Medal is an award presented by the <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> Society in Bern. First given in 1979, the award is presented to people for &quot;scientific",
  //               "size": 2420,
  //               "wordcount": 222,
  //               "timestamp": "2016-02-02T08:35:54Z"
  //           },
  //           {
  //               "ns": 0,
  //               "title": "List of things named after Albert Einstein",
  //               "snippet": "named after <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span>.   Bose–<span class=\"searchmatch\">Einstein</span> condensate Bose–<span class=\"searchmatch\">Einstein</span> statistics <span class=\"searchmatch\">Einstein</span>'s mass-energy relation <span class=\"searchmatch\">Einstein</span>'s constant <span class=\"searchmatch\">Einstein</span>'s radius of",
  //               "size": 6728,
  //               "wordcount": 695,
  //               "timestamp": "2015-12-29T12:19:07Z"
  //           },
  //           {
  //               "ns": 0,
  //               "title": "Albert Einstein Award",
  //               "snippet": "The <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> Award (sometimes mistakenly called the <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> Medal because it was accompanied with a gold medal) was an award in theoretical",
  //               "size": 6073,
  //               "wordcount": 560,
  //               "timestamp": "2015-09-11T03:50:27Z"
  //           },
  //           {
  //               "ns": 0,
  //               "title": "Albert Einstein Peace Prize",
  //               "snippet": "The <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> Peace Prize is/was a peace prize awarded annually since 1980 by the <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> Peace Prize Foundation. The Foundation dates from",
  //               "size": 8667,
  //               "wordcount": 581,
  //               "timestamp": "2016-01-31T14:42:18Z"
  //           },
  //           {
  //               "ns": 0,
  //               "title": "Max Planck Institute for Gravitational Physics",
  //               "snippet": "Gravitational Physics (<span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> Institute) is a Max Planck Institute whose research is aimed at investigating <span class=\"searchmatch\">Einstein</span>’s theory of relativity and",
  //               "size": 2681,
  //               "wordcount": 282,
  //               "timestamp": "2015-06-06T20:29:07Z"
  //           },
  //           {
  //               "ns": 0,
  //               "title": "Albert Einstein Memorial",
  //               "snippet": "The <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> Memorial is a monumental bronze statue depicting <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> seated with manuscript papers in hand by sculptor Robert Berks. It",
  //               "size": 7619,
  //               "wordcount": 879,
  //               "timestamp": "2016-02-14T16:38:42Z"
  //           },
  //           {
  //               "ns": 0,
  //               "title": "Albert Einstein House",
  //               "snippet": "The <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> House at 112 Mercer Street in Princeton, Mercer County, New Jersey, United States was the home of <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> from 1935 until",
  //               "size": 5872,
  //               "wordcount": 482,
  //               "timestamp": "2016-02-28T10:57:02Z"
  //           },
  //           {
  //               "ns": 0,
  //               "title": "Albert Einstein School",
  //               "snippet": "<span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> School may refer to: <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> College of Medicine, the Bronx, New York, a graduate school of Yeshiva University <span class=\"searchmatch\">Albert</span>-Einstein-Schule",
  //               "size": 982,
  //               "wordcount": 130,
  //               "timestamp": "2013-12-20T19:10:12Z"
  //           },
  //           {
  //               "ns": 0,
  //               "title": "Albert Einstein World Award of Science",
  //               "snippet": "The <span class=\"searchmatch\">Albert</span> <span class=\"searchmatch\">Einstein</span> World Award for Science is a yearly award given by the World Cultural Council &quot;as a means of recognition, and as an incentive to scientific",
  //               "size": 26085,
  //               "wordcount": 1113,
  //               "timestamp": "2016-03-01T06:35:05Z"
  //           }
  //       ]
  //   }
  // };


  var searchResults = data.query.search.length;
  console.log("search results length is: " + searchResults);

  var html = "";
  for (var i = 0; i < data.query.search.length; i++){

    var title = data.query.search[i].title;
    var snippet = data.query.search[i].snippet;


    html += "<div class='resultEntry'><p>" + "value of i: " + i +
      "<br>'title': " + title +
      "<br>'snippet': " + snippet +
      "</p></div>";

  };

  $(".resultTitle").html(html);


  // // need permissions to access to JSON, neeed to check documentation
  // // https://www.mediawiki.org/wiki/API:Main_page
  // function getEntries(url){
  //   $.getJSON(url, function(data){
  //     console.log(data);
  //     var searchResults = data.query.search.length;
  //     console.log("search results length is: " + searchResults);
  //   });
  // };
  //
  // getEntries(url);

});

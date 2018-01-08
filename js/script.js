$(document).ready(function() {
  document.getElementById("search-area").focus();
  function ajax () {

    function Result(title, snippet) {
      this.title = title;
      this.snippet = snippet;
    }

    $.ajax({
      url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + $("#search-area").val() + "&prop=info&inprop=url&utf8=&format=json",
      type: "GET",
      dataType: "JSONP",
    })

    .done(function(data) {
      var arrayResults = [];
      var html = [];
      console.log("success");
      var results = data.query.search;
      console.log(results);

      $('.results').html("");

      for (var result in results) {
        arrayResults.push(new Result(results[result].title, results[result].snippet));
        html = '<div id="articles" class="aResult"><a href="https://en.wikipedia.org/wiki/' + results[result].title + '"target="_blank"><h5><strong>' + results[result].title + '</strong></h5><p>' + results[result].snippet + '</p></a></div>';
        console.log("uhh" + html);
        $('.results').append(html);
      }
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  };
//
  function buttonClick() {
    var userinput = document.getElementById("search-area").value;
    console.log("USER INPUT = '" + userinput + "'");
    ajax(userinput);
  };
  $("#search-area").on('keyup', function (e) {
    if (e.keyCode == 13) {
      buttonClick();
    }
  });
  $("#search-button").click(function() {
    buttonClick();
  });

  function showResults() {
    for (var i = 0; i < 10; i++) {
      html.append()


    }
  };
});

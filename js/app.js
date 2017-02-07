$(document).ready(function(){

  document.getElementById("search").focus();

  $('.search-button').click(function(){
    event.preventDefault();
    console.log("inside the click handler1");
    var titleSearch = $('#search').val();
    var yearSearch = $('#year').val();
    console.log("titleSearch:   ", titleSearch);
    console.log("yearSearch:   ", yearSearch);
    var movieOptions = {
      s: titleSearch,
      y: yearSearch,
      r: "json"
    };
    var apiURL = "http://www.omdbapi.com/";

    $.getJSON(apiURL, movieOptions, function(response) {
      console.log("response1", response);
      var statusHTML = "";
      if (response.Response === "False") {
            statusHTML += "<li class='no-movies'>";
            statusHTML += "<i class='material-icons icon-help'>help_outline</i>";
            statusHTML += "No movies found that match: " + titleSearch;
            statusHTML += "</li>";
        }

      $.each(response.Search, function(index, movie){
        console.log("index    ", index);
        if(movie.Poster !== "N/A"){
            statusHTML += "<li>";
            // statusHTML += '<a href="http://www.imdb.com/title/';
            // statusHTML += movie.imdbID;
            // statusHTML += '" target="_blank>';

            statusHTML += '<div class="poster-wrap" >';
            statusHTML += '<img class="movie-poster" src="' ;
            statusHTML += movie.Poster;
            statusHTML +=  '">';
            statusHTML += '</div>';

            }

         if (movie.Poster === "N/A")
         {
          statusHTML += '<div class="poster-wrap">';
          statusHTML += '<i class="material-icons poster-placeholder">crop_original</i>';
          statusHTML += '</div>';
        }


      statusHTML += '<span class="movie-title">';
      statusHTML += movie.Title;
      statusHTML += '</span>';
      statusHTML += '<span class="movie-year">';
      statusHTML += movie.Year;
      statusHTML += '</span>';
      statusHTML += "</li>";

      var movieID = movie.imdbID;
      console.log("movieID   ",movieID);

      // var posterClick = document.getElementsByTagName("li")[0];
      //
      // console.log("posterClick   ", posterClick);
      // console.log("typeof posterClick   ", typeof posterClick);
      //
      // posterClick.addEventListener("click", function(){
      //   console.log("inside click handler");
      //   alert("Hello World!"); });

      document.querySelector('body').addEventListener('click', function(event) {

        if (event.target.tagName.toLowerCase() === 'li') {
          //event.preventDefault();
          //$('this.li');
          // do your action on your 'li' or whatever it is you're listening for
          alert("Hello World!");
          console.log("inside click handler2");

        }

        });


      //var eachObject = {};
      // $.getJSON(apiURL, {i:  movie.imdbID}, function(response2){
      //   console.log("response2", response2);
      //   console.log(response2.Poster);
      //});

      });



    $('#movies').html(statusHTML);
    });
  });
});

$(document).ready(function(){

  document.getElementById("search").focus();

  $('.search-button').click(function(){
    event.preventDefault();
    console.log("inside the click handler");
    var titleSearch = $('#search').val();
    console.log("titleSearch:   ", titleSearch);
    var movieOptions = {
      s: titleSearch,
      r: "json"
    };
    var apiURL = "http://www.omdbapi.com/";

    $.getJSON(apiURL, movieOptions, function(response) {
      console.log(response);
      var statusHTML = "";
      if (response.Response === "False") {
            statusHTML += "<li class='no-movies'>";
            statusHTML += "<i class='material-icons icon-help'>help_outline</i>";
            statusHTML += "No movies found that match: " + titleSearch;
            statusHTML += "</li>";
        }

      $.each(response.Search, function(index, movie){
        statusHTML += "<li>";
        // console.log(movie.Poster);
        // console.log(movie.Title);
        if(movie.Poster !== "N/A"){
          statusHTML += '<div class="poster-wrap">';
          statusHTML += '<img class="movie-poster" src="' ;
          statusHTML += movie.Poster;
          statusHTML +=  '">';
          statusHTML += '</div>';
        } else {
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

      });
    $('#movies').html(statusHTML);
    });
  });
});

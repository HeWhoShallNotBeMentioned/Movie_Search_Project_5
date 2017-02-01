$(document).ready(function(){

  document.getElementById("search").focus();

  $('.search-button').click(function(){
    event.preventDefault();
    console.log("inside the click handler");
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
          statusHTML += '<div id="ex1" style="display:none">';
          statusHTML +=  '<p>Thanks for clicking.  That felt good.  <a href="#" rel="modal:close">Close</a> or press ESC</p>';
          statusHTML += '</div>';
          // statusHTML += '<a href="http://www.imdb.com/title/';
          // statusHTML += movie.imdbID;
          // statusHTML += '" target="_blank>';
          statusHTML += '<a href="#ex1" rel="modal:open">';
          statusHTML += '<div class="poster-wrap" id="ex1" rel="modal:open">';
          statusHTML += '<img class="movie-poster" src="' ;
          statusHTML += movie.Poster;
          statusHTML +=  '">';
          statusHTML += '</div>';
          statusHTML += '</a>';
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

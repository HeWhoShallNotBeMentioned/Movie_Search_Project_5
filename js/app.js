$(document).ready(function(){
    $.getJSON('http://www.omdbapi.com/?', {"s": "star wars", "y": "", "r": "json"}, function(response) {
      console.log(response);
      var statusHTML = "";
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
        //statusHTML += "will this show?";
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

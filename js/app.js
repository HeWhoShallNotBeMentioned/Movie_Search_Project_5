$(document).ready(function(){
    $.getJSON('http://www.omdbapi.com/?', {"s": "potter", "y": "2016", "r": "json"}, function(response) {
      console.log(response);
      var statusHTML = "";
      $.each(response, function(index, movie){
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
        statusHTML += "</li>";

      });
    $('#movies').html(statusHTML);
  });
});

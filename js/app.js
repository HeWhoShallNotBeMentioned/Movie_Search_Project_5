
$.get('http://www.omdbapi.com/?', {"s": "star wars", "y": "1977"}, function(response) {
  console.log(response);
});

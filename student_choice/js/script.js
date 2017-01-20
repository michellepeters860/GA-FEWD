/**********************************

WELCOME TO STUDENT CHOICE!
APIs and AJAX

We will be using the following API for this class
https://www.omdbapi.com/

Task
CONGRATULATIONS! You've just been hired to make a quick and simple application by 
the company MovieMonsters Inc. They need a way for their users to submit a search 
query and be presented with movie posters that match their query. THEN upon clicking on 
the movie poster they will get more information about THAT particular movie. Now
this is definitely not a fake company. They are real. I swear?
With that in mind, we need to make sure that it looks good as well!
All design choices are in your hands. Remember that real users will use this site.
Ask yourself "is this a site I would use?" If not, make it better.


How To
1) Make it so that a user can input some text
2) Use javascript to take that text and perform a query to OMDB
3) Upon retrieving the data make it so that you can click on a movie poster to do an additional query to get more information about that movie
4) Display some additional information (director, year, rating, plot, etc...) 

***********************************/

$(document).ready(function () {
  $('#movie_form').submit(function () {
    event.preventDefault();
    var query = $("#movie_query").val();
    var request = $.ajax({
      url: "http://www.omdbapi.com/",
      method: 'GET',
      data: {s: query}
    });
    request.done(function (d) {
      var movies = d.Search;
      for (i=0; i< movies.length; i++) {
        var img= "<img class='movie_poster' imdb='"+movies[i].imdbID+"' src='"+movies[i].Poster+"'/>";
        $('#movie_list').append(img);
      }
    
    });
  });
  $(document).on('click','.movie_poster',function(){
      var imdbID = $(this).attr('imdb');

      var request = $.ajax({
          url: "http://www.omdbapi.com/",
          method: 'GET',
          data: {i: imdbID}
      });
      request.done(function(d){
          var title = d.Title;
          var year = d.Year;
          var plot = d.Plot;
          $('#movie_title').html(title);
          $('#movie_year').html(year);
          $('#movie_plot').html(plot);
      });
    
       
   });
});
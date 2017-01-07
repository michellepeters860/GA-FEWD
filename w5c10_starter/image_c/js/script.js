$(document).ready(function(){
  var images = ["http://lorempixel.com/400/200/sports/", "http://lorempixel.com/400/200/", "http://lorempixel.com/g/400/200/","http://lorempixel.com/400/200/sports/Dummy-Text/","http://lorempixel.com/400/200/sports/Dummy-Text/"];
  var current_image = 0;
  $('#next').click(function(){
    current_image = current_image + 1;
    $("#main_image").attr('src', images[current_image]);
});              
  $('#prev').click(function(){
  current_image = current_image - 1;
  $("#main_image").attr('src', images[current_image]);
  });
});

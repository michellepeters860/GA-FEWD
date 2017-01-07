$(document).ready(function() {
  $('#zero').click(function() {
    $('#result').text("0");
  });
  $('#add5').click(function(){
    var result = Number($('#result').text());
    var answer = result + 5;
    $('#result').text(answer);
  });
    $('#add10').click(function(){
    var result = Number($('#result').text());
    var answer = result + 10;
    $('#result').text(answer);
  });
    $('#sub1').click(function(){
    var result = Number($('#result').text());
    var answer = result - 1 ;
    $('#result').text(answer);
  });
});
$(document).ready(function(){
  var total = 0;
  function currencyFormat(number){
    var currency = parseFloat(number);
    currency = currency.toFixed(2);
    currency = '$' + currency;
    return currency;
  }
  $("#entry").submit(function(){
    event.preventDefault();
    var input = Number($('#newEntry').val());
    var input_in_currency = currencyFormat(input);
    $('#entries').append("<tr><td></td><td>" + input_in_currency + "</td></tr>");
    total = total + input;
    output = currencyFormat(total);
    $('#total').html(total); 
    $('#newEntry').val();
 
  });
});
$(document).ready(function(){
  $('#submit').click(function(){
    var a = Number($("#a").val());
    var b = Number($('#b').val());
    if(a>b){
      //display >
      $('#comparison').text('>');
    }
    if(a<b){
      //display <
      $('#comparison').text('<');
    }
    if(a==b){
      //display =
      $('#comparison').text('=');
    }
  });
});


      //or do this
// var out = "
   // if(a>b){
      //display >
    //  var out = ">";
    }
 //   if(a<b){
      //display <
  //    var out = "<";
    }
  //  if(a==b){
      //display =
 //     var out = "=";
    
  // $('#comparison').text(out);

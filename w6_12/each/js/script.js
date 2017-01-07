$(document).ready(function(){
	
  //1
  $("li").addClass("listy");
	$("li").each(function(){
      var liText = $(this).text();
      if (liText == "cat"){
        $(this).addClass("wrong");
      }
    });
  
  //2
  var animals = ["mongoose", "Trex", "narwhal", "wallaby"];
  animals.forEach(function(element) {
  $('#animal_holder ul').append("<li>" + element + "</li>");
  });
  
  
  //3
  $(".color_box").each(function() {
  var color= $(this).text();
  $(this).css('background-color', color);
  });
  
 
  //4
  $("#fact_list_holder li").each(function() {
    var status = $(this).attr("status");
    var fact = $(this).text();
    
    if(status == "true_fact"){

      $("#true_fact_holder").append("<li>" + fact + "</li>");
    }
    else {
      $("#false_fact_holder").append("<li>" + fact + "</li>");
    }
  });
  
  
});



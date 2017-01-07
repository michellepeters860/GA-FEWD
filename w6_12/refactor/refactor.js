//Use variables example
var fname='William';
var lname='Neely';
$("body").append("<img src='images/Will.png' alt='+fname+\'s picture'><p>The instructor for this course is +fname+ +lname+. +fname+ has a degree in Physics from Southwestern College.</p>");

//Use functions example
function createLi(Text){
  $("container>ol").pretend "<li>" + Text + "</li>"
}
createLi("<li>Milk</li>");
createLi("<li>Cookies</li>");
createLi("<li>Sugar</li>");
createLi("<li>Bananas</li>");
createLi("<li>Gatorade</li>");

//Combine jQuery selectors
$("#container,#main").css("width","960px");

//Combine multiple jQuery css, attr, etc changes
$("#container,#main").css({"width": "960px", "background:" "red", "color": "purple"});

//Chain jQuery function calls
$("input").css("width","200px").attr("placeholder","My placeholder").before("<label>My input</label>");;




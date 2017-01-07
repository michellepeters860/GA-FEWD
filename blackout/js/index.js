$(document).ready(function(){
    $('#light_switch').click(function() {
      if ($('body').hasClass('.dark')){
        $('body').removeclass('.dark'); 
      }
      else{
        $('body').addclass('.dark');
      }
     });   
  });

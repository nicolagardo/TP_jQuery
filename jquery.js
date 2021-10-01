
 
$(function(){
   /* $("p").css({"background-color":"red"});
    $("h1").css({"background-color": "red"}); */
    $("#arrastrable").draggable();
    $( "#acordeon" ).accordion();
    $( "#acordeon" ).mousedown(function() {
        console.log('clicked!')
      });


    $( "h1" ).mousedown(function() {
        console.log('clicked!')
      });
      
      $( "#clickAction" ).mousedown(function() {
        if($(this).hasClass('blue')){
            $(this).removeClass('blue');
        }else{
          $(this).addClass('blue');
        }

    });
});
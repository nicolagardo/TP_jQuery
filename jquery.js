
 
$(function(){
   /* $("p").css({"background-color":"red"});
    $("h1").css({"background-color": "red"}); */
    $("#arrastrable").draggable();

    $( "#acordeon" ).accordion();

    $("#arrastrable").mousedown(function() {
        console.log('clicked!')
    });


    $("#clickAction").mousedown(function() {
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
$(document).ready(function(){ 
    num=0;
    $("#capa1").html('<p>0 clicks</p>');
    $("#boton1").click(function(){
       num++;
       $("#capa1").html('<p>'+num+'</p>');
    });
 });
 
$(function(){
    
        $("#dropzone").droppable({
            drop: function(event, ui) {
                $(this).css('background', 'rgb(0,200,0)');
            },
            over: function(event, ui) {
                $(this).css('background', 'orange');
            },
            out: function(event, ui) {
                $(this).css('background', 'cyan');
            }
        });

    $("#c1").click(function() {
        $("#effect").effect("explode",2000).effect("drop",2000).effect("clip",2000).effect("puff",2000).effect("blind",2000).effect("fold",2000).effect("highlight",2000).effect("pulsate",2000).effect("scale",2000).effect("fade",2000);
        });
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
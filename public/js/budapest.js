
var question1 = function(){
	answer = $("#answer")[0].value.toLowerCase().toString();
	confirmation = "estonia"
	if (answer === confirmation ) { 
		alert("Correcto!")
		window.location.href = "http://www.alexandrazinovyeva.com/movies";

	} else {
		alert("Try Again")
	}
}

$('#submit').click(question1)

$(document).ready(function() {
  $('#col1').fadeIn( 2000, function() {
      $('#col2').fadeIn( 4000, function() {
        $('#col3').fadeIn( 4000, function() {
          $('#col4').fadeIn( 4000, function() {
          });
        });
      });
  });
});


$(function() {
    $("#modal-image")
        .mouseover(function() { 
            $(this).attr("src", "images/r1.jpg");
        })
        .mouseout(function() {
            $(this).attr("src", "images/r2.jpg");
        });
});

var question1 = function(){
	answer = $("#answer")[0].value.toLowerCase().toString();
	confirmation = "dracula"
	if (answer === confirmation ) { 
		alert("Correcto!")
		window.location.href = "http://www.alexandrazinovyeva.com/budapest";

	} else {
		alert("Try Again")
	}
}

$('#submit').click(question1)

$('.mini-window').mouseover(function() { 
            $(this).children('img').show().fadeOut(1000);
            $('#main-button').fadeIn(9000)
        })

var question1 = function(){
	answer = $("#answer")[0].value.toLowerCase().toString();
	confirmation = "dracula"
	if (answer === confirmation ) { 
		alert("Correcto!")
		window.location.href = "http://localhost:9292/budapest";

	} else {
		alert("Try Again")
	}
}

$('#submit').click(question1)
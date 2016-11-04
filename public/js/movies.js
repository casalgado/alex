
// questions

var question1 = function(){
	answer = $("#answer")[0].value.toLowerCase().toString();
	confirmation = "eckhart"
	if (answer === confirmation ) { 
		alert("Correcto!")
		window.location.href = "http://www.alexandrazinovyeva.com/china";

	} else {
		alert("Try Again")
	}
}
$('#submit').click(question1)

// images hover

$(function() {
    $("#modal-image")
        .mouseover(function() { 
            $(this).attr("src", "images/n1.jpg");
        })
        .mouseout(function() {
            $(this).attr("src", "images/n2.jpg");
        })
        .click(function() {
            $(this).attr("src", "images/n3.jpg");
        });
});




var s = Snap("#snap-space")

t1 =s.text(630, 70, "+").attr({
 	font: "helvetica",
	"font-size": "30px",
 	"font-weight": "bold"
})
t2 =s.circle(640, 100, 20)
t3 =s.circle(640, 100, 16).attr({fill: "white"})
t4 =s.rect(637, 90, 3, 14)
t5 =s.rect(637, 101, 12, 3)

var time = s.g(t1, t2, t3, t4, t5);

time.attr("fill", "white")



var button = s.text(615, 150, "TIME").attr({
 	font: "helvetica",
	"font-size": "20px",
 	"font-weight": "bold",
 	fill: "white"
})

var you = s.circle(310, 420, 20).attr({
    fill: "cyan",
    "fill-opacity": 0.6,
    cursor: "pointer"
});

var me = s.circle(970, 420, 1).attr({
    fill: "yellow",
    "fill-opacity": 0.6,
    cursor: "pointer"
});

s.text(282, 150, "YOU").attr({
	font: "helvetica",
	"font-size": "25px",
	"font-weight": "bold",
	fill: "gray"
})

var metxt = s.text(950, 150, "ME").attr({
 	font: "helvetica",
	"font-size": "25px",
 	"font-weight": "bold",
 	fill: "white"
})

var eq =s.text(630, 350, "=").attr({
 	font: "helvetica",
	"font-size": "60px",
 	"font-weight": "bold",
 	fill: "white"
})

var us = s.text(580, 440, "US").attr({
 	font: "helvetica",
	"font-size": "100px",
 	"font-weight": "bold",
 	fill: "white"
})

you.click(function() {
	you.animate({r: 250}, 500, mina.bounce, function(){
		me.animate({r: 20}, 500)
		metxt.animate({"fill": "gray"}, 500)
	 });
	this.attr("cursor", "default")
})

me.click(function() {
	 me.animate({r: 250}, 500, mina.bounce, function(){
		time.animate({fill: "gray"}, 1000, mina.easein, function(){
			you.animate({transform: "translate(300,0)"}, 6000);
			me.animate({transform: "translate(-300,0)"}, 6000, function(){
				$("#main-button").fadeIn(2000);
			});
		})
	 });
	 this.attr("cursor", "default")
})

time.click(function() {
	you.animate({transform: "translate(300,0)"}, 2000);
	me.animate({transform: "translate(-300,0)"}, 2000);
	// us.animate({"fill": "gray"}, 3000)
})




// end positions  610 - 670. end radius 250


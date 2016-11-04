

$('.hover-box').mouseover(function() {
	var target = $(this).data("target")
	$('.column').fadeOut(1000)
	$(target).fadeIn(4000)

})


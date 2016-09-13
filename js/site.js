// Smoothly scroll to top of element

function scrollTo(id) {
	$( "html, body" ).animate({
		scrollTop: $(id).offset().top
	}, 800);
}

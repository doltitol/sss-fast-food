'use strict';

//slideshow
$('#slideshow > div:gt(0)').hide();

setInterval(function () {
	$('#slideshow > div:first').fadeOut(500).next().fadeIn(1000).end().appendTo('#slideshow');
}, 3000);
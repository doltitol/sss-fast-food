'use strict';

window.onscroll = function () {
	onScroll();
};

var header = document.getElementById('header');
var tops = header.offsetTop;

function onScroll() {
	if (window.pageYOffset >= tops) {
		header.classList.add('fixHeader');
	} else {
		header.classList.remove('fixHeader');
	}
}
//responsive dropdown Nav

$('.icon').click(function () {
	$('#dropNav').toggle();
});
// Close the dropdown if the user clicks outside of it
$('.badge1').click(function () {
	$('#dropCart').toggle();
});
'use strict';

//menu tabs
var adminView = function adminView(evt, cat) {
	var i = void 0,
	    tabcontent = void 0,
	    tablinks = void 0;
	tabcontent = document.getElementsByClassName('tabcontent');
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none';
	}
	tablinks = document.getElementsByClassName('tablinks');
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(' active', '');
	}
	document.getElementById(cat).style.display = 'block';
	evt.currentTarget.className += ' active';
};

var miniView = function miniView(evt, subcat) {
	var i = void 0,
	    subtab = void 0,
	    sublink = void 0;
	subtab = document.getElementsByClassName('subtab');
	for (i = 0; i < subtab.length; i++) {
		subtab[i].style.display = 'none';
	}
	sublink = document.getElementsByClassName('sublink');
	for (i = 0; i < sublink.length; i++) {
		sublink[i].className = sublink[i].className.replace(' active', '');
	}
	document.getElementById(subcat).style.display = 'block';
	evt.currentTarget.className += ' active';
};
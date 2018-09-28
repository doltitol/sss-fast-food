'use strict';

//menu tabs
var menuView = function menuView(evt, cat)	{
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
$(document).ready(function () {

	//Display all menu items at default
	var items = menu;
	var data = '';
	for (var i = 0; i < items.length; i++) {
		data = data + '<div class="menu1"><div class="menuImg">' + ' <img class="foodImg" src="img/' + items[i].foodImg + '"/></div>' + '<div class="menuName"><p>' + items[i].foodname + '</p></div>' + '<div class="menuPrice"><p>' + items[i].foodPrice + ' NGN</p></div>' + '<div>' + '<input class="add-to-cart" type="button" value="Add To Cart" data-name="' + items[i].foodname + '"data-img="' + items[i].foodImg + '" data-price="' + items[i].foodPrice + '" data-quantity="1" class="btn btnCart"></div></div>';
	}
	var div_element = document.createElement('div');
	div_element.innerHTML = data;
	document.getElementById('container1').appendChild(div_element);

	//display salads category on click on All button
	$('.salads').click(function () {
		$('#container2').empty();
		var items = menu;
		var data = '';
		for (var _i = 0; _i < items.length; _i++) {
			if (items[_i].foodCat === 'SALADS') {
				data = data + '<div class="menu1"><div class="menuImg">' + ' <img class="foodImg" src="img/' + items[_i].foodImg + '"/></div>' + '<div class="menuName"><p>' + items[_i].foodname + '</p></div>' + '<div class="menuPrice"><p>' + items[_i].foodPrice + ' NGN</p></div>' + '<div>' + '<input class="add-to-cart" type="button" value="Add To Cart" data-name="' + items[_i].foodname + '"data-img="' + items[_i].foodImg + '" data-price="' + items[_i].foodPrice + '" data-quantity="1" class="btn btnCart"></div></div>';
			}
		}
		var div_element = document.createElement('div');
		div_element.innerHTML = data;
		document.getElementById('container2').appendChild(div_element);
	});
	//display sandwiches category on click on All button
	$('.sandwiches').click(function () {
		$('#container3').empty();
		var items = menu;
		var data = '';
		for (var _i2 = 0; _i2 < items.length; _i2++) {
			if (items[_i2].foodCat === 'SANDWICHES') {
				data = data + '<div class="menu1"><div class="menuImg">' + ' <img class="foodImg" src="img/' + items[_i2].foodImg + '"/></div>' + '<div class="menuName"><p>' + items[_i2].foodname + '</p></div>' + '<div class="menuPrice"><p>' + items[_i2].foodPrice + ' NGN</p></div>' + '<div>' + '<input class="add-to-cart" type="button" value="Add To Cart" data-name="' + items[_i2].foodname + '"data-img="' + items[_i2].foodImg + '" data-price="' + items[_i2].foodPrice + '" data-quantity="1" class="btn btnCart"></div></div>';
			}
		}
		var div_element = document.createElement('div');
		div_element.innerHTML = data;
		document.getElementById('container3').appendChild(div_element);
	});
	//display smoothies category on click on All button
	$('.smoothies').click(function () {
		$('#container4').empty();
		var items = menu;
		var data = '';
		for (var _i3 = 0; _i3 < items.length; _i3++) {
			if (items[_i3].foodCat === 'SMOOTHIES') {
				data = data + '<div class="menu1"><div class="menuImg">' + ' <img class="foodImg" src="img/' + items[_i3].foodImg + '"/></div>' + '<div class="menuName"><p>' + items[_i3].foodname + '</p></div>' + '<div class="menuPrice"><p>' + items[_i3].foodPrice + ' NGN</p></div>' + '<div>' + '<input class="add-to-cart" type="button" value="Add To Cart" data-name="' + items[_i3].foodname + '"data-img="' + items[_i3].foodImg + '" data-price="' + items[_i3].foodPrice + '" data-quantity="1" class="btn btnCart"></div></div>';
			}
		}
		var div_element = document.createElement('div');
		div_element.innerHTML = data;
		document.getElementById('container4').appendChild(div_element);
	});
});

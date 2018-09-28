'use strict';

var sssCart = ( function() {
	var cart = [];
	function FoodItem(name, price, qty, image) {
		this.name = name;
		this.price = price;
		this.qty = qty;
		this.image = image;
	}
	var foodObj = {};
	foodObj.addFoodToCart = function (name, price, qty, image) {
		//to add food items to cart
		//iterate through items in cart to see if item exists
		for(var i in cart) {
			if(cart[i].name === name) {
				cart[i].qty += qty;
				saveCart();
				return;
			}
		}
		var foodItem = new FoodItem(name, price, qty, image);
		var x = [];
		x.push(foodItem);
		cart.push.apply(cart, x);
		//cart.push(x);

		saveCart();
	};
	foodObj.setFoodItemCount = function(name, qty) {
		for (var i in cart) {
			if (cart[i].name === name) {
				cart[i].qty = qty;
				if (qty === 0) {
					this.removeFoodItemsFromCart(name);
				}
				break;
			}
		}
		saveCart();
	};
	foodObj.removeFoodItemFromCart = function(name) {
		for (var i in cart) {
			if (cart[i].name === name) {
				cart[i].qty--;
				if (cart[i].qty === 0) {
					cart.splice(i, 1);
				}
				break;
			}
		}
		saveCart();
	};
	foodObj.removeFoodItemsFromCart = function(name) {
		for (var i in cart) {
			if (cart[i].name === name) {
				cart.splice(i, 1);
				break;
			}
		}
		saveCart();
	};
	foodObj.clearCart = function() {
		cart = [];
		saveCart();
	};
	foodObj.cartCount = function() {
		var tCount = 0;
		for (var i in cart) {
			tCount += cart[i].qty;
		}
		return tCount;
	};
	foodObj.cartTotalCost = function() {
		var costTotal = 0;
		for (var i in cart) {
			costTotal += cart[i].price * cart[i].qty;
		}
		return costTotal.toFixed(2);
	};
	foodObj.foodList = function() {
		var cartTemp = [];
		for (var i in cart) {
			var foodItem = cart[i];
			var foodItemTemp = {};
			for (var j in foodItem) {
				foodItemTemp[j] = foodItem[j];
			}
			foodItemTemp.subTotal = (foodItem.price * foodItem.qty).toFixed(2);
			cartTemp.push(foodItemTemp);
		}
		return cartTemp;
	};
	function saveCart() {
		localStorage.setItem('sssCart', JSON.stringify(cart));
	}
	foodObj.loadCart = function() {
		cart = JSON.parse(localStorage.getItem('sssCart'));
	};
	foodObj.loadCart();
	return foodObj;
})();

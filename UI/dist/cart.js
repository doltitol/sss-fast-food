'use strict';

$('.container').on('click', '.add-to-cart', function() {
	var name = $(this).attr('data-name');
	var price = Number($(this).attr('data-price'));
	var qty = Number($(this).attr('data-quantity'));
	var image = $(this).attr('data-img');
	sssCart.addFoodToCart(name, price, qty, image);
	showCart();
});
function showCart() {
	var sssCartArr = sssCart.foodList();
	var result = '';
	for (var i in sssCartArr) {
		result += '<tr><td class="item-thumbnail">' + '<a href="menu.html"><img src="img/' + sssCartArr[i].image + '" alt=""></a>' + '</td><td class="product-name"><a href="menu.html">' + sssCartArr[i].name + '</a></td>' + '<td class="product-price-cart"><span class="amount">' + sssCartArr[i].price + ' NGN</span></td>' + '<td class="product-quantity"><input class="item-qty" type="number" value="' + sssCartArr[i].qty + '" data-name="' + sssCartArr[i].name + '"></td>' + '<td class="product-subtotal">' + sssCartArr[i].subTotal + '</td>' + '<td class="item-remove"><img class="delete-item" src="img/delete.png" data-name="' + sssCartArr[i].name + '"/></td>' + '</tr>';
	}
	$('#tBodyCart').html(result);
	$('#cart-count').html(sssCart.cartCount());
	$('.badge1').attr('data-badge', sssCart.cartCount());
	$('#cart-total').html(sssCart.cartTotalCost());
}
$('.badge1').click(function() {
	showCart();
});
$('#clear-cart').click(function() {
	sssCart.clearCart();
	showCart();
});
$('#tBodyCart').on('click', '.delete-item', function() {
	var name = $(this).attr('data-name');
	sssCart.removeFoodItemsFromCart(name);
	showCart();
});
$('#tBodyCart').on('change', '.item-qty', function() {
	var name = $(this).attr('data-name');
	var qty = Number($(this).val());
	sssCart.setFoodItemCount(name, qty);
	showCart();
});

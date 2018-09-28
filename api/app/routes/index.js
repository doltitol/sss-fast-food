const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const orders = require('../models/orders');
const menu = require('../models/menu');
const users = require('../models/users');

let orderId = 2;

let userId = 1;
let menuId = 1;

//GET ALL ORDERS
app.get('/v1/orders', (req, res) => {
	res.status(200).send({orders: orders});
});

//GET ALL MENU
app.get('/v1/menu', (req, res) => {
	res.status(200).send({menu: menu});
});

//GET ALL USERS
app.get('/v1/users', (req, res) => {
	res.status(200).send({users: users});
});

//GET ORDER BY ID
app.get('/v1/orders/:id', (req, res) => {
	let id = req.params.id;
	let found = false;
	let val = orders[id-1];
	if (!found) {
		res.status(200).send({orders: val});
	}else {
		res.status(404).send({message: 'Order ID cannot be found'});
	}
});

//GET MENU BY ID
app.get('/v1/Menu/:id', (req, res) => {
	let id = req.params.id;
	let found = false;
	let val = menu[id-1];
	if (!found) {
		res.status(200).send({menu: val});
	}else {
		res.status(404).send({message:'Menu ID cannot be found'});
	}
});

//GET USERS BY ID
app.get('/v1/users/:id', (req, res) => {
	let id = req.params.id;
	let found = false;
	let val = users[id-1];
	if (!found) {
		res.status(200).send({users: val});
	}else {
		res.status(404).send({message:'User ID cannot be found'});
	}
});

//POST AN ORDER
app.post('/v1/orders', (req, res) => {
	let orderUsername = req.body.username;
	let orderEmail = req.body.email;
	let orderPhone = req.body.phone;
	let orderDesc = req.body.orderdesc;
	let orderPrice = req.body.totalPrice;
	let orderDate = Date();
	let orderStatus = req.body.status;
	orderId++;

	orders.push({
		id:orderId,
		username: orderUsername,
		email: orderEmail,
		phone: orderPhone,
		orderdesc: orderDesc,
		totalPrice: orderPrice,
		date: orderDate,
		status: orderStatus
	});
	res.status(200).send({message:'Successfully created Order'});
});

//POST A MENU
app.post('/v1/Menu', (req, res) => {
	let menuFoodname = req.body.foodname;
	let menuFoodimg = req.body.foodImg;
	let menuFoodprice = req.body.foodPrice;
	let menuFoodcat = req.body.foodCat;
	menuId++;

	menu.push({
		id:menuId,
		foodname: menuFoodname,
		foodImg: menuFoodimg,
		foodPrice: menuFoodprice,
		foodCat: menuFoodcat
	});
	res.status(200).send({message:'Successfully created Food'});
});

//POST A USER
app.post('/v1/users', (req, res) => {
	let usersFullname = req.body.fullname;
	let usersUsername = req.body.username;
	let usersEmail1 = req.body.email1;
	let usersPhonenum = req.body.phonenum;
	let usersAddress1 = req.body.address1;
	let usersAddress2 = req.body.address2;
	let usersCity = req.body.city;
	let usersPostcode = req.body.postcode;
	let usersState = req.body.state;
	let usersCountry = req.body.country;
	let usersUsercat = req.body.usercat;
	userId++;

	users.push({
		id:userId,
		fullname: usersFullname,
		username: usersUsername,
		email1: usersEmail1,
		phonenum: usersPhonenum,
		address1: usersAddress1,
		address2: usersAddress2,
		city: usersCity,
		postcode: usersPostcode,
		state: usersState,
		country: usersCountry,
		usercat: usersUsercat
	});
	res.status(200).send({message:'Successfully created User'});
});


//UPDATE AN ORDER
app.put('/v1/orders/:id', (req, res) => {
	let id = req.params.id;
	let newUsername = req.body.username;
	let newEmail = req.body.email;
	let newPhone = req.body.phone;
	let newDesc = req.body.desc;
	let newPrice = req.body.price;
	let newStatus = req.body.status;
	let found = false;

	orders.forEach( (order) =>{
		if (!found && order.id === Number(id)) {
			order.username = newUsername;
			order.email = newEmail;
			order.phone = newPhone;
			order.orderdesc = newDesc;
			order.totalPrice = newPrice;
			order.status = newStatus;
		}
	});

	res.status(201).send({message: 'Successfully updated order!'});
});

//UPDATE A MENU
app.put('/v1/Menu/:id', (req, res) => {
	let id = req.params.id;
	let newFoodname = req.body.foodname;
	let newFoodimg = req.body.foodImg;
	let newFoodprice = req.body.foodPrice;
	let newFoodcat = req.body.foodCat;

	let found = false;

	menu.forEach((food) => {
		if (!found && food.id === Number(id)) {
			food.foodname = newFoodname;
			food.foodImg = newFoodimg;
			food.foodPrice = newFoodprice;
			food.foodCat = newFoodcat;
		}
	});

	res.status(201).send({message:'Successfully updated Food!'});
});

//UPDATE A USER
app.put('/v1/users/:id', (req, res) => {
	let id = req.params.id;
	let newFullname = req.body.fullname;
	let newUsername = req.body.username;
	let newEmail1 = req.body.email1;
	let newPhonenum = req.body.phonenum;
	let newAddress1 = req.body.address1;
	let newAddress2 = req.body.address2;
	let newCity = req.body.city;
	let newPostcode = req.body.postcode;
	let newState = req.body.state;
	let newCountry = req.body.country;
	let newUsercat = req.body.usercat;
	let found = false;

	users.forEach( (user) =>{
		if (!found && user.id === Number(id)) {
			user.fullname = newFullname;
			user.username = newUsername;
			user.email1 = newEmail1;
			user.phonenum = newPhonenum;
			user.address1 = newAddress1;
			user.address2 = newAddress2;
			user.city = newCity;
			user.postcode = newPostcode;
			user.state = newState;
			user.country = newCountry;
			user.usercat = newUsercat;
		}
	});

	res.status(201).send({message:'Successfully updated user!'});
});

//DELETE AN ORDER
app.delete('/v1/orders/:id', (req,res) => {
	let id = req.params.id;
	let found = false;

	orders.forEach( (order, index) => {
		if (!found && order.id === Number(id)) {
			orders.splice(index, 1);
		}
	});

	res.status(204).send({message:'Successfully deleted order!'});
});


//DELETE A MENU
app.delete('/v1/Menu/:id', (req,res) => {
	let id = req.params.id;
	let found = false;

	menu.forEach( (food, index) => {
		if (!found && food.id === Number(id)) {
			menu.splice(index, 1);
		}
	});

	res.status(204).send({message: 'Successfully deleted Food!'});
});

//DELETE A USER
app.delete('/v1/users/:id', (req,res) => {
	let id = req.params.id;
	let found = false;

	users.forEach( (user, index) => {
		if (!found && user.id === Number(id)) {
			users.splice(index, 1);
		}
	});

	res.status(204).send({message:'Successfully deleted User!'});
});




module.exports = app;

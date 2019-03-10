// global variables
var noOfProductsInCart = 0;
var cartItems = [];
var i;
var j;
// objects
function Product(id, name, type, originalPrice, discountedPrice, imagePath){
	this.productId = id;
	this.productName = name;
	this.productType = type;
	this.originalPrice = originalPrice;
	this.discountedPrice = discountedPrice;
	this.imagePath = imagePath;
	this.isInCart = false;
	this.addItemToCart = function() {
		this.isInCart = true;
	}
}

// mobiles
var mobile1 = new Product(1,"Apple iPhone X", "Mobile", 59999, 49999, "images/mobiles/iphone.jpg");
var mobile2 = new Product(2,"Honor 7C", "Mobile", 8499, 8499 , "images/mobiles/honor_7c.jpg");
var mobile3 = new Product(3,"Lenovo K8 Note", "Mobile", 8548, 8548 , "images/mobiles/lenovo-k8-note-64gb-black-4gb-ram-.jpg");
var mobile4 = new Product(4,"Redmi Note 6 Pro", "Mobile", 10999, 10999 , "images/mobiles/redmi note 6 pro.jpg");
var mobile5 = new Product(5,"Redmi Note 7 Pro", "Mobile", 12999, 12999 , "images/mobiles/redmi_note_7_pro.jpg");
var mobile6 = new Product(6,"Samsung Galaxy M10", "Mobile", 8990, 8990 , "images/mobiles/Samsung-Galaxy-M10.jpg");
var mobile7 = new Product(7,"Samsung Galaxy M20", "Mobile", 11990, 11990 , "images/mobiles/Samsung-Galaxy-M20.jpg");


// dresses
var dress1 = new Product(8, "Dress 1", "Dress", 4000, 4000, "images/dresses/dress1.jpg");
var dress2 = new Product(9, "Dress 2", "Dress", 1200, 1200, "images/dresses/dress2.jpg");
var dress3 = new Product(10, "Dress 3", "Dress", 1400, 1400, "images/dresses/dress3.jpg");
var dress4 = new Product(11, "Dress 4", "Dress", 900, 900, "images/dresses/dress4.jpg");
var dress5 = new Product(12, "Dress 5", "Dress", 1600, 1600, "images/dresses/dress5.jpg");
var dress6 = new Product(13, "Dress 6", "Dress", 600, 600, "images/dresses/dress6.jpg");
var dress7 = new Product(14, "Dress 7", "Dress", 600, 600, "images/dresses/dress7.jpg");
var dress8 = new Product(15, "Dress 8", "Dress", 700, 700, "images/dresses/dress8.jpg");
var dress9 = new Product(16, "Dress 9", "Dress", 500, 500, "images/dresses/dress9.jpg");
var dress10 = new Product(17, "Dress 10", "Dress", 750, 750, "images/dresses/dress10.jpg");

// products
allProducts = 	[
					mobile1, mobile2, mobile3, mobile4, mobile5, mobile6, mobile7,
					dress1, dress2, dress3, dress4, dress5, dress6, dress7, dress8, dress9, dress10
				];

function openHome(){
	// function to open homepage whenever clicked on 'myHeader'
	window.location = 'home.html';
}

function addToCart(product){
	for(var i=0; i < allProducts.length; i++){
		if(product.productName === allProducts[i].productName){
			if(allProducts[i].isInCart === true){
				console.log(allProducts[i].productName + ' : already in cart');
			}
			else{
				allProducts[i].addItemToCart() ;
				console.log(allProducts[i].productName + ' : add to cart');
				noOfProductsInCart += 1;
				cartItems.push(allProducts[i].productId);
				updateCart();
			}
		}
	}
	console.log('No of products in the cart: ' + noOfProductsInCart);	
	
}

// var varname = document.getElementById("myimage").value;
// document.getElementById("myimage").src = mobile1.imagePath;
function removeFromCart() {
	var id = cartItems[j];
	console.log('removeFromCart() is called for item id ' + id);
	var index = cartItems.indexOf(id);
	if(index == -1){
		cartItems.shift();
	}
	else{
		cartItems = cartItems.splice(index,1);
	}
	noOfProductsInCart -= 1;
	updateCart();
	location.reload();

}
function updateCart(){
	console.log('updateCart() is called');
	sessionStorage.setItem("itemCount", noOfProductsInCart);
	sessionStorage.setItem("itemsInCart", cartItems) ;
}
function initCart(){
	console.log('initCart called');
	noOfProductsInCart = parseInt(sessionStorage.getItem("itemCount"));
	if(isNaN(noOfProductsInCart)){
		console.log('here');
		noOfProductsInCart = 0;
	}
	var temp = sessionStorage.getItem("itemsInCart");
	if(temp != null){
		for(var k=0; k<temp.length; k+=2){
			cartItems.push(temp[k]);
		}
	}
	console.log('No of products in the cart: ' + noOfProductsInCart);	
	console.log('Products in the cart: ' + cartItems);	
	updateCart();
}

function printCart(){
	console.log('printCart() is called');


	console.log('No of products in the cart: ' + noOfProductsInCart);	
	console.log('Products in the cart: ' + cartItems);	
	
	var table = document.getElementById("item_table");
	var total = 0; 
	var count = 0;
	for (i = 0; i < allProducts.length; i++) {
		for(j=0; j<cartItems.length; j++){
			if(allProducts[i].productId == cartItems[j]){
				console.log(allProducts[i].productName + ' is in the cart');

				var row = table.insertRow(count);
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				var cell3 = row.insertCell(2);
				var cell4 = row.insertCell(3);
				
				cell1.innerHTML = allProducts[i].productName;
				cell2.innerHTML = allProducts[i].originalPrice;
				cell3.innerHTML = allProducts[i].discountedPrice;

				var button = document.createElement("input");
				button.setAttribute('type', 'button');
				button.setAttribute('value', 'Remove From Cart');
				button.setAttribute('onclick', 'removeFromCart()');


				cell4.appendChild(button);

				total += allProducts[i].discountedPrice;

				count += 1;
			}
			
		}
	}
	if(noOfProductsInCart > 0){
		var row = table.insertRow(count);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);

		cell1.innerHTML = "Total";
		cell3.innerHTML = total;

		var row = table.insertRow(0);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);

		cell1.innerHTML = "Product Name";
		cell2.innerHTML = "Original Price";
		cell3.innerHTML = "Discounted Price";


	}
	
	
}


function validateForm(){
	
	// validate name
	var val = document.forms["myform"]["name"].value;
	if (val == "") {
		alert("Name must be filled out");
		return false;
	}
	// validate mobile number
	val = document.forms["myform"]["mobile_number"].value;
	console.log('mobile '+ val);
	if (val == "") {
		alert("Mobile Number must be filled out");
		return false;
	}
	if(val.length != 10){
		alert('Mobile no must be of length 10');
		return false;
	}
	// validate pincode
	val = document.forms["myform"]["pincode"].value;
	if(val.length != 6){
		alert('PIN Code must be of length 6');
		return false;
	}

	//
}

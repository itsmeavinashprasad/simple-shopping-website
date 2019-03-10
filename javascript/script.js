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

// bags
var bag1 = new Product(26, "Bag 1", "Bag", 4000, 4000, "images/bags/bag1.jpg");
var bag2 = new Product(27, "Bag 2", "Bag", 4000, 4000, "images/bags/bag2.jpg");
var bag3 = new Product(28, "Bag 3", "Bag", 4000, 4000, "images/bags/bag3.jpg");
var bag4 = new Product(29, "Bag 4", "Bag", 4000, 4000, "images/bags/bag4.jpg");
var bag5 = new Product(30, "Bag 5", "Bag", 4000, 4000, "images/bags/bag5.jpg");
var bag6 = new Product(31, "Bag 6", "Bag", 4000, 4000, "images/bags/bag6.jpg");
var bag7 = new Product(32, "Bag 7", "Bag", 4000, 4000, "images/bags/bag7.jpg");
var bag8 = new Product(33, "Bag 8", "Bag", 4000, 4000, "images/bags/bag8.jpg");

// shoes
var shoe1 = new Product(19, "Shoe 1", "Shoe", 4000, 4000, "images/shoes/shoe1.jpg");
var shoe2 = new Product(20, "Shoe 2", "Shoe", 4000, 4000, "images/shoes/shoe2.jpg");
var shoe3 = new Product(21, "Shoe 3", "Shoe", 4000, 4000, "images/shoes/shoe3.jpg");
var shoe4 = new Product(22, "Shoe 4", "Shoe", 4000, 4000, "images/shoes/shoe4.jpg");
var shoe5 = new Product(23, "Shoe 5", "Shoe", 4000, 4000, "images/shoes/shoe5.jpg");
var shoe6 = new Product(24, "Shoe 6", "Shoe", 4000, 4000, "images/shoes/shoe6.jpg");
var shoe7 = new Product(25, "Shoe 7", "Shoe", 4000, 4000, "images/shoes/shoe7.jpg");

// products
allProducts = 	[
					mobile1, mobile2, mobile3, mobile4, mobile5, mobile6, mobile7,
					dress1, dress2, dress3, dress4, dress5, dress6, dress7, dress8, dress9, dress10,
					bag1, bag2, bag3, bag4, bag5, bag6, bag7, bag8
				];

function openHome(){
	// function to open homepage whenever clicked on 'myHeader'
	window.location = 'home.html';
}

function addToCart(product){

	for(i=0; i<cartItems.length; i++){
		if(product.productId == cartItems[i]){
			// true if item is already present in the cart
			console.log(allProducts[i].productName + ' : already in cart');
			return ;
		}
	}
	// for(i=0; i < allProducts.length; i++){
	// 	for(j=0; j<cartItems.length; j++){
	// 		if(allProducts[i].productId == cartItems[j]){
	// 			
	// 		}
	// 	}
	// }
	
	console.log(product.productName + ' : add to cart');
	noOfProductsInCart += 1;
	cartItems.push(product.productId);
	updateCart();
	return;
}

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
	console.log('No of products in the cart: ' + noOfProductsInCart);	
	console.log('Products in the cart: ' + cartItems);
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
		temp = temp.split(",");
		for(var k=0; k<temp.length; k++){
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

	//validate username in email
	val = document.forms["myform"]["email"].value;
	let username = val.substring(0, val.indexOf("@"));
	if(username.length <5 ){
		alert('Username is less that length 5');
		return false;
	}

	// validate card no
	val = document.forms["myform"]["card_no"].value;
	if(val.length != 16){
		alert("Card No is less than 16 digits");
		return false;
	}

	// date validation
	val = document.forms["myform"]["exp_date"].value;
	let date = val.split("-") ;
	let entered = parseInt(date[0]+date[1]+date[2]);
	let today = new Date();
	let current = today.getFullYear().toString() ;
	let mm = today.getMonth()+1;
	if(mm < 10 )
		current += '0' + mm;
	else
		current += mm.toString();
	
	if(today.getDate() < 10 )
		current += '0' + today.getDate();
	else
		current += today.getDate().toString();

	current = parseInt(current);
	if( current > entered ){
		alert('Sorry! Your Card has expired.');
		return false;
	}

}


// objects
function Product(name, type, originalPrice, discountedPrice, imagePath){
	this.productName = name;
	this.productType = type;
	this.originalPrice = originalPrice;
	this.discountedPrice = discountedPrice;
	this.imagePath = imagePath;

	this.getImagePath = function() {
		return this.imagePath;
	}
}

// mobiles
var mobile1 = new Product("Apple iPhone X", "Mobile", 59999, 49999, "images/mobiles/iphone.jpg")


function openHome(){
	// function to open homepage whenever clicked on 'myHeader'
	window.location = 'home.html';
}
document.write(mobile1.productName);
document.getElementById("demo").innerHTML = mobile1.imagePath;
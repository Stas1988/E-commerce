function Suit (name, size, instock, price, image) {
	this.name = name
	this.size = size
	this.instock = instock
	this.price = price
	this.image = image
}

var suit0 = new Suit("Boss Huge/Genius", "M", 100, "$800.00", "img/suit1.jpg")
var suit1 = new Suit("Hart Shaffner Marx", "L", 25, "$669.00", "img/suit2.jpg")
var suit2 = new Suit("Boss Johnston/Lenon", "XL", 0, "$895.00", "img/suit3.jpg")
var suit3 = new Suit("Burberry London", "S", 10, "$1500.00", "img/suit4.jpg")
var suit4 = new Suit("Ted Baker London Jay", "L", 250, "$10.00", "img/suit5.jpg")
var suit5 = new Suit("Boss Rocco/Wyatt", "M", 15, "$1000.00", "img/suit6.jpg")

var suitArray =[]

suitArray.push(suit0)
suitArray.push(suit1)
suitArray.push(suit2)
suitArray.push(suit3)
suitArray.push(suit4)
suitArray.push(suit5)

for (i = 0; i < suitArray.length; i++) {
	var suitName = document.createTextNode(suitArray[i].name)
	var suitSize = document.createTextNode("Sizes: " + suitArray[i].size)
	var suitAvailable = document.createTextNode("Available: " + suitArray[i].instock)
	var suitPrice = document.createTextNode(suitArray[i].price)
	var suitBtn = document.createTextNode("Buy Now")
	var suitImage = suitArray[i].image

	var clothes = document.getElementById("clothes")


	var topDiv = document.createElement('div')
	var newDiv = document.createElement('div')
	var headName = document.createElement('h4')
	var headSize = document.createElement('h3')
	var headAvailable = document.createElement('h3')
	var headPrice = document.createElement('h3')
	var headImg = document.createElement('img')
	var button = document.createElement('button') 

	headName.appendChild(suitName)
	headSize.appendChild(suitSize)
	headAvailable.appendChild(suitAvailable)
	headPrice.appendChild(suitPrice)
	headImg.src = suitImage
	button.appendChild(suitBtn)

	newDiv.appendChild(headName)
	newDiv.appendChild(headImg)
	newDiv.appendChild(headSize)
	newDiv.appendChild(headAvailable)
	newDiv.appendChild(headPrice)
	newDiv.appendChild(button)
	topDiv.appendChild(newDiv)

	button.className = "btn btn-primary btn-md"
	topDiv.className = "col-sm-4"
	headSize.className = "size"
	
	clothes.appendChild(topDiv)
}

$(document).ready(function(){    
   $("img").mouseover(function(){ 
  	 	$(this).animate({height: "600px"});
    });
});

   $('img').mouseleave(function(){
   		$(this).animate({height: "300px"})
   });











var Cart = function(){
	this.array_items = [];	
}
Cart.prototype.addItem = function(item) {
	this.array_items.push(item);
}
Cart.prototype.showCart = function(){
	console.log(this.array_items);
}
var Item = function(name,price){
	this.name = name;
	this.price = price;	
}


var shopping_list = new Cart();
var apple = new Item("Apple",10);
var orange = new Item("orange",5);
var grapes = new Item("grapes",15);
var banana = new Item("Banana",20);
var watermelon = new Item("watermelon",50);
shopping_list.addItem(apple);
shopping_list.addItem(orange);
shopping_list.addItem(grapes);
shopping_list.addItem(banana);
shopping_list.addItem(watermelon);



shopping_list.showCart()
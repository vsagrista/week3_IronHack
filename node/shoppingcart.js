var Cart = function() {
    this.array_items = [];
}

Cart.prototype.addItem = function(item) {
    this.array_items.push(item);
}

Cart.prototype.showCart = function() {
    console.log(this.array_items.length + " items bough.");
    console.log("Your total is: " + this.total())
    console.log("You got " + this.discount() + " euros in discounts")
    console.log("So your discounted total is: " + (this.total() - this.discount()))
}

Cart.prototype.total = function() {
    var total_price = 0
    for (i = 0; i < this.array_items.length; i++) {
        total_price += this.array_items[i].price;
    }
    if (this.array_items.length > 5) {
        return (total_price - (total_price * 0.01));
    } else {
        return total_price;
    }
}

Cart.prototype.discount = function() {
    var discount = 0
    var apple_counter = 0
    var orange_counter = 0
    for (i = 0; i < this.array_items.length; i++) {
        if (this.array_items[i].price == 10) { // apple price is 10
            apple_counter++
        } else if (this.array_items[i].price == 5) // orange price is 10
            orange_counter++
    }
    if (apple_counter >= 2) {
        if (apple_counter % 2 != 0) {
            discount = ((apple_counter - 1) * 5);
        } else {
            discount = apple_counter * 5;
        }
    }
    if (orange_counter > 5) {
        discount = discount + ((orange_counter - 5) * 2.5)
    }
    return discount
}

Cart.prototype.remove_item = function(item,number){
	var times_deleted = 0
	console.log(this.array_items)
	if (number === 0){ // item will be deleted all times it's found if number is 0
		for (i=0;i<this.array_items.length;i++){ 
		 	var item_to_delete = this.array_items.indexOf(item) 
		 	if (item_to_delete != -1) { this.array_items.splice(item_to_delete,1)}
		 }	
	}
	else {  
		var i = 0
		while(times_deleted < number || i === this.array_items.length ){ // item will be deleted as many times as the number says
			times_deleted++		 
			var item_to_delete = this.array_items.indexOf(item)  	
			if (item_to_delete != -1) { this.array_items.splice(item_to_delete,1)}  	
		}
	}
	return this.array_items
}

var Item = function(name, price) {
    this.name = name;
    this.price = price;
}


var shopping_list = new Cart();
var apple = new Item("Apple", 10);
var orange = new Item("orange", 5);
var grapes = new Item("grapes", 15);
var banana = new Item("Banana", 20);
var watermelon = new Item("watermelon", 50);

shopping_list.addItem(apple);
shopping_list.addItem(apple);
shopping_list.addItem(apple);
shopping_list.addItem(apple);
shopping_list.addItem(apple);
shopping_list.addItem(orange);
shopping_list.addItem(orange);
shopping_list.addItem(orange);
shopping_list.addItem(orange);
shopping_list.addItem(orange);
shopping_list.addItem(orange);
shopping_list.addItem(orange);
shopping_list.addItem(grapes);
shopping_list.addItem(banana);
shopping_list.addItem(banana);
shopping_list.addItem(banana);
shopping_list.addItem(banana);
shopping_list.addItem(watermelon);


shopping_list.showCart()
shopping_list.remove_item(banana,1)









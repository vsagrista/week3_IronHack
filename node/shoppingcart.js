var Cart = function() {
    this.array_items = [];
}

Cart.prototype.addItem = function(item) {
    this.array_items.push(item);
}

Cart.prototype.showCart = function() {
    console.log(this.array_items.length + " items bough.");
    console.log("Your total is: " + this.total())
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

Cart.prototype.toString = function() {
    return "The total is: " + this.total
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
shopping_list.addItem(orange);
shopping_list.addItem(grapes);
shopping_list.addItem(banana);
shopping_list.addItem(watermelon);

shopping_list.showCart()
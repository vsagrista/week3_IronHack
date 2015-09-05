var read = require("read")
var user_input

// ******************************************************* ROOM OBJECT CONSTRUCTOR ******************************************************* //

var Room = function(description) {
    this.door = []; // each door is a door, stored in this array
    this.description = description
}

Room.prototype.addDoor = function(door) {
    this.door.push(door)
}

// ******************************************************* GAME OBJECT CONSTRUCTOR  ******************************************************* //

var Game = function() {
    this.rooms = []
    this.current_room = 0 
    this.inventory = 0
    this.options = {
        prompt: "Where? (N,S,E,W, or use a coin if you have.)\n>"
    }
}

Game.prototype.addRooms = function(room) {
    this.rooms.push(room);
}


Game.prototype.askUser = function() {
    read(this.options, this.getUserInput.bind(this));
}

Game.prototype.getUserInput = function(err, input) {
    if (err) {
        throw err;
    } else {
        this.whatUserTypes(input);
    }
}

// *******************************************************    USER INPUT OPTIONS    ******************************************************* //


Game.prototype.whatUserTypes = function(input) {
    if (input === "N") {
        this.inputIsN();
    } else if (input === "S") {
        this.inputIsS();
    } else if (input === "E") {
        this.inputIsE();
    } else if (input === "W") {
        this.inputIsW();
    } else if (input === "Inventory") {
        console.log("Inventory: " + this.inventory + " coins.");
        this.showRoom(this.current_room);
    } else if (isNaN(parseInt(input)) == false) { // if user uses a coin, he can type a room number to move there directly
        this.useCoinToMove(input)
        this.removeCoinFromInventory()
        this.showRoom(this.current_room)
    } else {
        this.pickOrUseCoin(input)
    }
}

Game.prototype.inputIsN = function() {
    var current_room = this.current_room
    if (current_room === 2 || current_room === 4) {
        this.current_room--;
        this.showRoom(this.current_room)
    } else {
        this.showRoom(this.current_room)
    }
}

Game.prototype.inputIsS = function() {
    var current_room = this.current_room
    if (current_room === 1 || current_room === 3) {
        this.current_room++;
        this.showRoom(this.current_room)
    } else {
        this.showRoom(this.current_room)
    }
}
Game.prototype.inputIsW = function() {
    var current_room = this.current_room
    if (current_room === 2) {
        this.current_room++;
        this.showRoom(this.current_room)
    } else if (current_room === 1) {
        this.current_room--;
        this.showRoom(this.current_room)
    } else {
        this.showRoom(this.current_room)
    }
}
Game.prototype.inputIsE = function() {
    var current_room = this.current_room
    if (current_room === 3) {
        this.current_room--;
        this.showRoom(this.current_room)
    } else if (current_room === 0) {
        this.current_room++;
        this.showRoom(this.current_room)
    } else {
        this.showRoom(this.current_room)
    }
}


// ******************************************************* OBJECTS IN THE GAME: COINS ******************************************************* //

Game.prototype.whichItemIsInRomm = function(room_number) {
    if (room_number === 1 && this.inventory === 0 || room_number === 3 && this.inventory ) {
        console.log("*************** There's a coin here!! ****************\nYou can type (Pick up coin) and then (Use coin) to use it. Coins can do magic!\nType 'Inventory' to see how many you have.\n")
    }
}

Game.prototype.pickOrUseCoin = function(command) {
    if (command === "Pick up coin") {
        this.addCointToInventory();
    } else if (command === "Use coin") {
        console.log("******************************************************");
        console.log("***************  Magic Telepor Coin!  ****************");
        console.log("******************************************************");
        console.log("To use your coin, please type the room you want to go (1-5). Happy travels! \n");
        this.showRoom(this.current_room)
    }
}

Game.prototype.addCointToInventory = function() {
    this.inventory++
    console.log("You have: " + this.inventory + " coins.")
    this.showRoom(this.current_room)
}

Game.prototype.removeCoinFromInventory = function() {
    this.inventory--
    if (this.inventory < 0) {
        this.inventory = 0
    }
}
Game.prototype.useCoinToMove = function(room_number) {
    if (room_number <= 5 && this.inventory > 0) {
        switch (parseInt(room_number)) {
            case 1:
                this.current_room = 0;
                break
            case 2:
                this.current_room = 1
                break
            case 3:
                this.current_room = 2
                break
            case 4:
                this.current_room = 3
                break
            case 5:
                this.current_room = 4
                break
            default:
                console.log("None of the rooms has that number, try one from 1 to 5.")
                this.showRoom(this.current_room)
        }
    } else {
        console.log("Upps, you cannot use the magic move without using a coin, seems you don't have any yet.")
        this.showRoom(this.current_room)
    }
}

// *******************************************************       CURRENT ROOM PRINTED       ******************************************************* //


Game.prototype.showRoom = function(room_number) {

    console.log(this.rooms[room_number].description)
    if (room_number == 1 || room_number == 3) {
        this.whichItemIsInRomm(room_number)
    }
    this.askUser()
}

// ******************************************************* ROOMS ARE CREATED AND GAME STARTS  ******************************************************* //


var room1 = new Room("You are in a room with nothing in it, I guess you should try going somewhere more fun. This is room 1. \nThere is a door on the east!")
room1.addDoor("E")

var room2 = new Room("You are in room 2, this room has surprises sometimes...\nYou could try the door in the south.")
room2.addDoor("W")
room2.addDoor("S")

var room3 = new Room("You're in room 3. Nothing exciting here. \nTry the west door.")
room3.addDoor("N")
room3.addDoor("W")

var room4 = new Room("You reached room 4, This room has surprises sometimes... \nTry south")
room4.addDoor("E")
room4.addDoor("S")

var room5 = new Room("You are in room 5, This is the last room of the house!")
room5.addDoor("N")


new_game = new Game
new_game.addRooms(room1)
new_game.addRooms(room2)
new_game.addRooms(room3)
new_game.addRooms(room4)
new_game.addRooms(room5)

new_game.askUser();
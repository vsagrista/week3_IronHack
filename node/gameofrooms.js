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
    this.current_room = 0 // first item from rooms array which is the first rooms 
    this.options = {
        prompt: "Where?\n>"
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
        this.whichLetterUserPicked(input);
    }
}

Game.prototype.whichLetterUserPicked = function(letter) {

    if (letter === "N") {
        this.inputIsN();
    } else if (letter === "S") {
        this.inputIsS();
    } else if (letter === "E") {
        this.inputIsE();
    } else if (letter === "W") {
        this.inputIsW();
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

Game.prototype.showRoom = function(room_number) {

    console.log(this.rooms[room_number].description) // prints the current room
    this.askUser()
}

// ******************************************************* ROOMS ARE CREATED AND GAME STARTS  ******************************************************* //


var room1 = new Room("You are in a room with nothing in it, I guess you should try going somewhere more fun. This is room 1. \nTry east!")
room1.addDoor("E")

var room2 = new Room("You are in room 2, good job getting here, see if you can find more rooms! \nTry south!")
room2.addDoor("W")
room2.addDoor("S")

var room3 = new Room("You're in room 3, halfway to the last room, the one with surprises! \nTry west")
room3.addDoor("N")
room3.addDoor("W")

var room4 = new Room("You reached room 4, awesome! \nTry south")
room4.addDoor("E")
room4.addDoor("S")

var room5 = new Room("You are in room 5, let's see if you can go back to room 1!")
room5.addDoor("N")


new_game = new Game
new_game.addRooms(room1)
new_game.addRooms(room2)
new_game.addRooms(room3)
new_game.addRooms(room4)
new_game.addRooms(room5)

new_game.askUser();

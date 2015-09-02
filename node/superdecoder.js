var decode = require("./file.js")
var sentence = "Fill the proper tank for the cow"

function superDecoder(sentence, type, odd_even) {

	if (type === "backwards") {
		array = sentence.split(" ").reverse();}
	else {
		array = sentence.split(" ")};
	if (odd_even === "even") {
		odd_even = 0}
	else if (odd_even === "odd") {
		odd_even = 1}
    var even = array.filter(function(word, idx) {
            return idx % 2 == odd_even
        }
    )
    return even
}
console.log(decode(superDecoder(sentence,"backwards","odd")))
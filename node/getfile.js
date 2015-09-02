var fs = require("fs")
var inside
var text_file = function print(error, content) {
	if (error){
		console.log("Oh nooo!")
	}
	else {
		content = content.split("\n")
		for (i=0;i<content.length;i++){
			console.log("Line "+(i+1)+": "+content[i])

		}

	}
}

fs.readFile("textfile.txt","utf8",text_file)
//fs.readFile("textfile.txt","utf8",print) This is the same but no variable


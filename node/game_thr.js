var fs = require("fs");

function fileactions(err, file) {
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file)
    for (i = 0; i < episodes.length; i++) {
        customPrint(episodes[i])
    }
}

fs.readFile("./episodes.txt", 'utf8', fileactions)

function customPrint(episode) {
    var stars = Array(Math.round(episode.rating)).join("*")
    console.log("Title: " + episode.title + "\n" + episode.description + "\n" + "Rating: " + episode.rating + " " + stars)

}
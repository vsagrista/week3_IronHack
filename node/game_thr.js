var fs = require("fs");

function fileactions(err, file) {
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file)
    sorted_episodes = sortEpisodes(episodes)

    for (i = 0; i < sorted_episodes.length; i++) {
        customPrint(sorted_episodes[i])
    }
}

fs.readFile("./episodes.txt", 'utf8', fileactions)

function customPrint(episode) { // prints the name, plot, etc... plus several stars according to the rating. 
    var stars = Array(Math.round(episode.rating)).join("*")
    console.log("Title: " + episode.title + "\n" + episode.description + "\n" + "Rating: " + episode.rating + " " + stars + "\n" + "Episode Number: " + episode.episode_number)
}
function sortEpisodes(episodes) {
	sorted_episodes = episodes.sort(function(a,b){
		return a.episode_number - b.episode_number}
		)
	return sorted_episodes
}
require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var fs = require("fs");
var moment = require("moment");
var Spotify = require("node-spotify-api");

var spotifyKeys = new Spotify(keys.spotify);


const needs = process.argv[2];
const search = process.argv.slice(3).join(" ")


switch (needs) {
    case ("concert-this"):
        concertNeeds(search);
        break;
    case ("spotify-this-song"):
        spotifyNeeds(search);
        break;
    case ("movie-this"):
        movieNeeds(search);
        break;
    case ("do-what-it-says"):
        callText();
        break;
    default:
        console.log("I don't know what you are trying to do.");
};

function callText() {
    fs.readFile("random.txt", "utf8", function (err, text) {
        if (err) return console.log(err);

        var Textarray = text.toString().split(" ");
        for (i = 0; i < array.length; i++) {
            switch (Textarray[0]) {
                case ("concert-this"):
                    concertNeeds(Textarray[1]);
                    break;
                case ("spotify-this-song"):
                    spotifyNeeds(Textarray[1]);
                    break;
                case ("movie-this"):
                    movieNeeds(Textarray[1]);
                    break;
                default:
                    console.log("I don't know what you are trying to do.");
            }
        }
    })
};

function spotifyNeeds(song) {
    var songName = song || "The Sign";

    spotifyKeys.search({ type: 'track', query: songName, limit: 10 }, function (err, response) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        for (i = 0; i < response.tracks.items.length; i++) {
            console.log("Artist name: " + JSON.stringify(response.tracks.items[i].album.artists[0].name));
            console.log("Song name: " + JSON.stringify(response.tracks.items[i].name));
            console.log("Song url: " + JSON.stringify(response.tracks.items[i].album.artists[0].external_urls.spotify));
            console.log("Album name: " + JSON.stringify(response.tracks.items[i].album.name));
        }

    });
}

function movieNeeds(movie) {
    var movieName = movie || "Mr. Nobody";
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl).then(
        function (response) {
            console.log("* The title of this movie is " + JSON.stringify(response.data.Title, null, 2) + ".");
            console.log("* The movie came out in " + JSON.stringify(response.data.Year, null, 2) + ".");
            console.log("* The IMDB Rating of this movie is " + JSON.stringify(response.data.imdbRating, null, 2) + ".");
            console.log("* The Rotten Tomatoes Rating of this movie is " + JSON.stringify(response.data.Ratings[2].Value, null, 2) + ".");
            console.log("* The country this movie was produced is " + JSON.stringify(response.data.Production, null, 2) + ".");
            console.log("* The movies language is " + JSON.stringify(response.data.Language, null, 2) + ".");
            console.log("* The movies plot is " + JSON.stringify(response.data.Plot, null, 2) + ".");
            console.log("* The actors in the movie are " + JSON.stringify(response.data.Actors, null, 2) + ".");
        }
    )
}

function concertNeeds(artist) {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {
            var date = "";
            for (var i = 0; i < response.data.length; i++) {
                console.log("Venue name: " + JSON.stringify(response.data[i].venue.name, null, 2));
                console.log("Venue location: " + JSON.stringify(response.data[i].venue.city, null, 2));
                date = JSON.stringify(response.data[i].datetime, null, 2).split("T");
                console.log("Event date: " + moment(date[0], "YYYY-MM-DD").format("MM/DD/YYYY"));
            }
        });
}


# liri-node-app

## **What the application does**

This application allows the user to search the API's using the command line in node. In this application you can search for a song on spotify using the spotify API, movie data using the omdb API, a concert for an artist using the bandsintown API, and a way to write the command and the search in a .txt file to run.

--------------------------------------------------------------------------------------------------------------------------------------

## **How to run the application**

In this application the user can run one of four commands. The commands are: "spotify-this-song", "cncert-this", "movie-this", and " "do-what-it-says". Each of these functions are made to give the user different data to help them in there search. Below is the description and image of what the commands gives the user. To run the command the user will need to open the terminal/bash window. Once that is open the user will need to input the following:

### *node liri.js concert-this "artist/band name here"*
![concert-this](/images/concert-this.png)

As you can see above, when you enter the command for concert-this, it will get the following information from the bandsintown API:

* Name of venue
* Venue location
* Date of the Event (use moment to format this as "MM/DD/YYYY")



### *node liri.js spotify-this-song "song name here"*
![spotify-this-song](/images/spotify-this-song.png)

As you can see above, when you enter the command for spotify-this-song, it will get the following information from the spotify API:

* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from

(If no song is provided then your program will default to "The Sign" by Ace of Base.)



### *node liri.js movie-this "movie name here"*
![movie-this](/images/movie-this.png)
As you can see above, when you enter the command for movie-this, it will get the following information from the omdb API:

* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.

(If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.')



### *node liri.js do-what-it-says*
![do-what-it-says](/images/do-what-it-says.png)
As you can see above, when you enter the command for do-what-it-says, it will pull the text from the random.txt file and run that command. In this example shown the user has written "movie-this 'step brothers'", thus running the movie-this command and looking up the information for Step Brothers from the omdb API.
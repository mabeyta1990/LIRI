//REQUIRED MODULES
let keys = require("./keys.js");
let twitter = require('twitter');
let spotify = require('spotify');
let request = require('request');
let fs = require('fs');
let liriArg = process.argv[2];

//COMMANDS LIRI CAN TAKE
switch(liriArg) {
    case "my-tweets": mytweets(); 
        break;
    case "spotify-this-song": spotifyThisSong(); 
        break;
    case "movie-this": movieThis();
        break;
    case 'do-what-it-says': doWhatItSays();
        break;
}



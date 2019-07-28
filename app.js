



//Variables
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");


//Set your game activity
bot.on(`ready`, () => {

    bot.user.setPresence({
        status: `dnd`,       //possible status: online, idle, offline, dnd
        game: {
            name: "Bitcoin Mining",
            type: "PLAYING"
        }
    })

});




//Text on successfull launch.
console.log('Hello Squigga, your cancer has now been downloaded and loaded.');


//Loads token from config.json
bot.login(config.token);







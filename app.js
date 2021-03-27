const dotenv = require('dotenv').config()

const discord = require('discord.js')

const client = new discord.Client()

client.login(process.env.DISCORD_BOT_TOKEN)

client.on('ready', function() {
    console.log('The client is running...');
})

client.on('message', function(message) {
    console.log(message)
})

client.on('message', function(message) {
    if (message.author.bot) return;
    message.reply('Hey! How u doin!')
})
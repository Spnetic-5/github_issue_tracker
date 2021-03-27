module.exports = {
    'name': "avatar",
    'description': 'Displays avatar',
    "usage": "avatar",
    execute(message, args) {
        return message.reply(message.author.displayAvatarURL());
    }
}
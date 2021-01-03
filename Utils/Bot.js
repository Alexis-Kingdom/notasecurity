class Bot {

    say(message, text) {
       return message.channel.send(text)
    }

    username(message, username) {
        return message.client.user.setUsername(username)
    }

    status(message, status) {
        return message.client.user.setActivity( status, { type: "PLAYING" })
    }

}

module.exports = Bot;
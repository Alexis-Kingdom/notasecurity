class Error {

    constructor(message, error) {
        message.channel.send({
            embed: {
                color: "#C61515",
                description: `${error}`
            }
        })
    }

}

module.exports = Error;
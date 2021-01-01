class Response {

    constructor(filter) {
        this.filter = filter
        this.response = null
    }

    async collect(message) {
        let filter;
        switch (this.filter) {
            case 'author':
                filter = m => { return m.author.id === message.author.id; }
                break;
        
            default:
                break;
        }

        await message.channel.awaitMessages(filter, { max: 1, time: 30000})
        .then(collected => {
            this.response = collected.first().content 
        });

    }

    getResponse() {
        return this.response
    }

}

module.exports = Response;
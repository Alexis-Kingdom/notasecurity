class Embed {

    constructor(message, content, title, color, image, mini, footer, url) {
        this.content = content
        this.title = title
        this.color = color
        this.url = url
        this.image = image
        this.mini = mini
        this.footer = footer

        this.send(message)

    }

    send(message) {

        message.channel.send({
            embed: {
                thumbnail: {
                    url: this.mini
                },
                color: this.color,
                title: this.title,
                description: this.description,
                image: {
                    url: this.image
                },
                footer: this.footer,
                description: this.content
            }
        })

    }

}

module.exports = Embed;
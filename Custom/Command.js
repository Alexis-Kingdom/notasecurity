class Command {

    constructor(title, description, name, restriction) {
        this.title = title
        this.description = description
        this.name = name
        this.restriction = restriction
        this.prefix = "nas!"
        this.Error = require("../Native/Error.js")
    }

    restrictionControl(message) {
        if(this.restriction == null) return true;
        let control = this.restriction.some((role) => {
            if(message.member.roles.cache.some(r => r.id === role)) return true;
        });
        return control;
    }

    execute(message, callback) {

        if(!message.content.startsWith(this.prefix)) return;

        if(message.content !== this.prefix + this.name) return;

        if(this.restrictionControl(message) == false) return new this.Error(message, "Vous ne pouvez pas utiliser cette commande.");

        callback(message.author, message.content, message.channel);

    }

}

module.exports = Command;
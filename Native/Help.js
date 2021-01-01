class Help {

    constructor(commands) {
        this.commands = commands
    }

    execute(message, callback) {

        let content;

        this.commands.forEach(cmd => {
            content += `**nas!${cmd.name}** : ${cmd.description} \n`
        });

        callback(message, content);

    }

}

module.exports = Help;
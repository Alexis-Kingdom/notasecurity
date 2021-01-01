// Soon
const config = require("./Config/Global.json");
const discord = require("discord.js");

const client = new discord.Client;

const Command = require("./Custom/Command.js");

let test = new Command("test", "test", "test", ["704533945290588211"])

client.on('message', async message => {

    test.execute(message, function(a, c, mc) {
        message.reply("coucou");
    })

});

client.login(config.token);
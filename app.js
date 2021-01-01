// Soon
const config = require("./Config/Global.json");
const discord = require("discord.js");

const client = new discord.Client;

const Command = require("./Custom/Command.js");
const Response = require("./Custom/Response.js");
const Embed = require("./Custom/Embed.js")

let test = new Command("test", "test", "test", ["704533945290588211"])
let connection = new Command("Hello World", "This command is Hello World!", "connection")
let helloWorld = new Command("Hello World", "This command is Hello World!", "hello")

client.on('message', async message => {

    test.execute(message, async function(a, c, mc) {
        message.reply("Meilleure ville entre Paris et Luxembourg ?");

        let rep = new Response("author");
        await rep.collect(message)
        
        message.reply("Votre réponse est: "+ rep.getResponse())

    })

    helloWorld.execute(message, function(a, c, mc) {
        message.reply("Hello World !")
    })

    connection.execute(message, function(a, c, mc) {
        new Embed(message, `Je suis un embed`, "Un truc super cool", "#gtfs54")
    })



});

client.login(config.token);
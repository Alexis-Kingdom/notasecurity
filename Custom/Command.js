class Command {

    constructor(options) {

        // 
        // Translator
        // 
        this.TranslateUtil = require("../Utils/Translate.js")

        // 
        // File config of the base
        // 
        this.Base = require("../Text/base.json")

        // 
        // File config of the command
        // 
        this.Text = require("../Text/"+ options.name +".json")

        // 
        // Error manager
        // 
        this.Error = require("../Native/Error.js")

        // 
        // Log manager
        // 
        this.LogUtil = require("../Utils/Log.js")

        // 
        // Name of the command
        // 
        this.name = options.name

        // 
        // List of the restriction
        // 
        this.restriction = options.restriction

        // 
        // Log status (true or false)
        // 
        this.logStatus = options.log

        // 
        // Args (null or number)
        // 
        this.args = options.args

        // 
        // The prefix of all commands
        // 
        this.prefix = "nas!"

        // 
        // Instance of translator
        // 
        this.translate = new this.TranslateUtil

        // 
        // Async function init
        // 
        this.init()
    }

    // 
    // Restriction Control
    // 
    restrictionControl(message) {
        if(this.restriction == null) return true;
        let control = this.restriction.some((role) => {
            if(message.member.roles.cache.some(r => r.id === role)) return true;
        });
        return control;
    }

    // 
    // Execute
    // 
    async execute(message, callback) {

        let cmdLogRestrict = await this.translate.translate(this.Base.cmdLogRestrict, this.Base.lang)
        let cmdRestrictMessage = await this.translate.translate(this.Base.cmdRestrictMessage, this.Base.lang)
        let cmdLogUse = await this.translate.translate(this.Base.cmdLogUse, this.Base.lang)

        if (!message.content.startsWith(this.prefix) || message.author.bot) return;

        let args = message.content.slice(this.prefix.length).trim().split(' ');
        const command = args.shift().toLowerCase();

        if(command !== this.name) return;

        if(this.args !== null) args = message.content.split(' ').splice(1).join(' ')

        if(this.restrictionControl(message) == false) {
            if(this.logStatus == true) this.log(message, cmdLogRestrict + this.prefix + this.name, "utilisation");
            return new this.Error(message, cmdRestrictMessage);
        } else if(this.logStatus == true) {
            this.log(message, cmdLogUse + this.prefix + this.name, "utilisation")
        }

        callback(this.Text, this.translate, args);

    }

    // 
    // Write log
    // 
    log(message, description, action) {
        let log = new this.LogUtil(this.name)
        log.write(message, description, action)
    }

    // 
    // Init
    // 
    async init() {
        this.title = await this.translate.translate(this.Text.title, this.Text.lang)
        this.description = await this.translate.translate(this.Text.description, this.Text.lang)
    }

}

module.exports = Command;
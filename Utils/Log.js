class Log {

    constructor(module) {
        this.low = require('lowdb')
        this.file = require('lowdb/adapters/FileSync')
        this.uniqid = require("uniqid")
        this.module = module
    }

    getDb() {
        let adapter = new this.file('./Storage/' + this.module + '.json')
        let db = this.low(adapter)
        db.defaults({ logs: []})
        .write()
        return db;
    }

    write(message, description, action) {

        this.getDb().get("logs")
        .push({ "description": description, "action": action, "author": message.author.id, "message": message.id, "date": new Date() })
        .write()

    }

    read(callback) {

        let data = this.getDb().get("logs").value()
        callback(data);
       
    }

}

module.exports = Log;
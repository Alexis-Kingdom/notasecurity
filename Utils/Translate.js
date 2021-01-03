class Translate {

    constructor() {
        this.translatte = require('translatte')
        this.config = require("../Config/Global.json")
    }

    async translate(text, from) {
        if(this.config.lang == from) return text;
        let result = await this.translatte(text, {from: from, to: this.config.lang})
        return result.text
    }

}

module.exports = Translate;
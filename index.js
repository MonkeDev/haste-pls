const https = require("https");
module.exports = class{
    constructor(content){
        this.content = content || "";
        this.raw = null;
        this.json = null;
        this.link = null;
    }

    setContent(content){
        this.content = content;
        return this;
    }

    async post(){
        const requestOpts = {
            method: "POST",
            hostname: "haste.monkedev.com",
            path: "/documents",
        };

        let data = "";

        await new Promise(resolve => {
            const req = https.request(requestOpts, (res) => {
                res.once("data", chunk => {
                    data += chunk
                    this.raw = data;
                    this.json = JSON.parse(data);
                    this.link = `https://haste.monkedev.com/${this.json.key}`
                    resolve()
                });
            });
            req.write(this.content.toString());
            req.end();
        })
        return this;
    }
   
}
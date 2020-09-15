const path = require("path")

module.exports = function(app){
    app.get("/excercise", function(req, res) {
        res.sendFile(path.join(_dirname,"../public/excerise.html"))
    })

    app.get("/stats",function(req, res) {
        res.sendFile(path.join("../public/stats.html"))
    })
};
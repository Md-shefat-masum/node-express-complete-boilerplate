var http = require("http");
var express = require("express");
var app = express();
var bootstrap = require('./bootstrap/app');
// boot server dependencies
bootstrap(app);

// Do anything you like with the rest of your express application.
app.get("/", function (req, res) {
    res.render('welcome');
});

app.get("*", function (req, res) {
    // res.render('welcome');
    res.status(404).json("notfound");
});

// app.listen(3002,()=>{
//     console.log("Listening on %j", 3002);
// })
if (require.main === module) {
    var server = http.createServer(app);
    server.listen(process.env.PORT || 3002, "localhost", function () {
        console.log("Listening on %j", server.address());
    });
}

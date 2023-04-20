var http = require("http");
var express = require("express");
var app = express();
app.use(require("morgan")("short"));

require("console-stamp")(console, "HH:MM:ss.l");
// require('./bootstrap/webpack_hot_reload')(app)

// Do anything you like with the rest of your express application.
app.set('view engine', 'ejs');
app.set('views', __dirname + '/resources/views');
app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
    res.render('welcome');
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

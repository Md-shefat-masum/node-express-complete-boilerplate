var http = require("http");
var express = require("express");
var app = express();
var bootstrap = require("./bootstrap/app");
const config_app = require("./app/utils/config_app");

// boot server dependencies
bootstrap(app);

// Do anything you like with the rest of your express application.
app.get("/", function (req, res) {
    res.render("welcome");
});

app.get("/json", function (req, res) {
    res.json({ msg: "welcome" });
});

app.get("*", function (req, res) {
    res.status(404).json("notfound");
});

if (require.main === module) {
    var server = http.createServer(app);
    server.listen(process.env.PORT || 3002, "localhost", function () {
        console.log("Listening on %j", server.address());
        console.log(
            `Server running on`,
            "\x1b[33m",
            ` ${config_app("url")}:${config_app("port")} \n`,
            "\x1b[0m"
        );
        console.log("\x1b[0m", "");
    });
}

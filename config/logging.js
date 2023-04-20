const path = require("path");
const morgan = require("morgan");
const rfs = require("rotating-file-stream");
const consoleStamp = require("console-stamp");
const env = require("../app/utils/env");
const root_path = require("../app/utils/root_path");

consoleStamp(console, "HH:MM:ss.l");

const accessLogStream = rfs.createStream("access.log", {
    interval: "1d", // rotate daily
    path: path.join(root_path, env("LOG_PATH")),
});

morgan.token("date", function () {
    return new Date().toDateString() + " " + new Date().toLocaleTimeString();
});

module.exports = (app) => {
    app.use(
        morgan("combined", {
            stream: accessLogStream,
            skip: function (req, res) {
                return res.statusCode < 400;
            },
        })
    );

    app.use(morgan("common"));
};

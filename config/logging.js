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

morgan.token("req", function (req) {
    return req.get('Origin');
});

module.exports = (app) => {
    app.use(
        morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":req[header]" ":user-agent"', {
            stream: accessLogStream,
            skip: function (req, res) {
                return res.statusCode < 400;
            },
        })
    );

    app.use(morgan("common"));
};

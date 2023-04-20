const body_parser = require("../config/body_parser");
const cors = require("../config/cors");
const filesystems = require("../config/filesystems");
const logging = require("../config/logging");
const view = require("../config/view");

const print_message = (text) => console.log("\x1b[32m","✔️\t"+text,"\x1b[0m");

console.log(" 🧣     boot strapping");

module.exports = (app) => {

    print_message("log setup");
    logging(app);

    print_message("view engine setup");
    view(app);

    print_message("static assets file setup");
    filesystems.static(app);

    print_message("body parser setup");
    body_parser(app);

    print_message("cors setup");
    cors(app);

    console.log("\x1b[0m", "server starting");
};

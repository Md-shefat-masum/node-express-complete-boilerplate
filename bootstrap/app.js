const body_parser = require("../config/body_parser");
const cors = require("../config/cors");
const filesystems = require("../config/filesystems");
const logging = require("../config/logging");
const view = require("../config/view");

module.exports = (app) => {
    console.log("\n log setup \n");
    logging(app);

    console.log("\n view engine setup \n");
    view(app);

    console.log("\n static assets file setup \n");
    filesystems.static(app);

    console.log("\n body parser setup \n");
    body_parser(app);

    console.log("\n cors setup \n");
    cors(app);

    console.log("\n\n");
}

const filesystems = require("../config/filesystems");
const logging = require("../config/logging");
const view = require("../config/view");

module.exports = (app) => {
    console.log("\n\n 1. log setup");
    logging(app);

    console.log("\n\n 2. view engine setup");
    view(app);

    console.log("\n\n 3. static assets file setup");
    filesystems.static(app);

    console.log("\n\n");
}

const express = require("express");
const frontendWeb = require("./partials/frontend.web");
const web_routes = express.Router();

web_routes.use(frontendWeb);

module.exports.web_routes = web_routes;

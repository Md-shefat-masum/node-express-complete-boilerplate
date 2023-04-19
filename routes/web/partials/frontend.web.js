const express = require("express");
const router = express.Router();

module.exports = router
    .get("/", (req, res) => {
        res.send("home page");
    })
    .get("/about", (req, res) => {
        res.send("about page");
    })
    .get("/contact", (req, res) => {
        res.send("contact page");
    })
    .get("/login", (req, res) => {
        res.send("login page");
    })
    .get("/signup", (req, res) => {
        res.send("signup page");
    })

const express = require("express");
const router = express.Router();

let users = [{ name: "aaa" }, { name: "bbb" }];
module.exports = router
    .get("/users", (req, res) => {
        res.json(users);
    })
    .get("/users/:id", (req, res) => {
        res.json(users[0]);
    })
    .post("/users", (req, res) => {
        res.json(users);
    })
    .put("/users", (req, res) => {
        res.json(users);
    })
    .delete("/users/:id", (req, res) => {
        res.json(users);
    });

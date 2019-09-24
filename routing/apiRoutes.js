const express = require("express");
const exphb = require("express-handlebars");
const calculate = require("../app/public/calculate");

const router = express.Router();

const results = require("../app/public/survey");
const friends = require("../app/data/friends");

router.post("/api/friends", (req, res) => {
    console.log(calculate);
    matchName = calculate.name;
    matchURL = calculate;
    res.send(matchName);
    friends.push(req.body);
})

router.get("/api/friends", (req, res) => {
    res.send("friends");
})

module.exports = router;
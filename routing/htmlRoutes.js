const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
})

router.get("/survey", (req, res) => {
    res.render("survey");
})


module.exports = router;
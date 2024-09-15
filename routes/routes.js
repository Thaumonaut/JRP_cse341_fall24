const express = require("express");
const router = express.Router();

const routes = {
    home: router.get("/", (req, res) => {
        res.send("Learning Activity - Week 01");
    }),
    attribute: router.get("/attribute", (req, res) => {
        res.send("Create by Jek");
    }),
}

module.exports = routes
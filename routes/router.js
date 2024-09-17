const express = require("express");
const router = express.Router();

const db = require("../db");

// Routes
// Home Route
router.get("/", (req, res) => {
    res.send("Learning Activity - Week 01");
});

// Test Route
router.get("/test", async (req, res) => {
    const data = await db("cse-collection");
    const usr = await data.findOne({name: "Jacob"});
    res.json(usr);
});

// Attribute Route
router.get("/attribute", (req, res) => {
    res.send("Create by Jek");
});

module.exports = router
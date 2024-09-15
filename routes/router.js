const express = require("express");
const router = express.Router();

// Routes
// Home Route
router.get("/", (req, res) => {
    res.send("Learning Activity - Week 01");
});

// Test Route
router.get("/test", (req, res) => {
    res.send("Test Route");
});

// Attribute Route
router.get("/attribute", (req, res) => {
    res.send("Create by Jek");
});

module.exports = router
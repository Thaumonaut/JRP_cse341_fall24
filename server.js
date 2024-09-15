// Express.js app to serve api end points
const express = require("express");
require("dotenv").config();

const app = express();
const routes = require("./routes/router");

app.use("/", routes)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Listening on port " + port);
})
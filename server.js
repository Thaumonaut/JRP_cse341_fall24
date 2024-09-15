// Express.js app to serve api end points
const express = require("express");
const app = express();
const routes = require("./routes/routes");

app.use("/", routes.home)
app.use("/attribute", routes.attribute)

app.listen(3000, () => {
    console.log("Listening on port 3000");
})
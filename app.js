const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello! Application deployed on AWS EKS!");
});

app.get("/health", (req, res) => {
    res.status(200).send("Healthy");
});

app.listen(3000, "0.0.0.0", () => {
    console.log("App running on port 3000");
});

module.exports = app;
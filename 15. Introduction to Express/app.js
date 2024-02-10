const express = require("express");

let app = express();

app.listen(3000);

app.get("/", function (req, res) {
    res.send("this is the homepage");
});

app.get("/contact", function (req, res) {
    res.send("this is the contact page");
});

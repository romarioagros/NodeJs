var express = require("express");

var app = express();

app.get("/", function (req, res) {
    res.send("this is home");
});

app.get("/news", function (req, res) {
    res.send("this is news");
});

app.get("/news/:name/:id", function (req, res) {
    res.send("this is id " + req.params.id + req.params.id);
});


app.listen(80);

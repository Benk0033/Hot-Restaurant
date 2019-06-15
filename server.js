//dependencies
var express = require("express");
var path = require("path");

//set up the express npm
var app = express();

//code here to deploy to heroku


//basic route that sends to the home page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"))
});

//basic route that sends to the make reservation page
app.get("/makeReservation", function (req, res) {
    res.sendFile(path.join(__dirname, "makeReservation.html"))
});

//basic route that sends to the view tables page
app.get("/viewTables", function (req, res) {
    res.sendFile.sendFile(path.join(__dirname, "viewTables.html"))
});
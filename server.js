// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var tables = [];

var waitlist = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/viewTables", function (req, res) {
    res.sendFile(path.join(__dirname, "viewTables.html"));
});

app.get("/makeReservation", function (req, res) {
    res.sendFile(path.join(__dirname, "makeReservation.html"));
});

// Displays all current tables api
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

// Displays all current waitlist api
app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});

// Displays all current waitlist api
app.get("/api/clear", function (req, res) {
    tables = [];
    waitlist = [];
    res.sendFile(path.join(__dirname, "viewTables.html"));
});

// Create New reservatons - takes in JSON input
app.post("/api/tables", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;

    console.log(tables.length);

    if (tables.length < 5) {

        tables.push(newReservation);
        res.json(newReservation);

    }
    else {
        app.post("/api/waitlist", function (req, res) {

            var newReservation = req.body;

            console.log(newReservation);

            waitlist.push(newReservation);

            res.json(newReservation);
        });

    };

    // res.json(newReservation);
});

app.post("/api/waitlist", function (req, res) {

    var newReservation = req.body;

    console.log(newReservation);

    waitlist.push(newReservation);

    res.json(newReservation);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


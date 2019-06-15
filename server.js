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

// Displays all current reservations api
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

// Displays all current reservations api
app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
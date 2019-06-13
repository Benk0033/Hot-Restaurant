var reservations = [];


//----------------- ROUTES START HERE -----------------//
// Basic route that sends the user first to the home
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

// route to send the user to make a reservation
app.get("/makereservation", function (req, res) {
    res.sendFile(path.join(__dirname, "makeReservation.html"));
});

//route that sends user to the view tables
app.get("/viewTables", function (req, res) {
    res.sendFile(path.join(__dirname, "viewTables.html"));
});


// Displays the api of tables
app.get("/api/tables", function (req, res) {
    return res.json(reservations);
});


// Displays the api of tables
app.get("/api/waitlist", function (req, res) {
    return res.json(waitList);
});


// Create New Reservations - takes in JSON input
app.post("/makeReservation", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;

    // Using a RegEx Pattern to remove spaces from reservation

    newReservation.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    reservations.push(newReservation);

    res.json(newReservation);
});
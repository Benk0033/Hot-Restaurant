

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


// Displays all characters
app.get("/api/characters", function (req, res) {
    return res.json(reservations);
});

// Displays a single character, or returns false
app.get("/api/characters/:character", function (req, res) {
    var chosen = req.params.character;

    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/characters", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newcharacter = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

    console.log(newcharacter);

    characters.push(newcharacter);

    res.json(newcharacter);
});
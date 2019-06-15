//this should probably be modularized?
var require = ("express");

//can we import the reservations?

var app = express();


app.post("./api/viewTables", function (req, res) {

    req.json(reservations)
    //do I need to store this in req.body?
    var newReservation = req.body;

    if (tables.length < 5) {
        //allow the table to be posted if there are less than 5
        tables.push(newReservation);
        res.json(newReservation)
    }
    else {
        waitlist.push(newReservation);
        res.json(waitlist);
    }

});
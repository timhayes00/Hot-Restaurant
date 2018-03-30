var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var reservations = [];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function (req, res) {
    var reserve = req.params.reservations;
    return res.json(reservations);
});

app.get("/api/waitlist", function (req, res) {
    var reserve = req.params.reservations;
    return res.json(waitlist);
});


app.post("/api/new", function (req, res) {
    var newreservation = req.body;
    
    console.log(newreservation);
    if (reservations.length > 4) {
        waitlist.push(newreservation);
        newreservation.onWaitList = true;
        //alert("Sorry, but you are on the waitlist.")
    } else {
        newreservation.onWaitList = false;
        reservations.push(newreservation);
        //alert("Congratulations, you got a table reserved at Charlotte's hottest new restaurant!");
    }
    console.log(reservations);
    res.json(newreservation);
});




app.listen(PORT, function () {
    console.log("Server listening on http://localhost:" + PORT);
});
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tables = [];
var waitList = [];
var table = {
    "name": "Tim",
    "phone": "867-5309",
    "email": "tim@gmail.com",
    "id": "Keyboard Cat"
}

tables[0] = table;
console.log (tables);

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });
  
  app.get("/api/waitlist", function(req, res) {
    
  });



app.listen(PORT, function() {
    console.log("Server listening on http://localhost:" + PORT);
  });

//import express js
var express = require("express");

//define port
var PORT = process.env.PORT || 8080;

//create express object
var app = express();


// Set "public" as the default content directory starting directory.
app.use(express.static("public"));

// Setup paring rules
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// setup routes
var routes = require("./controllers/burger_controller.js");
app.use(routes);

//Listen for reqursts
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
})
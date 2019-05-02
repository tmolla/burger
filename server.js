
//import express js
var express = require("express");

//define port
var PORT = process.env.PORT || 8081;

//create express object
var app = express();

//initialize express
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controller.js");

app.use(routes);


//Listen to reqursts
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
})
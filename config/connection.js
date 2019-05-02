//import mysql package
var mysql = require("mysql");

//create connection
var connection = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"mysql$62",
    database: "burger_db"
});

//make the connecton
connection.connect(function(err) {
    if(err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadID);
});
//export connection
module.exports = connection;
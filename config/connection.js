//Import mysql 
var mysql = require("mysql");

//create connection object
var connection = mysql.createConnection({
    host:"localHost",
    port :3306,
    user:"root",
    password:"mysql$62",
    database:"burgers_db"
});

//make connection
connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("conneced as id " + connection.threadId);
});

//export connection
module.exports = connection;
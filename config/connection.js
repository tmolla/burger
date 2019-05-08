//Import mysql 
var mysql = require("mysql");

// //create local connection object
// var connection = mysql.createConnection({
//     host:"localHost",
//     port :3306,
//     user:"root",
//     password:"mysql$62",
//     database:"burgers_db"
// });

//create production connection object
var connection = mysql.createConnection({
    host:"jj820qt5lpu6krut.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port :3306,
    user:"up7nzqodyok7c5pl",
    password:"aw4dmzwogcj1q0vx",
    database:"lovyjul3dupauya9"
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

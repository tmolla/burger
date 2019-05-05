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
    host:"us-cdbr-iron-east-02.cleardb.net",
    port :3306,
    user:"b041306ed493d3",
    password:"2b3f14f4",
    database:"heroku_59d7dfaff61266b"
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
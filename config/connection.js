// set up MySql connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "UnicornLove16",
    database: "burgers_db"
});

// make connection
connection.connect(function(err){
    if(err){
        console.error("error connecting:" + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);

});

module.exports = connection;
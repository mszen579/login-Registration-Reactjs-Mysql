//config.js


var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodejs'
});
connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected");
    } else {
        console.log("Error while connecting with database");
    }
});



module.exports = connection;
//module.exports is an object that will be returned as the result of a require function call.
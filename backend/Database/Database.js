const path = require("path");
const secret = require(path.resolve(__dirname, "../secret.json"));
var mysql = require('mysql')

var connection = mysql.createConnection({
    host: secret.host,
    user: secret.user,
    password: secret.password,
    database: secret.database
})

/*
   

    
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE
*/

connection.connect()

module.exports = connection
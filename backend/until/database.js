const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"sinhvien",
    password:"",
    port:3306,
})

connection.connect();

module.exports = connection;
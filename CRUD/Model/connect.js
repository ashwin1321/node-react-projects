const mysql = require('mysql');

// creating connection
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "pagination"
});

// check connection
db.connect(err => {
    if (err) throw err;
    console.log(`connected to mysql database`);
})

module.exports = db;
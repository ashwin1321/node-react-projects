const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
// import swal from 'sweetalert';
const alert = require('alert');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Home Page

router.get('/', (req, res) => {
    res.send('Welcome to backend server');
});

router.post('/login', (req, res) => {

    const { username, password } = req.body;

    var request = new sql.Request();
    request.query(`select * from details where username='${username}'`, function (err, recordset) {

        // take the password from the database and compare it with the password entered by the user
        if (recordset.recordset.length > 0) {
            bcrypt.compare(password, recordset.recordset[0].password, function (err, result) {
                if (result) {

                    // using jwt to generate token
                    const accessToken = jwt.sign({ username: username }, 'mysecretkey');
                    res.json(accessToken);
                    // res.send('token generated');

                } else {
                    // alert('Login Failed');
                    res.json({ error: 'Login Failed' });
                }
            });
        }
        else {
            alert('Login Failed');
            res.json({ error: 'Login Failed' });
        }
    })
})


router.post('/register', (req, res) => {

    const { username, password } = req.body;
    // check in the database id the username exists or not
    // console.log(username, password);

    // encrypting the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    // console.log(hash);

    var request = new sql.Request();
    // console.log("object");
    request.query(
        `select username from details where  username='${username}'`,
    )
        .then((result) => {
            // console.log("first")
            // if (result.length > 0) {
            // console.log(result.recordset.length);
            if (result.recordset.length == 0) {
                // insert the username and password to the database
                var request = new sql.Request();
                request.query(
                    `insert into details(username, password) values('${username}','${hashedPassword}')`,
                    function (err, recordset) {
                        if (err) console.log(err);
                        // res.send(recordset.recordset);
                        // res.send(recordset);
                        console.log("data inserted successfully");
                    }
                );
                res.send('Register Success');
            } else {
                alert("Username already exists");
                console.log("errorrr")
                res.status(400).send('User already exists');
            }
        })
})

module.exports = router;
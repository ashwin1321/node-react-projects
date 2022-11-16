const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
// import swal from 'sweetalert';
const alert = require('alert');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

// Home Page

// generate random otp
const genetatedOtp = Math.floor(1000 + Math.random() * 9000)

// var genetatedOtp;

router.get('/', (req, res) => {
    res.send('Welcome to backend server');
});

router.post('/login', (req, res) => {

    const { username, password } = req.body;

    // if (!username || !password) {
    //     res.status(400).json({ msg: 'Please enter all fields' });
    // }

    var request = new sql.Request();
    request.query(`select * from details where username='${username}'`, function (err, recordset) {

        // take the password from the database and compare it with the password entered by the user
        if (recordset.recordset.length > 0) {
            bcrypt.compare(password, recordset.recordset[0].password, function (err, result) {
                if (result) {
                    let mailTransporter = nodemailer.createTransport({
                        service: 'Outlook365',
                        auth: {
                            user: 'testgentech@outlook.com',
                            pass: 'gentech@123'
                        }
                    });

                    let mailDetails = {
                        from: 'testgentech@outlook.com',
                        to: recordset.recordset[0].username,
                        subject: 'otp for login',
                        text: `Your OTP is ${genetatedOtp}`
                    };

                    mailTransporter.sendMail(mailDetails, function (err, data) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('Email sent successfully');
                        }
                    });

                    console.log("ya samma ta thik xa");



                    // generate random 4 digit otp

                    // using jwt to generate token
                    // const accessToken = jwt.sign({ username: username }, 'mysecretkey');
                    // res.json(accessToken);
                    res.send('Opt sent to your email');

                } else {
                    // alert('Login Failed');
                    console.log(`Login Failed`);
                    res.json({ passwordError: 'Wrong Passowrd' });
                }
            });
        }

        else {
            // alert('Login Failed');
            res.json({ userError: 'User doesnot exist...' });
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
                // alert("Username already exists");
                console.log("errorrr")
                res.json({ userExists: 'User already exists' });
            }
        })
})


router.post('/otp', (req, res) => {
    // generate random 4 digit otp


    const { otp } = req.body;
    console.log(otp);
    if (otp == genetatedOtp) {
        const accessToken = jwt.sign({ otp }, 'mysecretkey');
        res.json(accessToken);
        // res.send('Login Success');
    } else {
        res.json({ otpError: 'Wrong OTP' });
    }
})


module.exports = router;
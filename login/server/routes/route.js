const express = require('express');
const router = express.Router();

var  user =  
    {username: 'admin', password: 'admin'}



// Home Page

router.get('/', (req, res) => {
    res.send('Welcome to backend server');
});

router.post('/login', (req, res) => {

    const {username, password} = req.body;

    if(username === user.username && password === user.password){
        res.send('Login Success');
        // alert('Login Success');
    }else{
        res.status(400).send('Login Failed');
    }    
})
module.exports = router;
const express = require('express');
const  router = require('./routes/route');

const app = express();

app.use(express.json());

//allow cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
    });

app.use('/', router);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
const express = require('express');
const reactRouter = require('./routes/route');
const crudRouter = require('./routes/crud');
const sql = require('./models/config');

const app = express();

app.use(express.json());

//allow cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.use('/', reactRouter);
app.use('/', crudRouter);


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
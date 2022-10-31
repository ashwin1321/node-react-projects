const express = require('express');
const reactRouter = require('./routes/route');
const crudRouter = require('./routes/crud');
const sql = require('./models/config');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', reactRouter);
app.use('/', crudRouter);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

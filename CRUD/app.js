const express = require('express');
const routeCrud = require('./routes/routeCRUD.js')
const routeAuth = require('./routes/routeAuth.js')

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));


app.use('/', routeCrud)
app.use('/', routeAuth)


app.listen(7777, () => {
    console.log(`Server listening at port 7777.....`);
})
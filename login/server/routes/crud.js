const express = require('express');
const router = express.Router();
const db = require('../models/dboperations');
const datas = require('../models/data');
var sql = require('mssql/msnodesqlv8');

router.get('/crud', async (req, res) => {
    var request = new sql.Request();
    request.query('select * from dbo.datas', function (err, recordset) {
        if (err) console.log(err)
        // res.send(recordset.recordset);
        // res.send(recordset);
        console.log(recordset)
    });
});

router.post('/crud', async (req, res) => {
    var request = new sql.Request();
    request.query("insert into datas(name, address, email, phone, age, remarks) values('test','test','test','test',12,'test')", function (err, recordset) {
        if (err) console.log(err)
        // res.send(recordset.recordset);
        // res.send(recordset);
        console.log("data inserted successfully")
    });
});

router.put('/crud', async (req, res) => {
    const id = 2;
    var request = new sql.Request();
    request.query("update datas set address='america' where id=2", function (err, recordset) {
        if (err) console.log(err)
        // res.send(recordset.recordset);
        // res.send(recordset);
        console.log("data updated successfully")
    });
});




module.exports = router;
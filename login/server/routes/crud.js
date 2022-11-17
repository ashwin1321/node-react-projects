const express = require("express");
const router = express.Router();
var sql = require("mssql/msnodesqlv8");
const multer = require('multer')
const path = require('path')
const cors = require("cors");
const alert = require('alert');
const validateToken = require("../validateMiddleware");


// app.use(cors());

router.get("/crud", validateToken, async (req, res) => {

  var request = new sql.Request();
  var page = req.query.page;
  var limit = req.query.limit;
  var search = req.query.search;
  var page1 = parseInt(page);
  var limit1 = parseInt(limit);

  console.log(search);

  if (search == "") {
    request.query(`select * from datas order by Id offset ${page1} rows fetch next ${limit1} rows only`, function (err, recordset) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(recordset.recordset);
      }
    });
  }
  else {
    request.query(`select * from datas where name like '%${search}%' order by Id offset ${page1} rows fetch next ${limit1} rows only  `, function (err, recordset) {
      // single data gako xaina
      if (err) {
        console.log(err);
      }
      else {
        res.send(recordset.recordset);
      }
    });
  }
});

router.post("/crud", async (req, res) => {
  const { name, email, address, phone, age, remarks } = req.body;
  console.log(req.body);

  if (!name || !email || !address || !phone || !age || !remarks) {
    // console.log("error");
    alert("Please fill all the fields");
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  if (name.length < 3 || phone.length < 10 || phone.length > 10 || age < 18) {
    // console.log("error! enter data correctly");
    alert("error! enter data correctly");
  }

  var request = new sql.Request();
  request.query(
    `insert into datas(name, address, email, phone, age, remarks) values('${name}','${address}','${email}','${phone}',${age},'${remarks}')`,
    function (err, recordset) {
      if (err) {
        console.log(err);
        res.json({ msg: "error" });
      }
      else {
        res.send("data inserted");
      }

    }
  );
});


router.put("/crud", async (req, res) => {
  const { name, email, address, phone, age, remarks, Id } = req.body;
  var request = new sql.Request();
  request.query(
    `update datas set name= '${name}', email='${email}', address='${address}', phone=${phone}, age='${age}', remarks= '${remarks}' where id=${Id}`,
    function (err, recordset) {
      if (err) console.log(err);
      console.log("data updated successfully");
    }
  );
});

module.exports = router;


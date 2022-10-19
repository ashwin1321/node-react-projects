const express = require("express");
const router = express.Router();
var sql = require("mssql/msnodesqlv8");

router.get("/crud", async (req, res) => {
  var request = new sql.Request();
  request.query("select * from datas", function (err, recordsets) {
    if (err) console.log(err);
    res.send(recordsets.recordset);
    // res.json(data);
    // console.log(recordset)
  });
});

router.post("/crud", async (req, res) => {
  const { name, email, address, phone, age, remarks } = req.body;
  var request = new sql.Request();
  request.query(
    `insert into datas(name, address, email, phone, age, remarks) values('${name}','${address}','${email}','${phone}',${age},'${remarks}')`,
    function (err, recordset) {
      if (err) console.log(err);
      // res.send(recordset.recordset);
      // res.send(recordset);
      console.log("data inserted successfully");
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

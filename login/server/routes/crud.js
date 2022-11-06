const express = require("express");
const router = express.Router();
var sql = require("mssql/msnodesqlv8");
const multer = require('multer')
const path = require('path')
const cors = require("cors");
const alert = require('alert');
const validateToken = require("../validateMiddleware");

// const app = express();
// using multer

// ! Use of Multer
var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, './public/images/')     // './public/images/' directory name where save the file
  },
  filename: (req, file, callBack) => {
    callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({
  storage: storage
});

// app.use(cors());

router.get("/crud", validateToken, async (req, res) => {
  var request = new sql.Request();
  request.query("select * from datas", function (err, recordsets) {
    if (err) console.log(err);
    res.send(recordsets.recordset);
  });
});

router.post("/crud", upload.single("image"), async (req, res) => {
  // const { name, email, address, phone, age, remarks } = req.body;
  console.log(req.body)
  var imgsrc = 'http://127.0.0.1:3001/images/' + req.file.filename
  var imgsrc = req.file.filename
  const { name, email, address, phone, age, remarks } = req.body;
  console.log(imgsrc, name)
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
    `insert into datas(name, address, email, phone, age, remarks, img) values('${name}','${address}','${email}','${phone}',${age},'${remarks}', CONVERT(VARBINARY, '${imgsrc}'))`,
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


const express = require('express')
const app = express()
// const mysql = require('mysql')
const multer = require('multer')
const path = require('path')
const cors = require("cors");
const bodyParser = require('body-parser');
const sql = require('mssql/msnodesqlv8');
const fileUpload = require('express-fileupload');


//use express static folder
app.use(cors());
app.use(express.static("./public"))
app.use(bodyParser.json());
// app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
const config = {
    database: 'userLogin',
    server: 'localhost',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true,
        useUTC: false
    }
}

sql.connect(config, (err) => {
    if (err) console.log(err);
    else console.log('Database connected');
})

//! Use of Multer
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

//@type   POST
//route for post data
app.post("/upload", upload.single("image"), async (req, res) => {
    if (!req.file) {
        // console.log("No file upload");
    } else {
        // console.log(req.file.filename)
        console.log(req.body)
        var imgsrc = 'http://127.0.0.1:3001/images/' + req.body.filename
        const { name, email, address, phone, age, remarks } = req.body;
        console.log(imgsrc, name)
        // var imgsrc = 
        // var insertData = "INSERT INTO upload(img)VALUES(?)"
        // sql.query(insertData, [imgsrc], (err, result) => {
        //     if (err) throw err
        //     console.log("file uploaded")
        // })
        var request = new sql.Request();
        request.query(
            `INSERT INTO upload(img, namee, email, age, phone, remarks) VALUES(CONVERT(VARBINARY, '${imgsrc}'), '${name}', '${email}', '${age}', '${phone}', '${remarks}')`,
            function (err, recordset) {
                if (err) console.log(err);
                console.log("data inserted successfully");
                // res.send(recordset.recordset);
                // res.send(recordset);
            }
        );
    }
});


app.get("/getdata", (req, res) => {
    var request = new sql.Request();
    request.query(
        `SELECT * FROM upload`,
        function (err, recordset) {
            if (err) console.log(err);
            console.log("data fetched successfully");
            // res.send(recordset.recordset);
            res.send(recordset);
        }
    );
});


//create connection
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))
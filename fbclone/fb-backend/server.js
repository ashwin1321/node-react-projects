import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import multer from 'multer'
import {GridFsStorage} from 'multer-gridfs-storage'
import Grid from 'gridfs-stream'
import bodyParser from 'body-parser'
import path from 'path'
import Pusher from 'pusher'

import mongoPosts from './postModel.js'

 Grid.mongo = mongoose.mongo

//app config
const app = express();
const port = process.env.PORT || 9000

//db config
const mongoURI = 'mongodb+srv://ashwin1321:ashwin1321@cluster0.ycwws1b.mongodb.net/?retryWrites=true&w=majority'

const conn = mongoose.createConnection(mongoURI, {      // creating connection
});

let gfs 

conn.once('open', () => {      // once connected
    console.log('DB Connected')
    const gfs = Grid(conn.db, mongoose.mongo)     // gfs is grid file system of mongo to store images
    gfs.collection('images')
})

const storage = new GridFsStorage({      // storage is a variable to store images
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            const filename = `image-${Date.now()}${path.extname(file.originalname)}`
            const fileInfo = {
                filename: filename,
                bucketName: 'images'
            }
            resolve(fileInfo)
        })
    }
})

const upload = multer({ storage })     // upload images

mongoose.connect(mongoURI, {             // connect to mongo
})


//middleware
app.use(bodyParser.json());
app.use(cors());


//api routes
app.get('/', (req, res) => res.status(200).send('hello world'))

app.post('/upload/image', upload.single('file'), (req, res) => {      
    res.status(201).send(req.file)
})

app.post('/upload/posts', (req,res)=>{
    const dbPost = req.body

    mongoPosts.create(dbPost, (err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/retrieve/posts', (req, res) => {
    mongoPosts.find((err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            data.sort((b,a) => {
                return a.timestamp - b.timestamp
            })
            res.status(200).send(data)
        }
    })
})

app.get('/retrieve/images/single', async (req, res) => {
    
    // var gfs = Grid(conn.db, mongoose.mongo);

    // console.log("fineeee");
    //   await gfs.files.findOne({ filename: req.query.name }, (err,file)=>{
    //     console.log("notfine");
    //     if(err){
    //         res.status(500).send(err)
    //     } else {
    //         if(!file || file.length === 0){
    //             res.status(404).json({err: 'file not found'})
    //         } else {
    //             const readstream = gfs.createReadStream(file.filename)
    //             // readstream.pipe(res)
    //             res.send("not foundfffff")
    //         }
    //     }
    //  })
    res.send("photo xa imagine")
})
//listen
app.listen(9000, () => console.log('listening on localhost:9000'))
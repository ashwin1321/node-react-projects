const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const todoItemsRoute = require('./routes/todoItemsRoute');
const cors = require('cors');

dotenv.config();
const app = express();

// using express.json() to get data into json format
app.use(express.json());
//port
const PORT = process.env.PORT || 5000;

// using cors
app.use(cors());

// middlewares
app.use("/", todoItemsRoute);

// connecting to the database
mongoose.connect(process.env.DB_CONNECT)
.then(() => console.log('Connected to the database'))
.catch(err => console.log(err));






app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
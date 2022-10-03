const express = require('express');
const db = require("../Model/connect")
const jwt = require('jsonwebtoken');

const credentials = {
    username: "ashwin",
    password: "ashwin"
}

exports.getAuth = (req, res) => {
    jwt.verify(req.body.token, 'random_key', (err, data) => {
        if (err) {
            res.sendStatus(403);
        } else {
            let sql = `SELECT * from datas where address  ="bhaktapur"`;
            db.query(sql, (err, result) => {
                if (err) throw err;
                res.send(result);
            })
        }
    })
};

//genearating token
exports.postauth = (req, res) => {
    const user = credentials;
    token = jwt.sign({ user }, 'random_key');
    res.json({
        token: token
    });
}

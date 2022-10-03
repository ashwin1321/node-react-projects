const express = require('express');
const { end } = require('../Model/connect');
const db = require("../Model/connect")

exports.getReq = (req, res) => {

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const offset = page * limit;
    
    let sql = `SELECT * FROM datas LIMIT ${page} OFFSET ${limit};`;
    // res.json(sql);
    db.query(sql, (err, results) => {
        if (err) throw err;

        res.json(results)
    })
}

exports.postReq = async (req, res) => {
    let data = req.body;
    var sql = `INSERT INTO datas(name, address ) VALUES('${data.name}', '${data.address}')`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log('record inserted successfully');
        res.json("inserted successfully");
    })
}

exports.putReq = (req, res) => {
    let id = 4;
    var sql = `UPDATE datas SET name = "This is updated twice" where id = ${id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log("table updated successfully")
    })
}

exports.deleteReq = (req, res) => {
    const id = 4;
    var sql = `DELETE FROM datas WHERE id = ${id}`;
    db.query(sql, (err, result) => {
        if (err) throw error;
        console.log("data deleted successfully....");
    })
}
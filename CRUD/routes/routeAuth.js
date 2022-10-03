const express = require('express');
const controller = require("../Controller/authController")
const router = express.Router();

router.get('/auth', authentication, controller.getAuth)
router.post('/auth', controller.postauth)


function authentication(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        // console.log(bearerHeader)
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        // console.log("tsetign", bearerToken)
        req.body.token = bearerToken;
        next()
    }
    else {
        res.sendStatus(403);
    }
}

module.exports = router;

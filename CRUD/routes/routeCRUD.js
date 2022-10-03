const express = require('express');
const router = express.Router();
const controller = require("../Controller/crudController")

router.get('/', controller.getReq)
router.post('/', controller.postReq)
router.put('/', controller.putReq)
router.delete('/', controller.deleteReq)

module.exports = router;

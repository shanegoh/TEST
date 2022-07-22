var express = require('express');
var public_router = express.Router();
const multer = require('multer');
const formData = multer();

// Public Access
public_router.post('/test', formData.fields([]), function (req, res) {
    console.log(req.body.text)
    return res.send({'message' : 'success'})
});

module.exports = public_router;
const express = require('express');
const path = require('path');

const router = new express.Router();

router.route("/", function(req,res){
    console.log("there")
    res.json("here")
    //res.sendFile(path.join(__dirname, "../client/VR_Components/vr/index.html"))
});
module.exports = router;

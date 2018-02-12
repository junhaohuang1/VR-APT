const express = require('express');
const path = require('path');
const sceneController = require("../controller/sceneController")

const router = new express.Router();

router.route("/")
    .get(sceneController.findAll)
    .put(sceneController.update)

// router.get("/", function(err,res){sceneController.findAll})
// router.put("/", sceneController.update)


module.exports = router;

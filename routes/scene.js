const express = require('express');
const path = require('path');
const sceneController = require("../controller/sceneController")

const router = new express.Router();

router.route("/")
    .get(sceneController.findAll)
    .put(sceneController.update)

// router.get("/", function(err,res){sceneController.findAll})
// router.put("/", sceneController.update)
router.post("/image/:id", function(req, res) {
  var newNote = new Note(req.body);
  newNote.save(function(error, data) {
    if (error) throw error;
    Scene.findOneAndUpdate({
        "_id": req.params.id
      }, {
        $push: {
          "note": data._id
        }
      }, {
        new: true
      })
      .exec(function(error, data) {
        if (error){
          res.sendStatus(400).json({
            message:"Please check your comments"
          })
        } else {
          res.sendStatus(200);
        }
      });
  });
});

router.get("/image", function(req,res){
  Scene.find()
  .populate("note")
  .then(data => res.json(data))
  .catch(err => res.status(400).json({
    message: err
  }))

})

router.post("/image", function(req,res){
  var newImage = new Scene(req.body)
  newImage.save(function(err, doc) {

    if (err) {
      console.log(err);
      res.sendStatus(400).json({
        message: err
      })
    } else {
      console.log(doc);
      res.sendStatus(200)
    }
  });

})

module.exports = router;

const express = require('express');
const path = require('path');
const sceneController = require("../controller/sceneController")

const router = new express.Router();

router.route("/")
    .get(sceneController.findAll)
    .put(sceneController.update)

// router.get("/", function(err,res){sceneController.findAll})
// router.put("/", sceneController.update)
// router.post("/image/:id"){
//   var newNote = new Note(req.body);
//   newNote.save(function(error, data) {
//     if (error) throw error;
//     Scene.findOneAndUpdate({
//         "_id": req.params.id
//       }, {
//         $push: {
//           "note": data._id
//         }
//       }, {
//         new: true
//       })
//       .exec(function(error, data) {
//         if (error) {
//           res.sendStatus(400).json({
//             message:"Please check your comment."
//           })
//         } else {
//           res.sendStatus(200)
//         }
//       });
//   });
// }

module.exports = router;

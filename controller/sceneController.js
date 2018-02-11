const db = require('../models')

module.exports = {
    findAll: function(req, res){
        db.Scene
          .find({name:"scene"})
          .then(data => res.json(data))
          .catch(err => res.status(422).json(err))
    },
    update: function(req, res){
        db.scene
          .findOneAndUpdate({name:"scene"}, function(err, doc){
              if(doc.length){
                  console.log(req.body)
                  doc.number = req.body
                  doc.save()
                  res.json("updated")
              }else{
                  db.scene.create(req.body);
                  res.json("added")
              }

          })

    }
}

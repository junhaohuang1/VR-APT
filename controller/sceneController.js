const db = require('../models')

module.exports = {
    findAll: function(req, res){
        db.Scene
          .find({name:"scene"})
          .then(data => res.json(data))
          .catch(err => res.status(422).json(err))
    }
    update: function(req, res){
        db.scene
          .findOneAndUpdate({name:"scene"}, req.body)
          .then(data => res.json(data))
          .catch(err => res.status(422).json(err))
    }
}

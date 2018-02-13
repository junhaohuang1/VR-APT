const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sceneSchema = new Schema({
    number: {type: Number},
    name: {type:String, unique:true},
    url:{type:String, unique:true},
    note: [{
      type: Schema.Types.ObjectId,
      ref: "Note"
    }]
})

const Scene = mongoose.model("Scene", sceneSchema);

module.exports = Scene;

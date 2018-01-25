// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var FriendSchema = new Schema({
  //buddy list
  buddyList: [
    {
    type: String
    }
  ],
  messages:[
    {
      user1: String,
      user2: String,
      imageLink: String
    }
  ]

});


var Friend = mongoose.model("Friend", FriendSchema);

// Export
module.exports = Friend;

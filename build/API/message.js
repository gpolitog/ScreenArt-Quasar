var mongoose = require("mongoose");
var MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: Number,
  email: String,
  message: String,
  time: {
    month: String,
    day: String,
    hour: String,
    minute: String
  }
})

var Message = mongoose.model("Message", MessageSchema);

module.exports = Message;

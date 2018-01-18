var mongoose = require("mongoose");
var MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  message: {
    type: String,
    required: false
  },
  time: {
    type: String,
    required: true
  },
  leadId: {
    type: String,
    required: true
  }
})

var Message = mongoose.model("Message", MessageSchema);

module.exports = Message;

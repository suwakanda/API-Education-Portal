const mongoose = require("mongoose");
const userSchema =  mongoose.Schema({
  img:{
      type:String
  },
  createdAt: {
      type: Date,
      default: Date.now,
    }
})
module.exports =  mongoose.model("Images",userSchema)
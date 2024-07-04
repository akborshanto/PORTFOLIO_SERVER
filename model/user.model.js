const mongoose = require("mongoose");
const userSchema = mongoose.Schema({

  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique:true,
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});
module.exports= mongoose.model('user',userSchema)//collection name
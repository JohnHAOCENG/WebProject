const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{
        type: String,
        requied: true,
        default: "newUser"
    },
    email:{
        type: String,
        requied: true,
        default: "newEmail"
    }
});


module.exports = mongoose.model("User",userSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{
        type: String,
        required: true,
        default: "newUser"
    },
    email:{
        type: String,
        required: true,
        default: "newEmail"
    }
});


module.exports = mongoose.model("User",userSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var snackSchema = new Schema({
    snackName:{
        type: String,
        required: true,
        default: "newSnack"
    },
    price:{
        type: String,
        required: true,
        default: "newPrice"
    },
    description:{
        type: String,
        required: true,
        default: "newDes"
    }
});


module.exports = mongoose.model("Snack",snackSchema);
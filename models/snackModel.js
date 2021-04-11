const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var SnackSchema = new Schema({
    snackName:{
        type: String,
        required: true,
        default: "newSnack"
    },
    photo:{
        type:String,
        required:true
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


module.exports = mongoose.model("Snack",SnackSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var VendorSchema = new Schema({
    name:{
        type: String,
        // required: true,
    },
    location:{
        type:{
            type:String,
            enmu: ['Point'],
        },
        coordinates:{
            type:[Number]
        }
    },
    password:{
        type:String,
        required:true
    },
    textAddress:{
        type:String
    },
    parked:{
        type:Boolean,
        required:true,
        default:false
    }
});


module.exports = mongoose.model("Vendor",VendorSchema);
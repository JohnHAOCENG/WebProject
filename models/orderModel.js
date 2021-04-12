const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var OrderSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    vendor:{
        type:Schema.Types.ObjectId,
        ref:'Vendor'
    },
    snacks:{
        type:Array,
        default:[]
    },
    status:{
        type:String,
        default:'outstanding'
    },
    ratings:{
        type:Number
    },
    comment:{
        type:String
    }
},{timestamps:true});


module.exports = mongoose.model("Order",OrderSchema);
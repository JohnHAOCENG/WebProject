const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var OrderSchema = new Schema({
    customer:{
        type:Schema.Types.ObjectId,
        ref:"Customer"
    },
    vendor:{
        type:Schema.Types.ObjectId,
        ref:"Vendor"
    },
    snacks:{
        type:Array,
        default:[]
    },
    status:{
        type:String,
        default:"outstanding"
    },
    ratings:{
        type:Number
    },
    comment:{
        type:String
    }
},{timestamp:true});


module.exports = mongoose.model("Order",OrderSchema);
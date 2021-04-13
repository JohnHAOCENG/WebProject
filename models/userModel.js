const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
    givenName:{
        type: String,
        // required: true,
    },
    familyName:{
        type: String,
        // require: true,
    },
    location:{
        type:{
            type:String,
            enum: ['Point'],
        },
        coordinates:{
            type:[Number]
        }
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type:String,
        require:true
    }
});


module.exports = mongoose.model("User",userSchema);
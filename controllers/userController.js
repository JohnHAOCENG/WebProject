const bcryptjs = require("bcryptjs");


var User = require("../models/userModel");

exports.userRegister = function(req,res){
    const{givenName,familyName,email,password} = req.body;
    User.findOne({email:email}).then((user)=>{
        if(user){
            res.status(409).json({error:"Email already registerd!"})
        }else{
            const newUser = new User({
                givenName,
                familyName,
                email,
                password,
            })
            bcryptjs.genSalt(10,(err,salt)=>{
                bcryptjs.hash(newUser.password,salt,(err,hash)=>{
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save().then((user)=>{
                        res.json({
                            user:{
                                givenName:user.givenName,
                                familyName:user.familyName,
                                email:user.email,
                                password:user.password
                            }
                        })
                    })
                })
            })
        }
    })
}   

User.create
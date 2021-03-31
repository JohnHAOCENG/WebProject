
var User = require("../models/user");

exports.userRegister = function(req,res){
    User.findOne({email: req.body.email}).then((user)=>{
        if(user){
            res.status(409).json({error: "Email aleady registered!"})
        }else{
            const user = new User({
                name: req.body.name,
                email: req.body.email
            });
            user.save((err, postInfo)=>{
                if(err){
                    res.status(400).json({success: false, err});
                }else{
                    res.status(200).json({success: true, postInfo});
                }
            });
        }
    })
    // res.status(200).json({success: "true", message: "This is customer page"})
}

var Snack = require("../models/snackModel");

exports.addSnack = function(req,res){
    Snack.findOne({snackName: req.body.snackName}).then((snack)=>{
        if(snack){
            res.status(409).json({error: "Snack already added!"})
        }else{
            const snack = new Snack({
                snackName: req.body.snackName,
                price: req.body.price,
                description: req.body.description,
            });
            snack.save((err, postInfo)=>{
                if(err){
                    res.status(400).json({success: false, err});
                }else{
                    res.status(200).json({success: true, postInfo});
                }
            });
        }
    })
}


exports.getSnackMenu = function(req,res){
    Snack.find().exec((err,snacks) =>{
        if (err){
            res.status(400).json({success:false,err:err})
        }else{
            res.status(200).json({success:true,snacks:snacks})
        }
    })
}

exports.getSnackDetail = function(req,res){
    Snack.findById(req.params.id,function(err,snack){
        if(snack){
            res.status(200).json({success:true,snack:snack})
        }else{
            res.status(400).json({success:false,err:err})
        }
    })
}

Snack.create
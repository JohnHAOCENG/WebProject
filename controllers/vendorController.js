const bcryptjs = require("bcryptjs");


var Vendor = require("../models/vendorModel");

exports.vendorRegister = function(req,res){
    const{name,password} = req.body;
    Vendor.findOne({name:name}).then((vendor)=>{
        if(vendor){
            res.status(409).json({error:"Vendor already registered!"})
        }else{
            const newVendor = new Vendor({
				name,
                password,
            })
            bcryptjs.genSalt(10,(err,salt)=>{
                bcryptjs.hash(newVendor.password,salt,(err,hash)=>{
                    if(err) throw err;
                    newVendor.password = hash;
                    newVendor.save().then((vendor)=>{
                        res.json({
                            vendor:{
                                name:vendor.name,
                                password:vendor.password
                            }
                        })
                    })
                })
            })
        }
    })
}   

exports.vendorParkPost = function(req,res){
    Vendor.findById(req.param.id).then((vendor)=>{
        if(!vendor){
            res.status(409).json({error:"Vendor not exist!"})
        }else{
			Vendor.findByIdAndUpdate(
				req.params.id,
				{
					textAddress:req.body.textAddress,
					parked:req.body.parked,
					location:{type:"Point", coordinates:req.body.location}
				},
				{new: true},
				function(err, updateVendor){
					if (err){
						res.status(404).json({success:false,err:err})
					}else{
						res.status(200).json({success:true,updateVendor:updateVendor})
					}
				}
			)
        }
    })
}   

Vendor.create
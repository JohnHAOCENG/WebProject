var Order = require("../models/orderModel");



exports.orderListGet = function(req,res){
    if(req.params.vendorID.match(/^[0-9a-fA-F]{24}$/)){
        Order.find({vendor:req.params.vendorID,status:req.query.status}).then((order)=>{
            if(order.length==0){
                res.status(404).json({success:false,err:"No Orders Exists!"})
            }else{
                res.status(200).json({success:true,order:order})
            }
        })
    }
}

exports.orderUpdatePost = function(req,res){
    Order.findById(req.params.id).then((order)=>{
        if(!order){
            res.status(404).json({err:"Order Not Founded"})
        }else{
            Order.findByIdAndUpdate(
                req.params.id,
                {snacks: req.body.snacks,status:req.body.status},
                {new:true},
                function(err,updateOrder){
                    if(err){
                        res.status(404).json({success:false,err:err})
                    }else{
                        res.status(200).json({success:true,order:updateOrder})
                    }
                }
            )
        }
    })
}

exports.orderCreatPost = function(req,res){
    const order = new Order({
        user:req.body.user,
        vendor:req.body.vendor,
        snacks:req.body.snacks
    })
    order.save((err,createOrder)=>{
        if(err){
            res.status(404).json({success:false,err:err})
        }else{
            res.status(200).json({success:true,order:createOrder})
        }
    })
}
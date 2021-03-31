
// most codes are here


// the customer details
exports.customersDetailGet =function(req,res){
    res.status(200).json({success: "true", message: "This is customer page"})
}

// the cusotmer login details
exports.customersLoginPost =function(req,res){
    res.status(200).json({success: "true", message: "login page"})
}
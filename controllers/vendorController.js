exports.vendorStatusPageGet =function(req, res){
	res.status(200)
	res.write('<h1> Vendor status page </h1>')
	res.write('<p> Please tell us where you van are </p>')
	res.write('<textarea name="Location" id="" cols="50" rows="1"></textarea>')
	res.write('</br>')
	res.write('<label for="status"> status </label>')
	res.write('<input type="checkbox" name="status:ready-for-orders"> <br />')
    res.write('<a href="/vendor/order"><input type="submit" value="Send"></a>')
	res.end()
}

exports.vendorOutstandingOrderPageGet =function(req, res){
	res.status(200)
	res.write('<h1> Vendor outstanding order </h1>')
	res.write('<p> write something here</p>')
	res.end()
}
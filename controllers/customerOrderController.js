const fs = require('fs');

exports.customerOrderPageGet =function(req, res){
	res.status(200)
	res.setHeader('Content-type', 'text/html');
    var html = fs.readFileSync('./static/menuPage.html');
    res.write(html);
    res.end();
}


exports.customerOrderConfirmGet =function(req, res){
	res.status(200)
	res.write('<h1> Order Derails </h1>')
	res.write('<li> <a href="/customer">				    Back to Home Page		</a> </li>')
	res.write('<p> Order No: </p>')
	res.write('<p> Address: </p>')
	res.write('<p> Food Details: </p>')
	res.write('<p> Price: </p>')
	res.write('<p> Status: </p>')
	res.write('<p> Timer: </p>')
	res.write('<li> <a href="/customer/order/ongoing">Confirm and Pay</a> </li>')
	res.end('<li> <a href="/customer/order"> Cancel </a> </li>')
}

exports.customerSnackDetailsGet =function(req, res){
	res.status(200)
	res.write('<h1> Details of one food </h1>')
	res.write('<p> The user clicked on a food. Display details of that food here. </p>')
	res.write('<li> <a href="/customer/order">Back to menu</a> </li>')
	res.end('<p> This food is: ' + req.params.snack + '</p>')
}

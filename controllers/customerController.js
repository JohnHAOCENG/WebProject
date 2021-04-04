
// most codes are here

//let the customer enter the location details
exports.customerLocationGet =function(req,res){
	res.status(200)
	res.write('<h1> Home page </h1>')
	res.write('<a href="/customer/login"><button>Login</button></a>')
	res.write('&nbsp;')
	res.write('<a href="/customer/register"><button>Register</button></a>')
	res.write('</br>')
	res.write('<p> Before we began</p>')
	res.write('<p> Please tell us where you are </p>')
	res.write('<textarea name="Location" id="" cols="50" rows="1"></textarea>')
	res.write('</br>')
	res.end('<a href="/customer/location"> <button> Confirm </button> </a>')
}



// the customer choose location
exports.customerChooseLocationGet =function(req,res){
    res.status(200)
	res.write('<h1> Location page </h1>')
	res.write('<p> User can click on the location to the order page </p>')
	res.write('<a href="/customer/login"><button>Login</button></a>')
	res.write('&nbsp;')
	res.write('<a href="/customer/register"><button>Register</button></a>')
	res.write('</br>')
	res.write('<ul>')
	res.write('<li> <a href="/customer/order">location 1</a> </li>')
	res.write('<li> <a href="/customer/order">location 2</a> </li>')
	res.write('<li> <a href="/customer/order">location 3</a> </li>')
	res.write('<li> <a href="/customer/order">location 4</a> </li>')
	res.write('<li> <a href="/customer/order">location 5</a> </li>')
	res.write('</ul>')
	res.end('<p> please choose a nearby location </p>')
}



// the customer login page
exports.customerLogInGet =function(req,res){
    res.status(200)
	res.write('<h1> Login Page </h1>')
	res.write('<li> <a href="/customer">Back to Home Page</a> </li>')
	res.write('<a href="/customer/register"><button>Register</button></a>')
	res.write('</br>')
	res.write('User-name: </br>')
	res.write('<textarea name="user-name" id="" cols="50" rows="1"></textarea> </br>')
	res.write('Password: </br>')
	res.write('<textarea name="pass-word" id="" cols="50" rows="1"></textarea>')
	res.write('<p> Forget your password? </p>')
	res.end('<a href="/customer"> <button> LOG IN </button> </a>')
}

// the customer register page
exports.customerRegisterGet =function(req,res){
    res.status(200)
	res.write('<h1> Register Page </h1>')
	res.write('<li> <a href="/customer">Back to Home Page</a> </li>')
	res.write('Family Name: </br>')
	res.write('<textarea name="family name" id="" cols="50" rows="1"></textarea> </br>')
	res.write('Given Name: </br>')
	res.write('<textarea name="given word" id="" cols="50" rows="1"></textarea> </br>')
	res.write('Email Address: </br>')
	res.write('<textarea name="email address" id="" cols="50" rows="1"></textarea> </br>')
	res.write('Password: </br>')
	res.write('<textarea name="password" id="" cols="50" rows="1"></textarea> </br>')
	res.write('<p> must include letter and number, 8~16 digits</p>')
	res.write('Phone Number: </br>')
	res.write('<textarea name="phone number" id="" cols="50" rows="1"></textarea> </br>')
	res.write('Verify Code: </br>')
	res.write('<textarea name="verify code" id="" cols="50" rows="1"></textarea> </br>')
	res.end('<a href="/customer"> <button> CREATE </button> </a>')
}



// the customer login details
exports.customersLoginPost =function(req,res){
    res.status(200).json({success: "true", message: "login page"})
}
// Food Buddy server, with prototype HTML in the route handlers
const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const port = process.env.PORT ||8080
const app = express();
app.use(bodyParser.json());

const mongodb = require('./config/keys').mongoURL;
mongoose.
	connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true}).
	then(()=>console.log("MongoDB Connected ..."));


/* routers:  */
//const customer = require("./routes/customer");
//const user = require("./routes/user");
/* app:  */
//app.use('/customer', customer);
//app.use('/user', user);

app.get('/', (req, res) => {
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
	res.end('<a href="/customer"> <button> Confirm </button> </a>')
})



app.get('/customer', (req, res) => {
	res.status(200)
	res.write('<h1> Home page </h1>')
	res.write('<p> User can click on the location to the order page </p>')
	res.write('<input type="button" value="Login"    onclick= <a href="customer/login/"></a>')
	res.write('<input type="button" value="Register" onclick= <a href="customer/register"></a>')
	res.write('<ul>')
	res.write('<li> <a href="/order">location 1</a> </li>')
	res.write('<li> <a href="/order">location 2</a> </li>')
	res.write('<li> <a href="/order">location 3</a> </li>')
	res.write('<li> <a href="/order">location 4</a> </li>')
	res.write('<li> <a href="/order">location 5</a> </li>')
	res.write('</ul>')
	res.end('<p> please choose a nearby location </p>')
})



app.get('/customer/login', (req, res) => {
	res.status(200)
	res.write('<h1> Login Page </h1>')
	res.write('<li> <a href="/">Back to Home Page</a> </li>')
	res.write('<a href="/customer/register"><button>Register</button></a>')
	res.write('</br>')
	res.write('User-name: </br>')
	res.write('<textarea name="user-name" id="" cols="50" rows="1"></textarea> </br>')
	res.write('Password: </br>')
	res.write('<textarea name="pass-word" id="" cols="50" rows="1"></textarea>')
	res.write('<p> Forget your password? </p>')
	res.end('<a href="/customer"> <button> LOG IN </button> </a>')
})



app.get('/customer/register', (req, res) => {
	res.status(200)
	res.write('<h1> Register Page </h1>')
	res.write('<li> <a href="/">Back to Home Page</a> </li>')
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
})


app.get('/order', (req, res) => {
	res.status(200)
	res.write('<h1> Details of the order </h1>')
	res.write('<li> <a href="/">Back to Home Page</a> </li>')
	res.write('<p> The user clicked on a food. Display details of that food here. </p>')
	res.write('<li> <a href="/order/cappuccino">		Cappuccino		</a> </li>')
	res.write('<li> <a href="/order/latte">			Latte     		</a> </li>')
	res.write('<li> <a href="/order/flatwhite">		Flat White		</a> </li>')
	res.write('<li> <a href="/order/longblack">  	Long black		</a> </li>')
	res.write('<li> <a href="/order/fancybiscuit">	Fancy biscuit 	</a></li>')
	res.write('<li> <a href="/order/smallcake">	    Small cake		</a></li>')
	res.write('<li> <a href="/order/bigcake">	    Big cake		</a></li>')
	res.write('<li> <a href="/order/plainbiscuit">   Plain biscuit	</a></li>')
	res.write('</br>')
	res.end('<p> <a href="/order/confirm">			place the order	 </a> </p>')
})


app.get('/order/confirm', (req, res) => {
	res.status(200)
	res.write('<h1> Order Derails </h1>')
	res.write('<li> <a href="/">				    Back to Home Page		</a> </li>')
	res.write('<p> Order No: </p>')
	res.write('<p> Address: </p>')
	res.write('<p> Food Details: </p>')
	res.write('<p> Price: </p>')
	res.write('<p> Status: </p>')
	res.write('<p> Timer: </p>')
	res.write('<li> <a href="/order/ongoing">Confirm and Pay</a> </li>')
	res.end('<li> <a href="/order"> Cancel </a> </li>')
})

app.get('/order/order/ongoing', (req, res) => {
	res.status(200)
	// wait for you
})


app.get('/order/:snack', (req, res) => {
	res.status(200)
	res.write('<h1> Details of one food </h1>')
	res.write('<p> The user clicked on a food. Display details of that food here. </p>')
	res.write('<li> <a href="/order">Back to order</a> </li>')
	res.end('<p> Requested food is: ' + req.params.snack + '</p>')
})



/*------------------------------------------------------------------- */
app.get('/filter', (req, res) => {
	res.status(200)
	res.write('<h1> Food filter </h1>')
	res.write('<p> User can see the food filter page. They enter their filter details and press a Submit button to send the details. </p>')
	// post the filter
	res.write('<form method="post" action="/filter">')

	res.write('<label for="vegan"> vegan </label>')
	res.write('<input type="checkbox" name="vegan"> <br />')

	res.write('<label for="organic"> organic </label>')
	res.write('<input type="checkbox" name="organic"> <br />')

	res.write('<input type="submit" value="Send filter details">')
	res.end('</form>')
})

app.post('/filter', (req, res) => { // POST - user's food filter data
	res.status(200)
	res.write('<h1> Filter details posted </h1>')
	res.write('<p> The user has posted their filter details to the server. We should record details and forward the user to the home page, which is now filtered. They sent:</p>')
	res.write(JSON.stringify(req.body))
	res.end('<p> <a href="/">browse foods</a> </p>')
})

app.all('*', (req, res) => {  // 'default' route to catch invalid routes
	res.status(404).send('<p>invalid request</p>')
})

app.listen(port, () => {
	console.log('Food Buddy server listening for requests ...')
})


/**********************************************************************************/

// first version.

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/vendor', (req, res) => {
//     res.send('Hello World!, I am vendor')
//   })

// app.get('/customer', (req, res) => {
//     res.send('Hello World!, I am customer')
//   })

// app.get('/zhangyiweng', (req, res) => {
//     res.send('我太帅了')
//   })


// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

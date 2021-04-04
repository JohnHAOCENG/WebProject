// Food Buddy server, with prototype HTML in the route handlers
const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080
const app = express();
app.use(bodyParser.json());

const mongodb = require('./config/keys').mongoURL;
mongoose.
	connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true}).
	then(()=>console.log("MongoDB Connected ..."));


/* routers:  */
/*customer main path: register, login, update(profile) */
const customer = require("./routes/customerRoute");
/*customer order path: menu(snackDetails), createOrder, confirm, updateOrder, cancelOrder*/
const customerOrder = require("./routes/customerOrderRoute");
/*vendor main path: park(location)AndsStatus, outstanding orders/orderDetails/fulfilled? */
const vendor  = require("./routes/vendorRoute"); 

const user = require("./routes/userRoute");


/* app:  */
app.use('/customer', customer);
app.use('/customer/order', customerOrder);
app.use('/vendor',vendor);

app.use('/user', user);





app.get('/', (req, res) => {
	res.status(200)
	res.write('<h1>  Choose you role </h1>')
	res.write('</br>')
	res.write('<a href="/customer"><button>Customer</button></a>')
	res.write('&nbsp;')
	res.write('<a href="/vendor"><button>Vendor</button></a>')
	res.end('</br>')
})


app.get('/customer/order/ongoing', (req, res) => {
	res.status(200)
	// wait for you
})


/*------------------------------useless example------------------------------------- */
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
	console.log('Server listening for requests ...')
})

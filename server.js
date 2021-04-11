// Food Buddy server, with prototype HTML in the route handlers
const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080
const app = express();
app.use(bodyParser.json());

const mongodb = require('./config/key').mongoURL;

mongoose.
	connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true}).
	then(()=>console.log("MongoDB Connected ..."));




const user = require("./routes/userRoute");
const vendor  = require("./routes/vendorRoute"); 
const snack = require("./routes/snackRoute");
const order = require("./routes/orderRoute");



/* app:  */
app.use('/vendor',vendor);
app.use('/snack',snack);
app.use('/order',order);



/*test API eg */
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


app.all('*', (req, res) => {  // 'default' route to catch invalid routes
	res.status(404).send('<p>invalid request</p>')
})

app.listen(port, () => {
	console.log('Server listening for requests ...')
})

// //Food Buddy server using templates with injected data, hard-coded
// const express = require('express');
// const bodyParser = require('body-parser');
// const exphbs = require('express-handlebars');
// const mongoose = require('mongoose');
// const app = express();
// const port = process.env.PORT ||8080
// app.use(bodyParser.urlencoded({extended:true}))

// const db = require('./config/keys').mongoURL;
// mongoose.
// 	connect(db, { useNewUrlParser: true, useUnifiedTopology: true}).
// 	then(()=>console.log("MongoDB Connected ..."));

// app.engine('hbs', exphbs({
// 	defaultlayout: 'main',
// 	extname: 'hbs'
// }))

// app.set('view engine', 'hbs')


// app.get('/', (req, res) => {  // /index.html
// 	res.render('browse', {
// 		foods: [
// 			{id: 1, name: "Apple"},
// 			{id: 2, name: "Bread"},
// 			{id: 3, name: "Chocolate bar"},
// 			{id: 4, name: "Dates (fresh)"}
// 		]
// 	})
// })

// app.get('/food/:id', (req, res) => {
// 	res.render('showFood', {
// 		foodId: req.params.id
// 	})
// })

// app.get('/filter', (req, res) => {
// 	res.render('filter')
// })

// app.post('/filter', (req, res) => { // receives POST data - user's food filter 
// 	res.render('filterPost', {
// 		filterData: JSON.stringify(req.body)
// 	})
// })

// app.all('*', (req, res) => {  // 'default' route to catch user errors
// 	res.status(404).render('404')
// })

// app.listen(port, () => {
// 	console.log('Food Buddy server listening for requests ...')
// })




/**********************************************************************************/
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

const customer = require("./routes/customer");
const user = require("./routes/user");

app.use('/customer', customer);
app.use('/user', user);

app.get('/', (req, res) => {
	res.status(200)
	res.write('<h1> Home page </h1>')
	res.write('<p> User can browse a list of foods </p>')
	res.write('<ul>')
	res.write('<li> <a href="/food/1">food 1</a> </li>')
	res.write('<li> <a href="/food/2">food 2</a> </li>')
	res.write('</ul>')
	res.end('<a href="/filter"> set your food filter </a>')
})


app.get('/food/:id', (req, res) => {
	res.status(200)
	res.write('<h1> Details of one food </h1>')
	res.write('<p> The user clicked on a food. Display details of that food here. </p>')
	res.end('<p> Requested food id is: ' + req.params.id + '</p>')
})

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

//Food Buddy server using templates with injected data, hard-coded
const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const app = express();
const port = process.env.PORT ||8080

app.engine('hbs', exphbs({
	defaultlayout: 'main',
	extname: 'hbs'
}))

app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {  // /index.html
	res.render('browse', {
		foods: [
			{id: 1, name: "Apple"},
			{id: 2, name: "Bread"},
			{id: 3, name: "Chocolate bar"},
			{id: 4, name: "Dates (fresh)"}
		]
	})
})

app.get('/food/:id', (req, res) => {
	res.render('showFood', {
		foodId: req.params.id
	})
})

app.get('/filter', (req, res) => {
	res.render('filter')
})

app.post('/filter', (req, res) => { // receives POST data - user's food filter 
	res.render('filterPost', {
		filterData: JSON.stringify(req.body)
	})
})

app.all('*', (req, res) => {  // 'default' route to catch user errors
	res.status(404).render('404')
})

app.listen(port, () => {
	console.log('Food Buddy server listening for requests ...')
})







/**********************************************************************************/
// mongo version

// // Food Buddy server using templates with injected data from Mongo

// Express and Handlebars stuff
// const express = require('express')
// const bodyParser = require('body-parser')
// const exphbs = require('express-handlebars')
// const app = express();
// // Mongo stuff
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'FoodBuddy'

// app.engine('hbs', exphbs({
// 	defaultlayout: 'main',
// 	extname: 'hbs'
// }))

// app.set('view engine', 'hbs')

// app.use(bodyParser.urlencoded({extended:true}))

// app.get('/', async (req, res) => { // get list of foods, and render it
// 	try {
// 		const client = new MongoClient(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
// 		await client.connect()
// 		const db = client.db(databaseName)
// 		result = await db.collection('foods').find( {} ).toArray()
// 		res.render('browse', {"foods": result})	
// 		await client.close()
// 	} catch (err) {
// 		console.log(err)
// 	}

// 	// res.render('browse', {
// 	// 	foods: [
// 	// 		{id: 1, name: "Apple"},
// 	// 		{id: 2, name: "Bread"},
// 	// 		{id: 3, name: "Chocolate bar"},
// 	// 		{id: 4, name: "Dates (fresh)"}
// 	// 	]
// 	// })
// })


// app.get('/food/:id', (req, res) => { // food detail screen
// 	res.render('showFood', {
// 		foodId: req.params.id
// 	})
// })

// app.get('/filter', (req, res) => { // show filter page
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

// app.listen(8080, () => {
// 	console.log('Food Buddy server listening for requests ...')
// })

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

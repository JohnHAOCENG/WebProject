// stubs for Food Buddy routes
const express = require('express')
const app = express();

app.get('/', (req, res) => {
	res.send('<h1> Home page </h1>')
})

app.get('/food/:id', (req, res) => {
	res.send('<h1> Details of one food </h1>')
})

app.get('/filter', (req, res) => {
	res.send('<h1> Food filter </h1>')
})

app.post('/filter', (req, res) => {
	res.send('<h1> Filter details posted </h1>')
})

app.all('*', (req, res) => {  // 'default' route to catch user errors
	res.status(404).send('<p>invalid request</p>')
})

app.listen(8080, () => {
	console.log('Food Buddy server is listening for requests ...')
})

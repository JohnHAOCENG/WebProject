const express = require('express')
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/static/' + 'index.html')
})

app.get('/food/:id', (req, res) => {
	res.sendFile(__dirname + '/static/' + 'showFood.html')
})

app.get('/filter', (req, res) => {
	res.sendFile(__dirname + '/static/' + 'filter.html')
})

app.post('/filter', (req, res) => { // receives POST data - user's food filter 
	res.send('stub: process incoming filter data')
})

app.get('*', (req, res) => {  // 'default' route to catch user errors
	res.status(404).send('<p>invalid request</p>')
})

app.listen(8080, () => {
	console.log('Food Buddy server listening for requests ...')
})

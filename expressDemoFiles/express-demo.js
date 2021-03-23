// demo from Node lecture converted to Express
const express = require('express')
const app = express();

app.get('/', (req, res) => {
	res.status(200).send('<p>user requested GET / </p>')
})

app.get('/aaa', (req, res) => {
	res.status(200).send('<p>user requested GET /aaa </p>')
})

app.get('/bbb', (req, res) => { // GET /bbb
	res.status(200).send('<p>user requested GET /bbb </p>')
})

app.post('/bbb', (req, res) => { // POST /bbb
	res.status(200).send('<p>user requested POST /bbb </p>')
})

app.all('*', (req, res) => {  // 'default' route to catch user errors
	res.status(404).send('<p>invalid request</p>')
})

app.listen(8080, () => {
	console.log('Express server listening for requests ...')
})

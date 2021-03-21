const express = require('express');
const app = express();
const port =rocess.env.PORT || 5000;
// for heroku const port = process.env.PORT || 5000
//localhost:3000        /customer

app.get('/', (req, res) => {
  res.send('Hello World! 牛逼啊')
})

app.get('/homepage', (req, res) => {
  res.send('Hello World, welcome to home')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
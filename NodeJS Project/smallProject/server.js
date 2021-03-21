
const express = require('express');
const app = express();
const port = 5000;

//localhost:3000        /customer

app.get('/', (req, res) => {
  res.send('Hello World! 牛逼啊')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
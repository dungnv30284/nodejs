const express = require('express')
const app = express()
const port = 3000

let a = 1;
app.get('/tin', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
const express = require('express')
const app = express()
const { PORT } = require('./util/config')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`)
})

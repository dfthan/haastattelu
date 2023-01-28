const express = require('express')
const app = express()
const { PORT } = require('./lib/config')
const connectDB = require('./database/db.js')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
connectDB()

app.use("/customers", require("./controllers/customers"))

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`)
})

module.exports = app;

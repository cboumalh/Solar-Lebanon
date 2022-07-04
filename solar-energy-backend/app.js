const express = require('express')
const axios = require('axios')
const app = express()
const port = 3004

const forecast = require('./routes/forecast.js')
const sunshine = require('./routes/sunshine.js')


app.use('/sunshine',sunshine)
app.use('/forecast',forecast)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
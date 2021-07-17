const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv/config')

const app = express()
app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.DB_CONNECTION,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(() => app.listen(5000, (req, res) =>{
console.log('Houston were connected')
}))
.catch(err => console.log(err))





app.get('/', (req, res) => {
  res.send('We have a response')
})


const countryRoute = require('./src/routes/countryRoutes')
app.use(countryRoute)
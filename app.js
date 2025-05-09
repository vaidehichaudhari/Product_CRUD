const express = require('express')
const app = express()
require('dotenv').config();

const productRoute = require('./Routes/productRoute')
const categoryRoute = require('./Routes/categoryRoute')
const brandRoute = require('./Routes/brandRoute')

const port = process.env.PORT
app.use(express.json())

app.use('/api/product',productRoute)
app.use('/api/category',categoryRoute)
app.use('/api/brand',brandRoute)

app.listen(port,()=>console.log(`Example app listing on port ${port}!`))
// http://localhost:7000/api/product/
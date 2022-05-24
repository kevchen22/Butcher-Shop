// REQUIRE Fest
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const method = require('method-override')
const app = express()
const PORT = 3000
const Product = require('./models/Product')

// ===== Connection to Database =====
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => console.log('Connected to Mongo'))

// Setup Engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ===== Middleware =====
app.use(method('_method'))
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'))
// Use Express middleware to parse JSON.
app.use(express.json())
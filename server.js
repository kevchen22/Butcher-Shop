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
app.use((req, res, next) => {
    console.log('I run for all the routes.')
    next()
})

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Index
app.get('/products', (req,res) => {
    Product.find({}, (err, allProducts) => {
        res.render('Index', {products: allProducts})
    })
})

// New
app.get('/products/new', (req, res) => {
    res.render('New')
})

// Delete
app.delete('/products/:id', (req,res) => {
    Product.findByIdAndDelete(req.params.id, (err) => {
        if(!err){
            res.status(200).redirect('/products')
        } else {
            res.status(400).json(err)
        }
    })
})

// Update
app.put('/products/:id', (req,res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedProduct) => {
        if(!err) {
            res.status(200).redirect('/products')
        } else {
            res.status(400).json(err)
        }
    })
})

// Create
app.post('/products', (req, res) => {
    Product.create(req.body, (err, createdProduct) => {
        res.redirect('/products')
    })
})

// Edit
app.get('/products/:id/edit', (req, res) => {
    Product.findById(req.params.id, (err, showProduct) => {
        if(!err) {
            res.render('Edit', {product:showProduct})
        } else {
            res.status(400).json(err)
        }
    })
})

// Show
app.get('/products/:id', (req, res) => {
    Product.findById(req.params.id, (err,showProduct) => {
        res.render('Show', {product:showProduct})
    })
})
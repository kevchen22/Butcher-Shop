const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    cut:  { type: String, required: true },
    price: { type: Number, required: true },
    expire: { type: String, required: true },
    img : { type: String },
    stock: { type: Number, required: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
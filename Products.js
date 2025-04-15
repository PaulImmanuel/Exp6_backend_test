// const mongoose = require('mongoose')

// const productSchema = new mongoose.Schema({
//     name: String,
//     quantity: Number,
//     price: Number
// })

// const ProductModel = mongoose.model('Products', productSchema, 'Products')
// module.exports = ProductModel

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        default: ''
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields automatically
})
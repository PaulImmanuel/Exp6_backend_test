const mongoose = require('mongoose')

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

// Create the Product model based on the schema
const ProductModel = mongoose.model('Products', productSchema, 'Products')

// Export the model so it can be used in other files (like server.js)
module.exports = ProductModel

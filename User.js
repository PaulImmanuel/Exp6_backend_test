const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: Number,
        required: true
    },
    consumer_number: {
        type: Number,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const UserModel = mongoose.model("Users", UserSchema)
module.exports = UserModel
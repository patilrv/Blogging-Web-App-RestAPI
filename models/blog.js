const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: {
        type: String,
        required: true
    },
    title: {
        type: String,
        unique: true,
        maxLength: 100,
        required: true,
    },
    description: {
        type: String,
        maxLength: 2000,
        required: true,
    }

}, { timestamps: true })


module.exports = mongoose.model('blog', blogSchema)
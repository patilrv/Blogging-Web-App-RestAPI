const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const validator = require("validator")

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error(" Email is invalid ")
            }
        }
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        minLength: 10,
        maxLength: 10,
        unique: true,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    name: {
        type: String,
        require : true
    }

}, { timestamps: true })


userSchema.pre("save", async function (req, res, next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})

module.exports = mongoose.model('user', userSchema)
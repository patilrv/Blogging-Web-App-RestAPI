const User = require('../models/user')
const Blog = require('../models/blog')

exports.profile = (req, res) => {
    console.log(req.userID);
    User.findOne({ email: req.userID })
        .then(result => {
            const data = {
                email: result.email,
                name: result.name,
                phone: result.phone,
                gender: result.gender,
            }
            res.status(200).json({
                Profile: data
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message:"Failed to load profile"
            })
        })
}

exports.myBlogs = (req, res) => {
    Blog.find({ email: req.userID })
        .then(result => {
            res.status(200).json({
                myBlogs: result
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}



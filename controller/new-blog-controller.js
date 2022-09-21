const mongoose = require('mongoose')
const Blog = require('../models/blog')

exports.newBlog = (req, res) =>{

    const blog = new Blog({
        _id: new mongoose.Types.ObjectId,
        userID: req.userID,
        title:req.body.title,
        description: req.body.description
    })

    blog.save()
    .then(result =>{
        return res.status(200).json({
            newBlogPosted: result
        })
    })
    .catch(err =>{
        console.log("Error In Blog Addition " + err);
        res.status(400).json({
            errorInBlogAddition: err,
            message: "bad request"
        })
    })

}
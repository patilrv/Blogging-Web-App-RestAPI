const Blog = require('../models/blog')

exports.getBlogs = (req, res) =>{

    Blog.find()
    .then(result =>{
        return res.status(200).json({
            Blogs: result
        })
    })
    .catch(err =>{
        console.log("Error In Fetching Blog data" + err);
        res.status(400).json({
            error: err,
            message: "bad request"
        })
    })

}
const Blog = require('../models/blog')

exports.deleteBlogPost = (req, res) =>{

    Blog.findOneAndDelete({_id : req.body._id,  userID: req.userID})
    .then(result =>{
        return res.status(200).json({
            message: "Blog Deleted.."
        })
    })
    .catch(err =>{
        console.log("Error In Blog Delete " + err);
        res.status(400).json({
            error: err,
            message: "bad request"
        })
    })

}
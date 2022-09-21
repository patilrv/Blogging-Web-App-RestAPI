const Blog = require('../models/blog')

exports.editBlogPost = (req, res) =>{

    Blog.findOneAndUpdate({_id : req.body._id,  userID: req.userID}, {
        $set : {
                _id: req.body._id,
                userID: req.userID,
                title:req.body.title,
                description: req.body.description ?? ''
        }
    })
    .then(result =>{
        return res.status(200).json({
            blogUpdated: result
        })
    })
    .catch(err =>{
        console.log("Error In Blog Edit " + err);
        res.status(400).json({
            errorInBlogAddition: err,
            message: "bad request"
        })
    })

}
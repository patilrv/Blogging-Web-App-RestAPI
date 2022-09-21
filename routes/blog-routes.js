const express = require('express')
const router = express.Router()

const authorizeUser = require('../authentication/auth-service')

const newBlog_controller = require('../controller/new-blog-controller')
const blogs_controller = require('../controller/blogs-controller')
const editBlog_controller = require('../controller/edit-blog-controller')
const deleteBlog_controller = require('../controller/delete-blog-controller')

// Create New Blog
router.post('/new-blog',authorizeUser, newBlog_controller.newBlog )

// Get Data of all Blogs
router.get('/', blogs_controller.getBlogs )

// Edit Blog Post
router.put('/edit-blog',authorizeUser, editBlog_controller.editBlogPost )

// Delete Blog Post
router.delete('/delete-blog',authorizeUser, deleteBlog_controller.deleteBlogPost )

module.exports = router
const express = require('express')
const router = express.Router()

const authorizeUser = require('../authentication/auth-service')
const user_controller = require('../controller/user-profile-controller')
const login_controller = require('../controller/login-controller')
const registration_controller = require('../controller/register-controller')



// User Register
router.post('/register', registration_controller.registration)

// User Login
router.post('/login', login_controller.login)

// User Profile
router.get('/get-profile',authorizeUser, user_controller.profile)

// User Blogs
router.get('/my-blogs',authorizeUser, user_controller.myBlogs)


module.exports = router

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwtKey = process.env.JWT_SECRETE

const User = require('../models/user')

exports.login = async (req, res) => {
    let email = req.body.email
    let password = req.body.password

    User.findOne({ email: email })
        .then(async function(result) {
            try{
                const isMatch = await bcrypt.compare(password, result.password)

                if (isMatch) {
        
                    const payload = {
                        is: result.id,
                        email: result.email,
                        gender : result.gender,
                        name: result.name
                    }
                    console.log(payload);
                    jwt.sign(payload, jwtKey, (err, token) => {
                        if(err){
                            return res.status(500).json({
                                status: "There is some issue try after some time"
                            })
                        }
                        return res.status(200).json({
                            status: "Login Successfull!!!",
                            authToken: token
                        })  
                    })
                    
                } else {
                    return res.status(400).json({
                        status: "Login Faild.  Invalid password"
                    })
                }
            }
            catch(err){
                return res.status(400).json({
                    status: "Invalid Login details"
                })
            }

        })
        .catch(err => {
            return res.status(500).json({
                status: "internal server error.."
            })
            console.log(err);
        })


}
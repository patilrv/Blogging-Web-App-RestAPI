const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()
const jwtKey = process.env.JWT_SECRETE

function authorizeUser(req, res, next) {
    var token = req.headers['authorization']
    if (token){
        token = token.split(' ')[1]
        // console.log(token);
        jwt.verify(token, jwtKey, (err, result) => {
            if(err){
                return res.status(401).json({
                    result: "Authorization failed.."
                })
            }else{
                // console.log(result);
                req.userID = result.email
                next()
            }
        })

    }else{
        return res.status(400).json({
            result: "bad request provide token with request"
        })
    }
    

    
}

module.exports = authorizeUser
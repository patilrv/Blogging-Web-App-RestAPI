const mongoose = require('mongoose')

const User = require('../models/user')

exports.registration = async (req, res, next) => {

    try {
        let flag = await User.findOne({ email: req.body.email });
        if (flag) {
            return res.status(400).json({
                message: "user is already exisits!"
            })
        }
        else {
            let user = new User({
                _id: new mongoose.Types.ObjectId,
                email: req.body.email,
                name: req.body.name,
                phone: req.body.phone,
                gender: req.body.gender,
                password: req.body.password,
            })
            await user.save()
            console.log(user);
            return res.status(200).json({
                message: "SignUp Successfull!!!"

            })
        }
    }
    catch (error) {
        console.log("SignUp error : " + error);

        return res.status(500).json({
            Errro: error.errors,
            message: "Registration failed"
        })
    }

}

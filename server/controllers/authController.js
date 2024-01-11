const User = require('../models/user')
const { hashPassword, comparePassword } = require('../helpers/auth')
const jwt = require('jsonwebtoken')
const test = async(req, res) => {
    res.json({ message: 'Test is working' });
}

//register endpoint
const registerUser = async(req, res) => {
    try {
        const {name, email, password} = req.body;
        //check if name is entered
        if(!name){
            return res.json({
                error:"Please enter fullname"
            })
        }
        //check if passwword is good
        if(!password || password.length < 6){
            return res.json({
                error: "Password is required and should be at least 6 characters long"
            })
        }
        //check email
        const exist = await User.findOne({email});
        if(exist) {
            return res.json({
                error: 'Email is taken already'
            })
        }

        const hashedPassword = await hashPassword(password)
        //create user in database
        const user = await User.create({
            name, 
            email, 
            password: hashedPassword
        })

        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}

//login endpoint
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body; 

        //check if user exists
        const user = await User.findOne({email});
        if(!user){
            return res.json({
                error: 'No user found'
            })
        }

        //check if password match
        const match = await comparePassword(password, user.password)
        if(match) {
            jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json(user)
            } )
           
        }if(!match){
            return res.json({
                error: 'Email or Password is incorrect'
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const getProfile = (req, res) =>{
const {token} = req.cookies
if(token){
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
        if(err) throw err;
        res.json(user)
    })
} else {
    res.json(null)
}
}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
}
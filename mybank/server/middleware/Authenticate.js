const jwt = require('jsonwebtoken')
const User = require('../models/UserSchema')

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken
        if(!token){
            console.log('not token provided')
        }
        const verifyToken = jwt.verify(token, "1234568979t")
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token })
        if (!rootUser) {
            // throw new Error('User not found')
            console.log('not rootUser')
        }
        req.token = token
        req.rootUser = rootUser
        req.userID = rootUser._id
        next()
    } catch (err) {
        res.status(401).json({message:'Unauthorized: no token'})
        console.log(err)
    }
}

module.exports = authenticate
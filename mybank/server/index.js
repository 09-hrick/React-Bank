const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs")
const User = require('./models/UserSchema')
const jwt = require('jsonwebtoken')
const cookieParser = require("cookie-parser")
const Transaction = require('./models/TransactionSchema');
const authenticate = require('./middleware/Authenticate');
// const dotenv=require("dotenv")
// dotenv.config({path:'./config.env'})
const app = express()
app.use(cookieParser())
app.use(express.json())
const port = 5000
const DB = `mongodb+srv://sanyam:sanyamMahajan@cluster0.yubvk8v.mongodb.net/bankingsystem?retryWrites=true&w=majority`
mongoose.set('strictQuery', true);
mongoose.connect(DB).then(() => {
    console.log("connection is successful")
}).catch((err) => {
    console.log((err))
})

app.get('/', (req, res) => {
    res.json({ message: "Hello Sanyam" })
})

app.post('/user/register', async (req, res) => {
    const { name, email, password } = req.body
    let UserExist;
    try {
        UserExist = await User.findOne({ email: email })
    } catch (err) {
        console.log(err)
    }
    if (UserExist) {
        return res.status(400).json({ message: "User already exist" })
    }
    const hashedPassword = bcrypt.hashSync(password, 12)
    const user = new User({
        name,
        email,
        password: hashedPassword,
        amount: 1000
    })
    try {
        await user.save()
    } catch (err) {
        console.log(err)
    }
    res.status(200).json({ user })
})

// function to generate cookie and login user
app.post('/user/login', async (req, res) => {
    const { email, password } = req.body
    let ExistingUser;
    let token;
    try {
        ExistingUser = await User.findOne({ email: email })
    } catch (err) {
        console.log(err)
    }
    if (!ExistingUser) {
        return res.status(400).json({ message: "User does not exist" })
    }
    const isPasswordCorrect = bcrypt.compareSync(password, ExistingUser.password)
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Password incorrect" })
    }
    try {
        var eDate = new Date(Number(new Date()) + 90000000);
        token = await ExistingUser.generateAuthToken()
        console.log(token)
        // var date = new Date()
        // date.setTime(date.now()+(days*24*60*60*1000))
        res.cookie('jwtoken', token, { expires: eDate, httpOnly:true })
        // await res.cookie.expires=false
        return res.status(200).json({ message: "login successful" })
    } catch (err) {
        console.log(err)
    }
})

app.post('/user/transaction',authenticate, async (req, res) => {
    // const token = res.cookie.jwtoken
    let user=req.rootUser
    console.log(user)
    try {
        const e2 = req.body.email
        const id1 = user._id
        let user2 = await User.findOne({ email: e2 })
        // console.log("Hello     ")
        // console.log(user2)
        const id2 = user2._id
        const amount = req.body.amount
        if(amount<=0){
            return res.status(400).json({ message: "please enter amount" })
        }
        if (user.amount < amount) {
            return res.status(400).json({ message: "you don't have enough balance" })
        }
        const transaction = new Transaction({
            from: id1,
            to: id2,
            amount: amount
        })
        const na1=Number(user.amount)-Number(amount);
        const na2=Number(user.amount)+Number(amount);
        await User.updateOne({ _id: user._id }, { $set: { amount: na1 } })
        await User.updateOne({ _id: user2._id }, { $set: { amount: na2} })
        await transaction.save()
        await user.save()
        await user2.save()
        user.transactions.push(transaction)
        user2.transactions.push(transaction)
        await user.save()
        await user2.save()
        res.status(200).send('successful transaction')
    } catch (err) {
        // console.log(err)
        res.status(400).send('error in transaction')
    }
})

app.post('/user/forgot',authenticate,async(req,res)=>{
    let user=req.rootUser
    let oldPassword=req.body.oldPassword
    let newPassword=req.body.newPassword
    const isPasswordCorrect = bcrypt.compareSync(oldPassword, user.password)
    if(!isPasswordCorrect){
        return res.status(401).json({message:"wrong password"})
    }
    const hashedPassword = bcrypt.hashSync(newPassword, 12)
    await User.updateOne({_id:user._id},{$set:{password:hashedPassword}})
    await user.save()
    return res.status(200).json({message:"password changed successfully"})
})

app.get('/user/getTransactions',authenticate,async(req,res)=>{
    let user=req.rootUser
    Transaction.find({$or:[{from:user._id},{to:user._id}]},function(err,transactions){
        res.json(transactions)
    })    
})

// app.get('/user/profile', async (req, res) => {
//     try {
//         const token = res.cookie.jwtoken
//         const verifyuser = jwt.verify(token, "1234568979t")
//         const user = User.findOne({ _id: verifyuser._id })
//         return res.status(200).json(user)
//     } catch (err) {
//         console.log(err)
//     }
// })

app.get('/user/profile', authenticate, (req, res) => {
    console.log(req.rootUser)
    res.send(req.rootUser)
})

app.listen(port, () => {
    console.log(`App is running at port:${port}`)
})
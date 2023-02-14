const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // transactions: [
    //     {
    //         transaction: {
    //             from: mongoose.Types.ObjectId,
    //             to: mongoose.Types.ObjectId,
    //             amount: Number
    //         }
    //     }
    // ],
    transactions: [
        {
            transaction: {
                type: mongoose.Types.ObjectId,
                ref: "Transaction"
            }
        }
    ],
    amount: {
        type: Number,
        default: 1000
    },
    tokens: [
        {
            token: {
                type: String
            }
        }
    ]
})

UserSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, "1234568979t")
        this.tokens = this.tokens.concat({ token: token })
        await this.save()
        return token
    } catch (err) {
        console.log(err)
    }
}

module.exports = mongoose.model('User', UserSchema)
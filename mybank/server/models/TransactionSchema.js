const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TransactionSchema = new Schema({
    from:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    to:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    amount:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Transaction', TransactionSchema)
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    user_name: {
        type: String,
        required: true,
        trim: true
    },
    mobile_no: {
        type: Number,
        required: true,
        unique: true
    }
}, {
    timestamps: true
})

userSchema.virtual('tournaments', {
    ref: 'Tournaments',
    localField: '_id',
    foreignField: 'users_reference'
})

const Users = mongoose.model('Users', userSchema)

module.exports = Users
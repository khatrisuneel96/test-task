const mongoose = require('mongoose');

const tournamentSchema = mongoose.Schema({
    tournament_name: {
        type: String,
        required: true,
        trim: true
    },
    users_reference : [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Users'
    }],
    created_date: {
        type: Date,
        default: Date.now()
    }
})

const Tournaments = mongoose.model('Tournaments', tournamentSchema)

module.exports = Tournaments
const mongoose = require("mongoose")

let ScoreSchema = mongoose.Schema({
    score: {
        type: Number,
        require: 'Score amount is required'
    },

    level: {
        type: Number,
        require: 'Level is required'
    },
    speed: {
        type: String,
        require: 'Speed is required'
    },

    playedAt: { type: Date, default: Date.now }
})

const Score = mongoose.model("scores",ScoreSchema)
module.exports = Score
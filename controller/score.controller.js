const mongoose = require("mongoose")
const Score = require("../model/score")

exports.getAllScores = (req,res) => {

    Score.find()
        .then(scores => {
            res.json({
                length: scores.length,
                data: scores
            })
        })

}
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

exports.saveScore = (req,res) => {
    let newScore = Score.create(req.body)
    .then( (saved) => {
        res.json({
            length: 1,
            message: 'New score is added' ,
            data: saved
        })
    })
}
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

exports.getTop10Scores = (req,res ) => {
    Score
        .find()
        .sort({score: -1})
        .limit(10)
        .exec()
        .then(top10Scores => {
            res.json({
                length: top10Scores.length,
                data: top10Scores
            })
        })
}
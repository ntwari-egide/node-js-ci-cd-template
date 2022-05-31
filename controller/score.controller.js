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

exports.createNewUser = (req, res) => {
    Score
        .find()
        .then( response => {
            res.json({
                length: response.length,
                data: response
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

exports.getscorestatistics  = async (req,res ) => {

    let count 

    await Score
        .find()
        .count()
        .exec()
        .then( counts => count = counts )

    let maximumlevel

    await Score
        .find()
        .sort({level: -1})
        .limit(1)
        .exec()
        .then(toplevel => maximumlevel = toplevel[0].level )

    let averagescore

    await Score
        .aggregate([
            {
                $group:
                {
                    _id: "_id",
                    Average: {$avg: "$score"}
                }
            }
        ])

        .exec()
        .then( average => {
            res.json({
                length: 1,
                data: {
                    max: maximumlevel,
                    total: count,
                    average: average[0].Average
                }
            })
        })

    
} 

exports.getMaximumLevelReached = async (req, res) => {

    Score
        .find()
        .sort({level: -1})
        .limit(1)
        .exec()
        .then(toplevel => {
            res.json({
                length: toplevel.length,
                data: toplevel.level
            })
        })

}
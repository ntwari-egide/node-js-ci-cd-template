const mongoose = require("mongoose")
const express = require("express")
const { getscorestatistics, getAllScores, saveScore, getTop10Scores } = require("../controller/score.controller")
const router = express.Router()

router.route("/")
    .get(getAllScores)
    .post(saveScore)

router.route("/get-top-10")
    .get(getTop10Scores)

router.route("/get-score-statistics")
    .get(getscorestatistics)

module.exports = router
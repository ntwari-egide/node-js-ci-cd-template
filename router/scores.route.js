const mongoose = require("mongoose")
const express = require("express")
const { getAllScores, saveScore, getTop10Scores } = require("../controller/score.controller")
const router = express.Router()

router.route("/")
    .get(getAllScores)
    .post(saveScore)

router.route("/get-top-10")
    .get(getTop10Scores)

module.exports = router
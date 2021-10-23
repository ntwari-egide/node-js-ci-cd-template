const mongoose = require("mongoose")
const express = require("express")
const { getAllScores, saveScore } = require("../controller/score.controller")
const router = express.Router()

router.route("/")
    .get(getAllScores)
    .post(saveScore)

module.exports = router
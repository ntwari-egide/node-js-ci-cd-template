const mongoose = require("mongoose")
const express = require("express")
const { getAllScores } = require("../controller/score.controller")
const router = express.Router()

router.route("/")
    .get(getAllScores)


module.exports = router
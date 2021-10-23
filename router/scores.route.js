const mongoose = require("mongoose")
const express = require("express")
const router = express.Router()

router.route("/")
    .get((req,res ) => {
        res.json({
            data: "This is the example of returning data"
        })
    })


module.exports = router
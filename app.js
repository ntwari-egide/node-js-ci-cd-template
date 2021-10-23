require("./model/db")
const express = require("express")
const app = express();
// const cabinetRouter = require("./routers/cabinet.route")
var cors = require('cors')
const morgan = require("morgan")

//body parser for reading the body
app.use(express.json({limit: '10kb'}));
app.use(cors())
if(process.env.NODE_ENV==="development"){
    app.use(morgan("dev"));
}
// Global middlewares
// app.use("/api/v1/scores",cabinetRouter)

module.exports = app
require("./model/db")
const express = require("express")
const ScoresRouter = require("./router/scores.route")
var cors = require('cors')
const morgan = require("morgan")
const swaggerUi = require('swagger-ui-express');
const { swaggerDocument, options } = require("./swagger");


const app = express();

// swagger documentation

//body parser for reading the body
app.use(express.json({limit: '10kb'}));
app.use(cors())
if(process.env.NODE_ENV==="development"){
    app.use(morgan("dev"));
}
// Global middlewares
app.use("/api/v1/scores",ScoresRouter)
app.use('/api-docs', swaggerUi.serve)
app.get('/api-docs', swaggerUi.setup(swaggerDocument, false, options, ".swagger-ui .topbar { background-color: '#0A3A40' }"));

module.exports = app
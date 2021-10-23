const mongoose = require("mongoose")
const app = require("./app")

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`The app running at the port ${port} ...`);
});
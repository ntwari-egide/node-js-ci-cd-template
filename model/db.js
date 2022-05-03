const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://ntwari:123@cluster0.y3jhx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if(!err) console.log("MongoDb Connection is currently being run ")
    else{
        console.log("Error : "+err);
    }
});
const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://root:edaedaeda@cluster0.ulkpq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if(!err) console.log("MongoDb Connection is currently being run ")
    else{
        console.log("Error : "+err);
    }
});
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//const uri = "mongodb+srv://<cluster-username>:<user-password>@quote-app.ba0sr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

/*mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB Connected')
  })
  .catch(err => console.log(err))
*/

// create our express app
const app = express()

// middleware
app.use(bodyParser.json())

// routes
app.get("/", (req,res)=>{
    res.send("my home page dey show sha")
})

//start server
app.listen(3000, ()=>{
    console.log("listeniing at port:3000")
}) 
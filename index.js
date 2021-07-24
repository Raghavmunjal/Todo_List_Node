const express = require("express");
const mongoose=require("mongoose");
const path=require("path");

const app = express();

//Body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.set("view engine","ejs");

//static folder
app.use(express.static(path.join(__dirname,"public")))

//routes
app.use(require("./routes/router"));

//Mongoose
const url="mongodb://localhost/todo"
mongoose.connect(url,({
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
}))


//listening on port
app.listen(5000,()=>{
    console.log("server started")
})
const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static('public'));

app.get("/",async(req,res)=>{
    res.render("index.ejs");
})




app.listen(3000,()=>{
    console.log("Listening on port 3000")
})


const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

const accountData = fs.readFileSync("./src/json/accounts.json", {
  encoding: "utf8",
  flag: "r",
});
const accounts = JSON.parse(accountData);
const userData = fs.readFileSync("./src/json/user.json", {
  encoding: "utf8",
  flag: "r",
});
const users = JSON.parse(userData);

app.get("/", (req, res) =>
  res.render("index", { title: "Account Summary", accounts: accounts })
);

app.get("/savings",(req,res)=>{
    app.render("account.ejs",{accounts:accounts.saving});
})

app.get("/checking",(req,res)=>{

})

app.get("/credit",(req,res)=>{

})

app.get("/profile",(req,res)=>{
    app.render("profile.ejs",{user: users[0]});
})


app.listen(3000, () => {
  console.log("Listening on port 3000");
});

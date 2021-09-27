const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.port || 3000

const staticPath = path.join(__dirname,'../public' )
const viewspath = path.join(__dirname,'../template/views')
const partialspath =  path.join(__dirname,'../template/partials')
app.use(express.static(staticPath))

app.set('view engine', 'hbs');
app.set("views",viewspath)
 hbs.registerPartials(partialspath)
 


app.get("/",(req,res)=>{
    res.render("index")
})



app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.render("error")
})



app.listen(port)

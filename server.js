import express from "express"
import cors from 'cors'
const app=express()
app.use(cors())
app.get("/oliver", function(req, res){
    res.send("js sucks")
})
app.get("/", function(req, res){
    res.send("python > js")
})




app.listen(3000, function(){
    console.log("backend")
})
const express=require("express")
require("dotenv").config()

const app=express()


const PORT=process.env.PORT||8400

app.get("/",(req,res)=>{
    res.send("Hello from Backend")
})

app.get("/about",(req,res)=>{
    res.send("about page")
})

app.listen(PORT,()=>{
    console.log(`Listening Port ${PORT}`)
})
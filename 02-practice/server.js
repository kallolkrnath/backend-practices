// npm init -y // npm i express // npx nodemon file.js [In the terminal]

const express = require('express');

const app = express() // create server instance

// req - access data from forntend to backend.
// res - send data from backend to frontend.
app.get("/",(req,res)=>{
    res.send("Hello World")
}) 

app.get("/about",(req,res)=>{
    res.send("Hello World On About Page.")
})


app.listen(3000) // http://localhost:3000/
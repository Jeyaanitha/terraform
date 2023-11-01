const express = require("express")

var app=express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))


const router = require("./router/vpcRouter")
app.use("/api/v1",router)


const port = 8000
//server port 
app.listen(port,()=>{
    console.log("Server has started successfully")
})

require('./connection/database')

//import express
const express=require("express");
const path=require("path");
const bodyParser=require("body-parser"); //For accessing body
const router=require("./userRouter");

//save express in a variable named app
const app=express();
const PORT=4000;
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use("/api/v1", router);


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"));
});




app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`)
});

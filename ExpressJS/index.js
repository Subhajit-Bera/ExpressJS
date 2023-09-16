//import express
const express=require("express");
const path=require("path");
const bodyParser=require("body-parser"); //For accessing body

//save express in a variable named app
const app=express();
const PORT=4000;
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());


//Sending response 
// app.get("/",(req,res)=>{
//     res.send("<h1>HOME PAGE</h1>");
// });


//Sending html file as response
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"));
});


app.post("/api/v1/register",(req,res)=>{
    const userName=req.body.name;
    const userEmail=req.body.email;
    const userPassword=req.body.password; //In case of password we will use bycrypt to convert password into hashcode and send it to database

    res.json({
        success:true, //data send successfully
        name: userName,
        email:userEmail,
        password:userPassword
        //Here we sending data just for testing,
        //but basically we create transfer the data into database and create a object

    })
    
})

app.listen(PORT,()=>{

    console.log(`Server is running on Port ${PORT}`)
});

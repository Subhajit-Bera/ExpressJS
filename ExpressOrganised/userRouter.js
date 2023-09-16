//For setting the routes

const express=require("express");
const router=express.Router();
const registerUser=require("./userController");

//    /api/v1 -> this portion of the url is same for all the routes so we use it in->app.use("/api/v1",route)[see index.js]

router.route("/register").post(registerUser);

// router.route("/register").post(registerUser).get(func_name)-> we can also add .delete and put also to the same url

router.route("/product").delete(registerUser);

module.exports=router;

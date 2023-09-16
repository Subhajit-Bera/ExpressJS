//It will contain the functions need to be run when a particular route will get accessed

const registerUser=(req,res)=>{
    const userName=req.body.name;
    const userEmail=req.body.email;
    const userPassword=req.body.password; //In case of password we will use bycrypt to convert password into hashcode and send it to database

    res.json({
        success:true, //data send successfully
        // name: userName,
        // email:userEmail,
        // password:userPassword
        //Here we sending data just for testing,
        //but basically we create transfer the data into database and create a object

    })
    
};

module.exports=registerUser;
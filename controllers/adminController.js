const User =  require("../models/userModels");
const bcrypt = require('bcrypt');
const session = require('express-session');
const nodemailer = require("nodemailer");
const {setUser} = require("../service/auth");

const deleteUserByAdmin = async(req,res)=>{
try{
    const id = req.params.id;
   console.log(id);
   const user_detail = await User.findOne({_id:id}); 
   if(!user_detail){
          res.send("No user with this id");
   }
 const deletedUser=   await User.deleteOne({_id:id});
   res.send( deletedUser);
} 
catch(error)
{ 
     console.log("User not found");

}


}

const getAllUserData = async(req,res)=>{
    
  //   const allData = User.find({email:"tushar@gmail.com"})
  //   .select({name:1})
  //   res.json(allData);

  console.log('----------------------------1111')
  // console.log(req);
  // console.log(res);
  User.find({}).then((data)=>{
      console.log('------------------------222')
      console.log(res)
      
      res.status(200).json(data)
      
  }).catch((error)=>{
      console.log('-----------------------333')
      // res.status(400).json({error:error})
  })


}

module.exports = {
    deleteUserByAdmin,
    getAllUserData
}
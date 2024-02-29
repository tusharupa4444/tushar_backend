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

module.exports = {
    deleteUserByAdmin
}
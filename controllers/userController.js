 const User =  require("../models/userModels");
 const bcrypt = require('bcrypt');
 const session = require('express-session');
 const nodemailer = require("nodemailer");
 const {setUser,setAdmin} = require("../service/auth");
 const EventEmitter = require("node:events");

 const emittor = new EventEmitter();


 const securePassword = async(password)=>{
try{

  const passwordHashed=  await bcrypt.hash(password , 10);

  return passwordHashed;

} catch (error){
   console.log(error.message);
}

 }

 const loadRegister = async(req,res)=>{

    try{

        res.render('registration');

    }
    catch(error){
        console.error(error);
    }
 }

 //for sending mail
 const sendVerifyMail = async(name,email,user_id)=>{

    try{
        const transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            post:587,
            secure:false,
            requireTLS:true,
            auth:{
                user:'youtushar@gmail.com',
                pass:'njwolektqosxhlqm'

            }

        });
        const mailOptions = {
            from:'youtushar@gmail.com',
            to:email,
            subject:'for verification',
            html:'<p>Hi ' + name + ', please click on <a href="http://localhost:3000/verify?id=' + user_id + '">Verify</a> your mail</p>'
        }

        transporter.sendMail(mailOptions,function(error,info){
             if(error){
                console.log("This is verifyeial method console",error);
             }
             else{
                console.log("email has been sent",info.response);
             }

        })

    }catch(error){
          console.log(error.message);
    }
 }

 const verifyMail  = async(req,res)=>{
    try{
       const updateInfo =  await User.updateOne({_id:req.query.id},{ $set:{ is_verified:1}});


       console.log("This is verify mail console log",updateInfo);
        res.render('emailVerify');

    } catch (error){
        console.log(error.message);
    }
 }


 const insertUser = async(req,res)=>{
    console.log("Tushar.............................");
    //  console.log("###########################",req);
    console.log(req.body,"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    try{
         const spassword = await securePassword(req.body.password);
        const user = new User({
            name:req.body.name,
            email:req.body.email,
            mobile:req.body.mobile,
            password:spassword,
            is_admin:req.body.is_admin,
            is_verified:req.body.is_verified
            
   });

   console.log(user+"**************************************");

    const userData = await user.save();
    
   console.log("Saved the user" ,userData);

   if(userData){

    sendVerifyMail(req.body.name,req.body.email,userData._id);

    res.render('registration',{message:"Ypur registrartion has been successfull"});

   }

   else res.render('registration',{message:"Ypur registrartion has been failed"});
    //  res.send("just to check"+req.body.password+req.body.name+req.body.mobile+req.body.email+req.body.is_admin);
     }
      catch(error){
        console.log(error);
    }

 }

const loginLoad = (req,res)=>{
    try{

        res.render('login');
    } catch(error) {
        console.log(error.message);
    }
 } 

 const verifyLogin = async(req,res)=>{
    try{
        const email = req.body.email;
        const password= req.body.password
      const userData = await  User.findOne({email:email});

      if(userData){
       const passwordMatch = await bcrypt.compare(password,userData.password);
       
       if(passwordMatch){
        if(userData.is_verified === 0){
            res.render('login',{message:"Please verify your mail "});

           

        }
        else {
            
             
            if(userData.is_admin===1) {
                const token = setAdmin(userData);
                res.cookie("uid",token);
            
            }

           else{  const token = setUser(userData);
            res.cookie("uid",token);
           }

             res.redirect('/home');
        }

       
       }
       else{
        res.render('login',{message:"Email and passwird is incorrect"});
       }


      }
      else{
        res.render('login',{message:"No account with this emial found"});
      }

        
      
    //   res.render('login');

    } catch(error) {
        console.log(error.message);
    }
 }

 const specilAccess = async(req,res)=>{
    try{

        res.render('specialAccess');
    }catch(error){
        console.log(error);
    }
 }

 const logout = async(req,res)=>{
    try{
           res.clearCookie('uid');
           console.log("logged out successfully..........")
          res.render('login');
          emittor.emit(logout);
    } catch(error){
        console.log(error);

    }
 }

 emittor.on(logout,()=>{
    // console.log("U have been logged out");
    console.log("You have been logged out of the App Successfully");
 })






 const loadHome = async(req,res)=>{

    try{
res.render('home');
    }catch(error){
        console.log(error.message);

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


 const getLimitedData = async(req,res)=>{
    const page = req.query.p || 0;
    const userPerPage = 2

    const users = [];
    let list ;
try{
   list=  User.find({}).then((data)=>{
    console.log(data);}
  )
  .sort({name:1});

  res.status(list);


    console.log("%%%%%%%%%%%%%%%%%%",list);


    // console.log(JSON.stringify(list));
    console.log("##############tushar",list);
    list?.forEach(user => users.push(user))
    .then(() =>{
        res.status(200).json(books)
    })
    .catch(()=>{
        res.status(500).json({error:"Could not fetch the documents"})
    }
    )
}
    
    catch(err){
        console.log(err);
    }
    


    
 }
 
 module.exports ={
    loadRegister,
    insertUser,
    loginLoad,
    verifyLogin,
    loadHome,
    verifyMail,
    specilAccess,
    logout,
    getAllUserData,
    getLimitedData
 }

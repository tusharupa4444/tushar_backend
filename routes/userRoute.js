const express = require('express');

const user_route = express();

const multer = require("multer");

const config = require("../config/config");

user_route.set('view engine', 'ejs');
user_route.set('views', './views/users');

const userController = require("../controllers/userController");

const middleware= require("../middleware/auth");

const bodyParser = require('body-parser');
const session = require('express-session');
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended:true}));
user_route.use(session({secret:config.sessionSecret}));

const cookieParser = require('cookie-parser');
user_route.use(cookieParser());

// user_route.use(express.json());

// const path = require("path");

// const storage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,path.join(__dirname,'../public/publicImages'));

//     },
//     filename:function(req,file,cb){
//         const name = Date.now()+'-'+file.originalname;
//         cb(null,name);

//     }
// }) ;

// const upload = multer({storage:storage});

user_route.get('/register',userController.loadRegister);

// user_route.post('/register',function(req,res){
//     console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"+req.body.password);
//     res.send("This is post req"+req.body.password);
// });
user_route.post('/register',userController.insertUser);

user_route.get('/',userController.loginLoad);
user_route.get('/login',userController.loginLoad);

user_route.post('/login',userController.verifyLogin);

user_route.get('/home',userController.loadHome);

user_route.get('/verify',userController.verifyMail);

user_route.get('/access',middleware.restrictToLoggedinUserOnly,userController.specilAccess);
user_route.get('/logout',userController.logout);
user_route.get('/info',userController.getAllUserData);
user_route.get('/pages',userController.getLimitedData);


module.exports = user_route;
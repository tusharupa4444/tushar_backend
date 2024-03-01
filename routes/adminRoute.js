const express = require('express');

const admin_route = express();

const multer = require("multer");

const config = require("../config/config");

admin_route.set('view engine', 'ejs');
admin_route.set('views', './views/users');

const adminController = require("../controllers/adminController");

const middleware = require("../middleware/auth");

const bodyParser = require('body-parser');
const session = require('express-session');
admin_route.use(bodyParser.json());
admin_route.use(bodyParser.urlencoded({extended:true}));
admin_route.use(session({secret:config.sessionSecret}));

const cookieParser = require('cookie-parser');
admin_route.use(cookieParser());


admin_route.get('/del/:id',middleware.restrictToLoggedinAdminOnly,adminController.deleteUserByAdmin);
admin_route.get('/info',middleware.restrictToLoggedinAdminOnly,userController.getAllUserData);

module.exports = admin_route;



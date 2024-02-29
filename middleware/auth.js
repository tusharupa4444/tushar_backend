const {getUser, getAdmin} = require("../service/auth");

async function restrictToLoggedinUserOnly(req,res,next){
    const userUid = req.cookies?.uid;

    if(!userUid) {
        console.log("did not recive Token.............");
        return res.redirect("/home");
    }
    const user = getUser(userUid);

    if(!user) return res.redirect("/home");

    console.log("this is user...............", user);

     req.user = user;
    next();
}

async function restrictToLoggedinAdminOnly(req,res,next){
    const userUid = req.cookies?.uid;

    if(!userUid) {
        console.log("did not recive Token.............");
        return res.redirect("/login");
    }
    const user = getAdmin(userUid);

    if(!user) return res.redirect("/home");

    console.log("this is user...............", user);

     req.user = user;
    next();
}

module.exports= {
    restrictToLoggedinUserOnly,
    restrictToLoggedinAdminOnly

}

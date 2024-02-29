const jwt = require("jsonwebtoken");
const secretKey = "tusharJWTsecretKey";
const adminSecretKey = "adminJWTsecretKey";

function setUser(user) {
  
    return jwt.sign({
        id:user._id,
        email:user.email
    },secretKey,{ expiresIn: '30s' });
}

function getUser(token){
    if(!token ) return null;
    try{
        return jwt.verify(token,secretKey);

    }catch(error){

        console.log("Authentification failed...............");
        return null;

    }
}


    function setAdmin(user) {
  
        return jwt.sign({
            id:user._id,
            email:user.email
        },adminSecretKey,{ expiresIn: '120s' });
    }


    
    function getAdmin(token){
        if(!token ) return null;
        try{
            return jwt.verify(token,adminSecretKey);
    
        }catch(error){
    
            console.log("Authentification failed...............");
            return null;
    
        }
    
}


module.exports ={
    setUser,
    getUser,
    setAdmin,
    getAdmin
}

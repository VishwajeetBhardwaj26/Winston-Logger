const jwt=require("jsonwebtoken");
const JWTPRIVATEKEY='dhsgkjljhgsdofghwoiitjwefnsdfjkhdfoidf';

exports.isAuthenticatedUser = async(req,res,next)=>{
    try {
        const {token} = req.cookies;
        const decodedData =jwt.verify(token,JWTPRIVATEKEY);
        if(decodedData)
              next();
        
    } catch (error) {
        console.log("kindly login first");
    }
    
    
};
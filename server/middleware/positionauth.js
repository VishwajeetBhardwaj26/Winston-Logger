const {User}=require("../models/user");
const jwt=require("jsonwebtoken");
const JWTPRIVATEKEY='dhsgkjljhgsdofghwoiitjwefnsdfjkhdfoidf';
exports.authorizeRoles = (...roles)=>{
    return(req,res,next)=>{
        const {token} = req.cookies;
        const decodedData =jwt.verify(token,JWTPRIVATEKEY);
        const logeduser=User.findById(decodedData._id);
        console.log(logeduser)
        

    }
}
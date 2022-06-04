const router = require("express").Router();
router.get("/",(req,res)=>{
    res.send("You are an authorized customer and this is your cart kindly add and remove items from cart");
})
module.exports=router;
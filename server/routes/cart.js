const router = require("express").Router();
router.post("/",async (req,res)=>{
    try {
        res.send("welcome to your cart");
    } catch (error) {
        console.log(error);
    }
})
module.exports = router;
const router = require("express").Router();
const {logger} = require("../winston/logger");
router.post("/",async (req,res)=>{
    try {
        logger.info("welcome inside user");
    } catch (error) {
        logger.error(error);
    }
})
module.exports = router;
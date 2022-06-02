//////Gauth
const passport=require("passport");
const googleStrategy=require("passport-google-oauth20")
const router = require("express").Router();
passport.use(new googleStrategy({
    clientID :"706826814076-ru99rnj9d5hgeb0uvsvhse6l6hjj8e6c.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL:"/auth/google/callback"
},(accessToken,refreshToken,profile,done)=>{
  console.log(accessToken)
  console.log(refreshToken)
  console.log(profile)
}))
router.get("/auth/google",passport.authenticate("google",{
  scope:["profile","email"]
}))
router.get("/auth/google/callback",passport.authenticate("google"))

module.exports = router;
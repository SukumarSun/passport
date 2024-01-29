const router=require("express").Router()


router.get("/login",(req,res)=>{
    res.send("loggin ing..")
})

router.get("/logout",(req,res)=>{
    res.send("loggint out....")
})

router.get("/google",(req,res)=>{
    res.send("Google..")
})


module.exports=router
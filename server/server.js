const express= require("express")
const gotroute=require("./routes/authRoutes")
const cors=require("cors")
const app=express()
const passport=require("passport")
const session = require('express-session');

require('./auth')

app.use(cors())

app.use(session({
    secret: 'keyboard cat',
    resave: false,
   saveUninitialized: false
  }));

app.use(passport.initialize())
app.use(passport.session())


function isLoggedIn (req,res,next){
    req.user? next(): res.sendStatus(401)
}

app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>');
  });


  
  app.get('/auth/google',
    passport.authenticate('google', { scope: [ 'email', 'profile' ] }
  ));




  app.get('/auth/fail',(req,res)=>{
    res.send("authentication failed")
  })

app.get('/google/callback',
passport.authenticate('google',{
    successRedirect: "/protected",
    failureRedirect: "/auth/fail"
})
)

app.get('/logout',(req,res)=>{
    req.logout((err) => {
        if (err) {
            // Handle any logout errors here
            console.error(err);
            res.status(500).send("Error during logout");
        } else {
            req.session.destroy((err) => {
                if (err) {
                    // Handle any session destruction errors here
                    console.error(err);
                    res.status(500).send("Error during session destruction");
                } else {
                    res.send("Goodbye");
                }
            });
        }
    });
})

app.get("/protected",isLoggedIn,(req,res)=>{
    res.send(`hello ${req.user.displayName}`)
})


app.listen(3000,()=>{
    console.log("running on 3000")
})
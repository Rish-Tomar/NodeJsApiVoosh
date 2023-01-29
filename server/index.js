const { urlencoded } = require('express')
const express = require('express')
const db = require('./config/mongoose')
const passport =require('passport')
const passportJWT = require('./config/passport-jwt-strategy')
const session =require('express-session')
const app= express()

app.use(express.urlencoded({extended:false}))

app.use(session({
    name:'passport',
    secret:'voosh',
    saveUninitialized:false,
    resave:false,
    cookie:{maxAge:(1000*60*10)}

}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/',require('./routes'))

//server listining
app.listen(8001,(err)=>{
    if(err){
        console.log('erorr has occured',err)
    }
    console.log(`server running at port number ${8001}`)
})
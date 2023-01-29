const { Passport } = require('passport')
const passport =require('passport')

const JWTStrategy =require('passport-jwt').Strategy
const ExtractJWT =require('passport-jwt').ExtractJwt

const User =require('../model/user')

let options ={
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:'vooshbackend'
}

passport.use(new JWTStrategy(options, (jwtPayLoad,done)=>{
    User.findOne(jwtPayLoad.Mobile,(err,user)=>{
        if(err){
            return done(null,user)
        }
        else{
            return done(null,false)
        }
    })
}))

module.exports =passport
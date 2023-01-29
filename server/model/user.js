const mongoose = require('mongoose')

const userSchema =mongoose.Schema({

    name:{
        type:String
    },
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    orders:[
        {
            orderId:Number,
            subTotal:Number
        }
    ]


})


const User=mongoose.model('User',userSchema)

module.exports=User
const User =require('../model/user')

module.exports.createUser=async (req,res)=>{  //it is post request 
    console.log('data recieved',req.body)
    const isduplicate =await  User.findOne({mobile:req.body.mobile});
    console.log('isduplicate',isduplicate)
    if(!isduplicate){
        const userCreated = await User.create(req.body)
        if(userCreated){
            console.log('User is created ...')
            return res.status(200).json({
                message:'user created',
                user:userCreated.name
            })
        }

        return res.status(500).json({
            error:'error while creating user.'
        })
    }

    return res.status(500).json({
        error:'User with given mobile number already exists'
    })
}

module.exports.login=async (req,res)=>{  //post request

    console.log('req is as',req.body)

    const userFound =await User.findOne({mobile:req.body.mobile})

    if(userFound){
        return res.status(200).json({
            message:'user-logged-in',
            user:userFound.name
        })
    }

    return res.status(200).json({
        error:'user with given mobile number doesnot exists'
    })
}

module.exports.addOrder =async(req,res)=>{
    console.log('add order')
    
    const findUser=await User.findOne({mobile:req.body.mobile});
    if(findUser){
        const currentorders =findUser.orders.length
        if(currentorders==null){
            const id=1
        }
        else{
            const id=currentorders+1;
            findUser.orders.push({id,subTotal:req.body.subTotal})
            findUser.save()
        }
        return res.status(200).json({
            message:'order-created'
        })
    }

    return res.status(200).json({
        error:'User not found. order not created'
    })  
}

module.exports.getOrders=async (req,res)=>{//user mobile in params

    const userFound = await User.findOne({mobile:req.params.mobile});
    if(userFound){
        return res.status(200).json({
            user:userFound.name,
            orders:userFound.orders
        })
    }
    
    return res.status(200).json({
        error:'user does not exists'
    })
}
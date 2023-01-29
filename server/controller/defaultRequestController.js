


module.exports.default = function(req,res){

    console.log('recieved req')
    return res.status(200).json({
        message:'U have entered the default entry address',
        use_these:{
            for_creating_user:" '/url/add-user'   (POST Request)",
            for_logging_in:" 'url/login-user' (POST request) "
        }
    })

}
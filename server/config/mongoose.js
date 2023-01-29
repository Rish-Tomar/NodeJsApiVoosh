const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:root@clusterdirectory.evkgqno.mongodb.net/?retryWrites=true&w=majority')

const db= mongoose.connection


db.on('error',console.error.bind(console,'error while connecting'))

db.once('open', ()=>{
    console.log('Database connected')
})

module.exports=db
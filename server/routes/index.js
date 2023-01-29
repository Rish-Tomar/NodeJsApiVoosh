const express = require('express')
const passport = require('passport')
const defaultRequestController = require('../controller/defaultRequestController')
const userController =require('../controller/userController')
const Router = express.Router()

Router.get('/',defaultRequestController.default)
Router.post('/login-user',userController.login)
Router.post('/create-user',userController.createUser)
Router.post('/add-order',userController.addOrder)
Router.get('/get-order/:mobile',userController.getOrders)

module.exports=Router
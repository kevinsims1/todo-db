var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var controller = require('../controllers/crud.js')
var jwt = require("jsonwebtoken")
//user
var userModel = require("../models/user.js")
var todoModel = require("../models/todo.js")


//get user by token
router.get('/', async (req, res) => {
    console.log(req.headers.authorization)
    var decoded = jwt.verify(req.headers.authorization, process.env.JWT_TOKEN);
    console.log(decoded)

    var user = await userModel.findOne({_id: decoded.id}).lean().exec()
    console.log(user)

    var todos = await todoModel.find({user_id: user._id}).lean().exec()
    console.log(todos)

    res.status(200).json({user, todos})
})

//create a user
router.post('/create', controller.create(userModel))

router.post('/login', async (req, res) => {
    try {
        let name = req.body
        console.log(name,"name")
        var user = await userModel.findOne({name: name.name}).lean().exec()
        console.log(user,"USER")
        var token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN);
        console.log(token)
        res.status(200).json({ data: token })
    } catch(err){
        res.status(404).json({message: 'hello'})
    }
})

//get user by id
router
    .route('/:id')
    .get(controller.readOne(userModel))


module.exports = router
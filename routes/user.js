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

    var decoded = jwt.verify(req.headers.authorization, process.env.JWT_TOKEN);

    var user = await userModel.findOne({ _id: decoded.id }).lean().exec()

    var todos = await todoModel.find({ user_id: user._id }).lean().exec()

    res.status(200).json({user, todos})

})

//create a user
router.post('/create', controller.create(userModel))

//login a user
router.post('/login', async (req, res) => {
    try {

        let name = req.body.name

        var user = await userModel.findOne({ name }).lean().exec()

        var token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN);
        
        res.status(200).json({ data: token })

    } catch(err){

        res.status(404).json({message: 'login error'})

    }
})

//get user by id
router
    .route('/:id')
    .get(controller.readOne(userModel))


module.exports = router

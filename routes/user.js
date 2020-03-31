var express = require('express')
var router = express.Router()
var controller = require('../controllers/crud.js')
var jwt = require("jsonwebtoken")
//user
var userModel = require("../models/user.js")
var todoModel = require("../models/todo.js")


//get user by token
router.get('/', async (req, res) => {
    console.log(req.headers.authorization)
    var decoded = jwt.verify(req.headers.authorization, process.env.JWT_TOKEN);
    console.log(decoded.user.name)
    var User = await userModel.find({name: decoded.user.name}).lean().exec()
    console.log(User)
    var Todos = await todoModel.find({user_id: User._id}).lean().exec()
    res.status(200).json({User, Todos})
})

//create a user
router.post('/create', controller.create(userModel))

router.post('/login', (req, res) => {
    try {
        let user = req.body
        var token = jwt.sign({ user }, process.env.JWT_TOKEN);
        console.log(token)
        res.status(200).json({ data: token })
    } catch{
        res.status(404).json({message: "ERROR"})
    }
})

//get user by id
router
    .route('/:id')
    .get(controller.readOne(userModel))


module.exports = router
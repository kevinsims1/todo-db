var express = require('express')
var router = express.Router()
var controller = require('../controllers/crud.js')

//model
var todo = require("../models/todo.js")

router.get('/', (req, res) => res.send('Hello todo!'))

//create a todo
router.post('/create', controller.create(todo))

//delete a todo
router.post('/delete', controller.deleteOne(todo))

//get users todos by id
router.get('/user/:id', controller.readMany(todo))

module.exports = router

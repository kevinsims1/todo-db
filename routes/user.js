var express = require('express')
var router = express.Router()
var controller = require('../controllers/crud.js')

//user
var user = require("../models/user.js")

router.get('/', (req, res) => res.send('Hello User!'))

//create a user
router.post('/create', controller.create(user))


//get user by id
router
    .route('/:id')
    .get(controller.readOne(user))


module.exports = router
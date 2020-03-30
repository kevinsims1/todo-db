var express = require('express')
var router = express.Router()

import controller from '../controllers/crud.js'

router.get('/', (req, res) => res.send('Hello User!'))

router
    .route('/:id')
    .get(controller.readOne)



module.exports = router
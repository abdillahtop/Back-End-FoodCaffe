const express = require('express')
const Route = express.Router()
const catControllers = require('../controllers/category')
const Auth = require('../helpers/auth')

Route
    .get('/', catControllers.getCat)
    .post('/', catControllers.newCat)
    .delete('/:idCat', catControllers.delCat)

module.exports = Route
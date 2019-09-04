const express = require('express')
const Route = express.Router()
const HistoController = require('../controllers/history')
const Auth = require('../helpers/auth')

Route
    .get('/', HistoController.getHistory)
    .get('/:idUser', HistoController.getHistoryById)
    .get('/day/:idUser', HistoController.getHistoryByDay)
    .get('/week/:idUser', HistoController.getHistoryByWeek)
    .get('/month/:idUser', HistoController.getHistoryByMonth)
    .get('/year/:idUser', HistoController.getHistoryByYear)
    .post('/',HistoController.newHistory)
    .delete('/:idHisto', HistoController.delHistory)

module.exports = Route
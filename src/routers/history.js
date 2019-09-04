const express = require('express')
const Route = express.Router()
const HistoController = require('../controllers/history')

Route
    .get('/', HistoController.getHistory)
    .get('/:idUser', HistoController.getHistoryById)
    .post('/',HistoController.newHistory)
    .delete('/:idHisto', HistoController.delHistory)

module.exports = Route
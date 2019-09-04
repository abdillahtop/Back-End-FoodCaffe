const historyModels = require('../models/history')
const miscHelper = require('../helpers/helpers')

module.exports = {
    getHistory: (req, res) => {
       historyModels.getHistory()
            .then((result) => {
                miscHelper.response(res, result, 200)
            })

            .catch((error) => {
                console.log(error)
            })
    },

    getHistoryById: (req, res) => {
        const idUser = req.params.idUser
        historyModels.getHistoryById(idUser)
             .then((result) => {
                 miscHelper.response(res, result, 200)
             })
 
             .catch((error) => {
                 console.log(error)
             })
     },

     getHistoryByDay: (req, res) => {
        const idUser = req.params.idUser
        historyModels.getHistorybyDay(idUser)
             .then((result) => {
                 miscHelper.response(res, result, 200)
             })
 
             .catch((error) => {
                 console.log(error)
             })
     },

     getHistoryByWeek: (req, res) => {
        const idUser = req.params.idUser
        historyModels.getHistorybyWeek(idUser)
             .then((result) => {
                 miscHelper.response(res, result, 200)
             })
 
             .catch((error) => {
                 console.log(error)
             })
     },

     getHistoryByMonth: (req, res) => {
        const idUser = req.params.idUser
        historyModels.getHistorybyMonth(idUser)
             .then((result) => {
                 miscHelper.response(res, result, 200)
             })
 
             .catch((error) => {
                 console.log(error)
             })
     },

     getHistoryByYear: (req, res) => {
        const idUser = req.params.idUser
        historyModels.getHistorybyYear(idUser)
             .then((result) => {
                 miscHelper.response(res, result, 200)
             })
 
             .catch((error) => {
                 console.log(error)
             })
     },


    newHistory: (req, res) => {
        const data = {
            id_user: req.body.idCashier,
            id_menu: req.body.idMenu,
            id_category: req.body.idCat,
            quantity: req.body.quantity
        }
        historyModels.newHistory(data)
            .then((result) => {
                miscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    delHistory: (req, res) => {
        const idHisto = req.params.idHisto
        historyModels.delHistory(idHisto)
            .then((result) => {
                miscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    }

}
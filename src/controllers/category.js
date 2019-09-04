const catModels = require('../models/category')
const miscHelper = require('../helpers/helpers')

module.exports = {
    getCat: (req, res) => {
        catModels.getCat()
            .then((result) => {
                miscHelper.response(res, result, 200)
            })

            .catch((error) => {
                console.log("dari get cat:", error)
            })
    },

    newCat: (req, res) => {
        const data = {
            name_category: req.body.nameCat,
        }
        catModels.newCat(data)
            .then((result) => {
                miscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    delCat: (req, res) => {
        const idCat = req.params.idCat
        catModels.delCat(idCat)
            .then((result) => {
                miscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    }

}
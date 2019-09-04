const menuModels = require('../models/menu')
const miscHelper = require('../helpers/helpers')

module.exports = {
    getMenu: (req, res) => {
        menuModels.getMenu()
            .then((result) => {
                miscHelper.response(res, result, 200)
            })

            .catch((error) => {
                console.log("dari get menu:", error)
            })
    },

    newMenu: (req, res) => {
        const data = {
            name_menu: req.body.nameMenu,
            id_category: req.body.idCat,
            price: req.body.price,
            image: req.body.image
        }
        menuModels.newMenu(data)
            .then((result) => {
                miscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    delMenu: (req, res) => {
        const idMenu = req.params.idMenu
        menuModels.delMenu(idMenu)
            .then((result) => {
                miscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    }

}
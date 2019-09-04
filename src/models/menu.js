const connection = require('../configs/db')

module.exports = {
    
    newMenu: (data) => {
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO tb_menu SET ?`, data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

    getMenu: () => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT id_menu, name_menu, cat.id_category, cat.name_category, price, image from tb_menu menu JOIN tb_category cat ON menu.id_category = cat.id_category ORDER BY name_menu ASC`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

    delMenu: (idMenu) => {
        return new Promise((resolve, reject) => {
            connection.query(`DELETE * FROM tb_menu WHERE id_menu = ?`,idMenu, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

}
const connection = require('../configs/db')

module.exports = {
    
    newHistory : (data) => {
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO tb_history SET ?`, data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

    getHistory: () => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT menu.name_menu, menu.price, menu.image, hist.created_at, hist.updated_at, hist.quantity, user.name_user from tb_history hist JOIN tb_menu menu ON  hist.id_menu = menu.id_menu JOIN tb_users user ON hist.id_user = user.id_user  ORDER BY created_at ASC`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

    delHistory: (idHist) => {
        return new Promise((resolve, reject) => {
            connection.query(`DELETE * FROM tb_menu WHERE id_menu = ?`,idHist, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

}
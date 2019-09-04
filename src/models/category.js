const connection = require('../configs/db')

module.exports = {
    
    newCat: (data) => {
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO tb_category SET ?`, data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

    getCat: () => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM tb_category`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

    delCat: (idCat) => {
        return new Promise((resolve, reject) => {
            connection.query(`DELETE FROM tb_category WHERE id_category = ?`,idCat, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

}
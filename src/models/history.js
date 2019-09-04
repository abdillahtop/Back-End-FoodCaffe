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
            connection.query(`SELECT hist.id_history, hist.created_at,  hist.total, user.name_user from tb_history hist JOIN tb_users user ON hist.id_user = user.id_user ORDER BY created_at DESC`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

    getHistorybyDay: (idUser) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT hist.id_history, DAYNAME(hist.created_at) as created_at,  hist.total, user.name_user from tb_history hist JOIN tb_users user ON hist.id_user = user.id_user WHERE user.id_user = ? GROUP BY DAY(hist.created_at)`,idUser, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

    getHistorybyWeek: (idUser) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT hist.id_history, WEEK(hist.created_at) AS created_at,  hist.total, user.name_user from tb_history hist JOIN tb_users user ON hist.id_user = user.id_user WHERE user.id_user = ? GROUP BY WEEK(hist.created_at)`,idUser, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

    getHistorybyMonth: (idUser) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT hist.id_history, MONTHNAME(hist.created_at) AS created_at,  hist.total, user.name_user from tb_history hist JOIN tb_users user ON hist.id_user = user.id_user WHERE user.id_user = ? GROUP BY MONTH(hist.created_at)`,idUser, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

    getHistorybyYear: (idUser) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT hist.id_history, YEAR(hist.created_at) AS created_at,  hist.total, user.name_user from tb_history hist JOIN tb_users user ON hist.id_user = user.id_user WHERE user.id_user = ? GROUP BY YEAR(hist.created_at)`,idUser, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

    getHistoryById: (idUser) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT hist.id_history, hist.created_at, hist.updated_at, hist.total, user.name_user from tb_history hist JOIN tb_users user ON hist.id_user = user.id_user WHERE user.id_user = ? ORDER BY created_at DESC`,idUser, (err, result) => {
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
const connection = require('../configs/db')

module.exports = {
    getUsers: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM tb_users', (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

    register: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO tb_users SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

    getByEmail: (email) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT id_user, email, name_user, salt, password, created_at, updated_at FROM tb_users WHERE email = ?', email, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    updateToken: (email, token) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE tb_users SET token = ? WHERE email = ?', [token, email], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

    deleteToken: (userid) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE tb_users SET token = ? WHERE id_user= ?', ['Test', userid], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

    delUser: (userid) => {
        return new Promise((resolve, reject) => {
            connection.query(`DELETE FROM tb_users WHERE id_user=?`, userid, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

}
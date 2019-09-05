const express = require('express')
const Route = express.Router()
const MenuController = require('../controllers/menu')
const multer = require('multer')
const Auth = require('../helpers/auth')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, `${new Date().toISOString().replace(/:/g, '-')}${file.originalname}`);
    }
})

const upload = multer({ storage: storage, dest: 'uploads/' })
Route
    .get('/', MenuController.getMenu)
    .post('/', upload.single('image') , MenuController.newMenu)
    .post('/logout/:userid', UserController.logout)
    .delete('/:idMenu', MenuController.delMenu)

module.exports = Route
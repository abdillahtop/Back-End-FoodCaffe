const express = require('express')
const Route = express.Router()
const MenuController = require('../controllers/menu')
const multer = require('multer')

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
    .delete('/:idMenu', MenuController.delMenu)

module.exports = Route
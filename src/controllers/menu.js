const menuModels = require('../models/menu')
const miscHelper = require('../helpers/helpers')
const cloudinary = require('cloudinary');

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

    newMenu: async (req, res) => {
        const path = req.file.path;
        const getUrl = async req => {
          cloudinary.config({
            cloud_name: 'abdi-library-storage',
            api_key: 564346865871912,
            api_secret: 'cq0d7Q1ZvicR0rtZMcAmoHBsQ48'
          });
    
          let dataimg;
          await cloudinary.uploader.upload(path, result => {
            console.log("coba ini", path);
            // const fs = require('fs')
            // fs.unlink(path)
            dataimg = result.url;
          });
          return dataimg;
        };
        console.log("coba", await getUrl());
  

        const data = {
            name_menu: req.body.nameMenu,
            id_category: req.body.idCat,
            price: req.body.price,
            image: await getUrl()
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
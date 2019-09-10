const menuModels = require('../models/menu')
const miscHelper = require('../helpers/helpers')
const cloudinary = require('cloudinary');
require('dotenv').config() //initialize dotenv config

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
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET
          });
    
          let dataimg;
          await cloudinary.uploader.upload(path, result => {
            console.log("coba ini", path);
            // const fs = require('fs')
            // fs.unlink(path
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
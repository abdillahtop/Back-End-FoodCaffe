require('dotenv').config()

const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.SERVER_PORT || 5000;

const menuRoute = require('./src/routers/menu')
const catRoute = require('./src/routers/category')
const userRoute = require('./src/routers/user')
const histoRoute = require('./src/routers/history')
const whitelist = process.env.WHITELIST

const corsOptions = (req, callback) => {
    if (whitelist.split(',').indexOf(req.header('Origin')) !== -1) {
        console.log('Success')
        return callback(null, {
            origin: true
        })
    } else {
        console.log('Failed')
        return callback(null, {
            origin: false
        })
    }
}

app.use(cors())
app.options('*', cors(corsOptions))

app.listen(port, () => {
    console.log(`\n App listening on port ${port} \n`)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use('/menu', menuRoute)
app.use('/category', catRoute)
app.use('/user', userRoute)
app.use('/history', histoRoute)
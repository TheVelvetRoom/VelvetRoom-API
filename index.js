if(process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'test') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const routers = require('./routers')
const mongoose = require('mongoose')
const db = process.env.MONGO_ATLAS || 'mongodb://localhost:27017/'
const dbName = process.env.DB_NAME
const cors = require('cors')

mongoose.connect(db+dbName, {useNewUrlParser:true, useUnifiedTopology: true})
.then(success => {
    console.log(`connected to MongoDb on ${db+dbName}`)
})

app
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({extended: true}))
    .use('/', routers)

module.exports = app
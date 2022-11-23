const express = require('express');
const app = express()
const cors = require('cors');
const dataApi = require('../data.json');
const ServerlessHttp = require('serverless-http');
app.use(cors())

const router = express.Router()

router.get("/",(req,res)=>{
    res.send('helo')
})

router.get('/data', (req, res)=>{
    res.send(dataApi)
})

app.use('/.netlify/functions/api', router)
module.exports= app
module.exports.handler = ServerlessHttp(app)
const express = require('express');
const app = express()
const cors = require('cors');
const dataApi = require('../data.json');
const ServerlessHttp = require('serverless-http');
app.use(cors())

app.use('/.netlify/functions/api', router)
module.exports= app
module.exports.handler = ServerlessHttp(app)
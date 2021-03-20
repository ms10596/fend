var path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const fetch = require("node-fetch");

var cors = require('cors')

const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();

const app = express()
app.use(cors())
app.use(bodyParser.json());

app.use(express.static('dist'))


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post("/", async function (req, res) {
    let cloud_response = await fetch(`https://api.meaningcloud.com/summarization-1.0?key=${process.env.key}&url=${req.body.url}&sentences=5`, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    cloud_response = await cloud_response.json()
    res.send(cloud_response)
})

app.get('/test', function (req, res) {
    res.send({ "message": "world" })
})

app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
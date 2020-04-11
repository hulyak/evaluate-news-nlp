var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config();

const app = express()
//Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Setup empty JS object to act as endpoint for all routes
projectData = {};

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// set aylien API credentials
const aylien = require("aylien_textapi");
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});
// console.log(`Your API key is ${process.env.API_KEY}`);

//Get request 
app.get('/test', function (req, res) {
    textapi.sentiment({
        'text': projectData.sentence,
    }, function (error, response) {
        if (error === null) {
            console.log(response)
            res.send(response)
        }
    });
});


// POST method route
app.post('/add', addInfo);

function addInfo(req, res) {
    projectData.sentence = req.body.sentence;
    res.send(projectData);
}
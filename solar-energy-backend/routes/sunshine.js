const express = require('express')
const axios = require('axios')
var router = express.Router();


router.get('/tripoli-climate', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    axios
    .get('https://www.weather-atlas.com/en/lebanon/tripoli-climate')
    .then(result =>{
        res.json(result.data)
    })
    .catch(err =>{
            
    })
})

router.get('/beirut-climate', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    axios
    .get('https://www.weather-atlas.com/en/lebanon/beirut-climate')
    .then(result =>{
        res.json(result.data)
    })
    .catch(err =>{
            
    })
})

router.get('/bar-elias-climate', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    axios
    .get('https://www.weather-atlas.com/en/lebanon/bar-elias-climate')
    .then(result =>{
        res.json(result.data)
    })
    .catch(err =>{
            
    })
})

router.get('/baskinta-climate', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    axios
    .get('https://www.weather-atlas.com/en/lebanon/baskinta-climate')
    .then(result =>{
        res.json(result.data)
    })
    .catch(err =>{
            
    })
})

router.get('/joun-climate', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    axios
    .get('https://www.weather-atlas.com/en/lebanon/joun-climate')
    .then(result =>{
        res.json(result.data)
    })
    .catch(err =>{
            
    })
})

router.get('/tyre-climate', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    axios
    .get('https://www.weather-atlas.com/en/lebanon/tyre-climate')
    .then(result =>{
        res.json(result.data)
    })
    .catch(err =>{
            
    })
})

module.exports = router;
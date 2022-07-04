const express = require('express')
const axios = require('axios')
var router = express.Router();


router.get('/tripoli-long-term-weather-forecast', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    axios
    .get('https://www.weather-atlas.com/en/lebanon/tripoli-long-term-weather-forecast')
    .then(result =>{
        res.json(result.data)
    })
    .catch(err =>{
            
    })
})

router.get('/beirut-long-term-weather-forecast', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    axios
    .get('https://www.weather-atlas.com/en/lebanon/beirut-long-term-weather-forecast')
    .then(result =>{
        res.json(result.data)
    })
    .catch(err =>{
            
    })
})

router.get('/bar-elias-long-term-weather-forecast', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    axios
    .get('https://www.weather-atlas.com/en/lebanon/bar-elias-long-term-weather-forecast')
    .then(result =>{
        res.json(result.data)
    })
    .catch(err =>{
            
    })
})

router.get('/baskinta-long-term-weather-forecast', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    axios
    .get('https://www.weather-atlas.com/en/lebanon/baskinta-long-term-weather-forecast')
    .then(result =>{
        res.json(result.data)
    })
    .catch(err =>{
            
    })
})

router.get('/joun-long-term-weather-forecast', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    axios
    .get('https://www.weather-atlas.com/en/lebanon/joun-long-term-weather-forecast')
    .then(result =>{
        res.json(result.data)
    })
    .catch(err =>{
            
    })
})

router.get('/tyre-long-term-weather-forecast', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    axios
    .get('https://www.weather-atlas.com/en/lebanon/tyre-long-term-weather-forecast')
    .then(result =>{
        res.json(result.data)
    })
    .catch(err =>{
            
    })
})

module.exports = router;
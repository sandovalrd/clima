const axios = require('axios');
const x_rapidapi_key = require('./ApiKeys').x_rapidapi_key;

const rapidapi = axios.create({
    baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
    headers: { 'x-rapidapi-key': x_rapidapi_key }
});

module.exports = { rapidapi }
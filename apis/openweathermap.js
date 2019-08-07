const axios = require('axios');

const openweathermap = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/weather',
});

module.exports = { openweathermap }
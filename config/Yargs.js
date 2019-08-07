const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: "direccion de la ciudad que requiere saver el clima",
        dema: true
    }
}).argv;

module.exports = { argv }
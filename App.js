const argv = require('./config/Yargs').argv;
const rapidapi = require('./apis/rapidapi').rapidapi;
const openweathermap = require('./apis/openweathermap').openweathermap;
const appid = require('./apis/ApiKeys').appid;
const { direccion } = argv;
const units = "metric";

const getCiudad = async term => {
    const resp = await rapidapi.get('', {
        params: { location: term }
    })
    if (resp.data.Results.length === 0) {
        return console.log(`No hay resultados para la dirección: ${direccion}`)
    }
    return resp.data.Results[0];

}

const getClima = async(lat, lon) => {
    const clima = await openweathermap.get('', {
        params: { appid, units, lat, lon }
    });
    if (clima.data.main.temp) {
        return clima.data.main.temp
    }
    return console.log(`No hay resultados para esa ciudad`)
}

getCiudad(direccion).then((clima) => {
    if (clima) {
        const { name, lat, lon } = clima;
        console.log(name)
        getClima(lat, lon).then(console.log)
    }
});
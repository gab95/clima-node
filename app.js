const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv


let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion)
        let temperatura = await clima.getTemperatura(coors.lat, coors.lon)
        return `El clima en ${coors.direccion} es de ${temperatura} grados centígrados`
    } catch (error) {
        return `no se pudo determinar el clima en ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(mensaje => {
        console.log(mensaje);
    }).catch(e => console.log(e))
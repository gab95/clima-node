const axios = require('axios')

const getTemperatura = async(lat, lon) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=206793053fecd86447ba5ac1e17f3072`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`no hay resultados para la cuidad ${direccion}`)
    }

    return resp.data.main.temp
}

module.exports = {
    getTemperatura
}
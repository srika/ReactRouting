
var axios = require('axios');
//default Kelvin
//units= imperial - for fahrenheit
//units= metric - for centigrade
const WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=d6367a7150cfc847d12be0f2e8f0e46f&units=metric';

module.exports = {
    getTemp: function(location){
        //javascript encode URI Component to remove extra special symbols and charecters
        var el = encodeURIComponent(location);
        var url = `${WEATHER_URL}&q=${el}`;

        return axios.get(url).then(function(res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }
            else{
                return res.data.main.temp;
            }
        }, function(res){
            throw new Error(res.data.message);
        })
    }
}
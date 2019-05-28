const geocode = require("./utils/geocode")
const forecast = require('./utils/forecast');
let place;


let weather_api = (place, callback)=>{
//console.log(place);
geocode.geolocation(place, (error, dat)=>{

    if(error === undefined){
    data = `${dat.latitude},${dat.longitude}`;


    forecast(data,(err, response)=>{

        if(err == undefined){
            let temp = response.currently.temperature;
            let sum = response.currently.summary;
            callback({temp : temp, sum:sum, err:undefined});
        }
       else
            
            callback({temp : undefined, sum:undefined, err:"Unable to get any location"});
        
})
    } 
       
    else callback({temp:"", sum:"", err:error});

});
};
module.exports = {weather_api : weather_api}
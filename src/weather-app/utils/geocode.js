const request = require('request');

function geolocation(place, callback){
    
    const map_box_api_key = `pk.eyJ1Ijoic2F5YW4xMzAiLCJhIjoiY2p2OXg5b3NxMGowMDQzcnhoeHpzMnA3aSJ9.irNrOPipcE_dWkjsTH8Dcw`;
    
    const ex = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(place)}.json?access_token=${map_box_api_key}&limit=1`;
    //console.log(place);
    request({url : ex, json:true},(err, {body}, bod)=>{
    
    if(err) callback("Unable to connect to webservices at the moment", undefined);
    
    else if(body.features.length == 0) callback('location doesn\'t exist', undefined);
    
    else{

    
        let co = String(body.features[0].center);
        let place_ = String(body.features[0].place_name)
        co = String(co).split(","); 
        let obj = {latitude : co[1], longitude : co[0], place_ : place_};
      
        callback(undefined, obj);
    }
})
}
module.exports = {geolocation : geolocation};
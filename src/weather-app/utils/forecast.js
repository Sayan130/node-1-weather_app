
const request = require('request');

function weather(value, callback){
    

    const url = "https://api.darksky.net/forecast/b26891a33a573dac1c2890a525fbe19d/"+value+`?units=si`;
  //  console.log(url);
    const json = true;
       
request({url, json}, (err, {error, body}, bod)=>{

    if(body == undefined)callback('Web service is not currently available', undefined);

    else if(error==="The given location (or time) is invalid.")callback(body.error, undefined)

    else{

        callback(undefined, body);
       
    }
})
}
module.exports = weather;
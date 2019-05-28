const geocode = (a, b, callback)=>{

    setTimeout(()=>{

        callback(a + b);

    },2000)

}

geocode(1, 4,(data)=>{

    console.log(data);

});
console.log("Asynchronous programming")
const path = require("path");
let express = require('express');
const hbs = require('hbs');
const app = express();
const get_data = require("./weather-app/ap")

const staticcontent = path.join(__dirname, "/../public")
const viewpath = path.join(__dirname,"/../templates/partials/Views");
const partialpath = path.join(__dirname, "/../templates/partials")
const port = process.env.PORT || 3000;

console.log(staticcontent);

hbs.registerPartials(partialpath);
app.set("view engine", "hbs");
app.set("views",viewpath);
app.use(express.static(staticcontent));


app.get("", (req, res)=>{
   
    
        return res.render("./index",{title : "Weather", name :"Sayan Sarkar", result:""});
    
    
})


app.get("/search", (req, res)=>{

   if(!req.query.adress){
        return res.send({title : "Weather", name :"Sayan Sarkar", result:"Empty string cannot be passed"});
    }
    else{
    //    console.log(req.query.adress);
        get_data.weather_api(req.query.adress,(json)=>{

            if(json.error != undefined){
                                
                return   res.send({title : "Weather", name :"Sayan Sarkar", result:`${json.temp +" "+json.sum}`});
            }
            else {
      
                return res.send({title : "Weather", name :"Sayan Sarkar", result:`${json.temp +" "+json.sum}`, err : json.err});
            }
        })
    }
    

})



app.get("/help", (req, res)=>{

    res.render("help",{title :"Help", name :"Sayan Sarkar"});
})
 
app.get("/about", (req, res)=>{
   
    res.render("./about",{title : "About", name :"Sayan Sarkar"});
})

app.get("/help/*", (req, res)=>{

    res.render("./error", {msg : "No help article is found"});

})


app.get("*",(req, res)=>{

    res.render("./error",{msg : "Error page is not found"})

})

app.listen(port, ()=>{
    console.log("Inside app.listen");
})

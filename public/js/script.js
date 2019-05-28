console.log("Hello!! js is loading ");
const form = document.querySelector('form');
const search = document.querySelector("input")
const error = document.querySelector("#error");

let api = function(location){
fetch('/search?adress='+location).then((Response)=>{

    Response.json().then((data)=>{
            if(data.err != undefined){
                error.textContent = data.err;
                //console.log("HI")
            }
            else{
                
                error.textContent = data.result;
               // console.log("HI")
                document.getElementById("search").value = "";
                
            }
    })

})
}

form.addEventListener("submit",(e)=>{

    e.preventDefault();
    error.textContent = "";
    if(search.value === "" )alert("cant left blank");
    else api(search.value);
    console.log(search.value);

})
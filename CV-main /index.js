const express=require("express");
const bodyParser=require("body-parser");
const https = require("https");
const app=express();


app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))


app.get("/",function(req,res){
    res.sendFile(__dirname+"/myPersonalSite/index.html")
})

app.get("/WeatherAPI",function(req,res){
    res.sendFile(__dirname+"/public/projects/WeatherApp/index.html")
    
    
})


app.post("/WeatherAPI", function (req, res) {

    let city = req.body.City
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=eab3b1e97790f2926281b24b608fd6c7&units=metric";
    // const url="https://api.openweathermap.org/data/2.5/weather?q=London&appid=eab3b1e97790f2926281b24b608fd6c7";
    https.get(url, function (responce) {

        responce.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const location = weatherData.name
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const iconURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png"

            
            res.write("<h1 style='text-align: center;'>The current weather in "+ location+" is "+weatherDescription+" with a <br>tempreture of <em>"+temp+" degrees Celcius</em></h1>")
            res.write("<p style='text-align: center;'> <img src='https://openweathermap.org/img/wn/"+icon+"@2x.png' alt=''></p>")

            res.send();

        })
    })

})



app.get("/projects"+"/WeatherApp",function(req,res){
   console.log("we are up and running")
    
    
})

app.listen(3000,function(){
    console.log("we are running")
    console.log(" i am a beast")
  
})



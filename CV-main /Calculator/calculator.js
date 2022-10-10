const express = require("express");
const bodyParser = require("body-parser")
const app = express();
let weight;
let height;
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function (req, res) {
    let number1=Math.floor(req.body.num1);
    let number2=Math.floor(req.body.num2);
    let outcome=number1+number2;
    res.send("The Outcome is :"+outcome)

    

})

app.get('/bmiCalculator',function(req,res){
    res.sendFile(__dirname+'/bmiCalculator.html')
})
app.post("/bmiCalculator.html",function(req,res){
    weight=Math.floor(req.body.weight);
    height=Math.floor(req.body.height)
    let bmi=weight/(height*height)
    res.send("Your BMI is: "+bmi);
   
})






app.listen(3000, function () {
    console.log("server is running");
})
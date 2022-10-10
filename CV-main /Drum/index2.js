


function HouseKeeper(yox,name,cleaningreportoire){
    this.name=name;
    this.yearsOfExperience=yox;
    this.cleaningreportoire=cleaningreportoire;
    this.cleaning=function(){
        // alert("i am cleanign");
    }
}

function keyPressed(){
    document.addEventListener("keydown",function(event){
        console.log(event.key)
    })
}

keyPressed();
let houseKeeper1=new HouseKeeper(2,"Angela",["bathroom"]);
houseKeeper1.cleaning();
console.log(houseKeeper1)
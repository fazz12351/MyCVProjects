
console.log("im being called")
//we declar eour global variables here
let buttons = document.querySelectorAll(".drum");
let audiow = new Audio("./sounds/crash.mp3");
let audioa = new Audio("./sounds/kick-bass.mp3");
let audios = new Audio("./sounds/snare.mp3");
let audiod = new Audio("./sounds/tom-1.mp3");
let audioj = new Audio("./sounds/tom-2.mp3");
let audiok = new Audio("./sounds/tom-3.mp3");
let audiol = new Audio("./sounds/tom-4.mp3");
let message = document.querySelector(".keysPressed");
let keyspressed = [];
let buttonpressed;
let allButtonsPressed = [];





//this function is responsible to initialising variables at the beggining of the programme
function setup() {

}

function run() {
    setup();
    //we declare a local array which stores all the buttons into an array;
    let allDrums = document.querySelectorAll(".drum");
    for (var i = 0; i < allDrums.length; i++) {
      
        //we loop through the array called allDrums and we add an event listrenter which detect clicks on the each button. The keyword 'this' triggers the event which has been clicked
        allDrums[i].addEventListener("click", function (event) {
            //the variable stores the exact button which has been clicked
            var buttonInnerHtml = this.innerHTML;
            //we call the function and pass the key which has been pressed
            makeSound(buttonInnerHtml);
            //this output the exact button to the dom
            message.innerHTML = buttonInnerHtml;

            buttonAnimation(buttonInnerHtml);



        })
    }

    //the below syntax detect any events wehich occurs in th edocument. The addEvent listeter listen for  keydown button. we then call the function which takes int the ninput event.key as the inpoute.
    document.addEventListener("keydown", function (event) {

        makeSound(event.key)
        message.innerHTML = event.key

        buttonAnimation(event.key);
    })

}


function makeSound(key) {


    switch (key) {

        case "w":
            audiow.play();
            break;

        case "a":
            audioa.play();

            break;

        case "s":

            audios.play();

            break;
        case "d":

            audiod.play();

            break;
        case "j":

            audioj.play();

            break;
        case "k":

            audiok.play();

            break;
        case "l":

            audiol.play();

            break;

        default:
            break;
    }


}

function buttonAnimation(key) {
    let button = document.querySelector("." + key);
    button.classList.add("pressed")

    //timer function added which removed class items from the selected button after 0.5 seconds
    setTimeout(function () {
        button.classList.remove("pressed")
    }, 200);

}





run();
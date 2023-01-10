let button = document.querySelector(".connectButton");
let footerUnderline = document.querySelectorAll(".Footer a")
let objects = document.querySelectorAll(".icons");
let SocialDropDown = document.querySelector("#navbarDropdown");

function ButtonPressed() {
    button.addEventListener("click", function () {
        button.innerHTML = "Great! <i class='fa-regular fa-handshake'></i>"
        button.classList.add("pressed")
        SocialDropDown.click();

    })


}



function buttonHover(page) {
    if (page == 1) {
        let cards = document.querySelectorAll(".card-body");
        let currentCard = ""
        for (var i = 0; i < cards.length; i++) {
            cards[i].addEventListener("mouseover", function () {
                let message1 = document.querySelector("#card1 p");
                let message2 = document.querySelector("#card2 p");
                let message3 = document.querySelector("#card3 p");
                currentCard = this.getAttribute("id")

                if (currentCard === "card1") {
                    message1.textContent = "My first ever web application outside of uni. the webpage is a basic HTML page"
                    message2.textContent = ""
                    message3.textContent = ""
                    this.classList.add("underline")
                } else if (currentCard === "card2") {
                    message1.textContent = ""
                    message2.textContent = "This is the second web page i created, ive added css to make it fancy"
                    message3.textContent = ""
                    this.classList.add("underline")
                } else if (currentCard === "card3") {
                    message1.textContent = ""
                    message2.textContent = ""
                    message3.textContent = "Application i created as i became more familiar with front end development"
                    this.classList.add("underline")
                } else {
                    message1.textContent = ""
                    message2.textContent = ""
                    message3.textContent = ""
                }


            })



        }
    }


}

function RemoveStyles() {
    setTimeout(function () {
        button.classList.remove("pressed")
    }, 100);

}


ButtonPressed();

buttonHover(1);
RemoveStyles();
console.log(SocialDropDown)


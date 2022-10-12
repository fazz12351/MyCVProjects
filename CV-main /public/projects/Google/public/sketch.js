
let keyPressed=false;

function hovering(multi, object, style) {
    if (multi == false) {
        let element = document.querySelector(object)
        element.addEventListener("mouseover", function () {
            this.classList.add(style)
        })
    }
    if (multi == true) {
        let element = document.querySelectorAll(object)
        console.log(element)
        for (var i = 0; i < element.length; i++) {
            element[i].addEventListener("mouseover", function () {
                this.classList.add(style)
            })
        }


    }

}

hovering(true, "button", "hovering");

hovering(false, ".SighnIn", "hover2")




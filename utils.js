
class Beat {

    constructor(audioSrc) {
        this.audio = new Audio(audioSrc)
    }


    play = () => {
        this.audio.currentTime = 0
        this.audio.play()
    }
}




class Button {
    constructor(color, keyCode) {
        this.element = document.getElementById(keyCode);
        this.keyCode = keyCode;
        this.color = color;
        this.setButtonColorInHTML();
        this.setTransitionEndListener();
    }


    setButtonColorInHTML = () => {
        this.element.style.borderColor = this.color
    }


    setTransitionEndListener = () => {
        this.element.addEventListener("transitionend", () => {
            this.deselect();
        })
    }

    // selecting and adding style to button
    select = () => {
        this.element.style.backgroundColor = this.color;
        this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
    }

    // selecting and removing style to button
    deselect = () => {
        this.element.style.backgroundColor = "transparent";
        this.element.style.boxShadow = `none`;
    }
}
var mySound;
var myMusic;

function startGame() {
    console.log("Aa");
    mySound = new sound("music.mp3");
    console.log("bb");
    myMusic = new sound("music.mp3");
    console.log("cc");
    myMusic.play();
    console.log("dd");
}

function sound(src) {
    console.log("ee");
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}




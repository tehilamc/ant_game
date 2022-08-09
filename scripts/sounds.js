var mySound;
var myMusic;

function startGame() {
    mySound = new sound("music.mp3");
    myMusic = new sound("music.mp3");
    myMusic.play();
    myGameArea.start();
}

function sound(src) {
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




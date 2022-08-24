
// var ti;

// var timeleft = 60;
// var downloadTimer = setInterval(function(){
//   if(timeleft <= 0){
//     ti=0; 
//     clearInterval(downloadTimer);
//   }

//   document.getElementById("progressBar").value = 60 - timeleft;
//   timeleft -= 1;
// }, 1000);

// import { drop } from '/modules/scripts/page.js';

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval();
      window.location.replace('game_over.html');
    }
  }, 1000);
}

  window.onload = function () {
    var fiveMinutes= 60 ,
    display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
  };





var ti;

var timeleft = 60;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    ti=0; 
    // clearInterval(downloadTimer)
    timer_easy(ti)
  }
  
  document.getElementById("progressBar").value = 60 - timeleft;
  timeleft -= 1;
}, 1000);




function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  window.onload = function () {
    var fiveMinutes= 60 ,
    display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
  };




function timer_easy() {
  if(ti==0){
    window.location.replace('game_over.html');
  }
}

function timer_normal() {
    if(ti==0){
      window.location.replace('game_over.html');
    }
  }

  function timer_hard() {
    if(ti==0){
      window.location.replace('game_over.html');
    }
  }
  







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
      window.location.replace('game_over.html');
      // timer = duration;
    }
  }, 1000);
}

  window.onload = function () {
    var fiveMinutes= 60 ,
    display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
  };




// function timer_easy() {
//   if(ti==0){
//     window.location.replace('game_over.html');
//   }
// }

// function timer_normal() {
//     if(ti==0){
//       window.location.replace('game_over.html');
//     }
//   }

//   function timer_hard() {
//     if(ti==0){
//       window.location.replace('game_over.html');
//     }
//   }
// console.log("888");
// var timeInSecs;
// var ticker;
// function startTimer(secs) {
//   location.replace('page.html');
//   console.log(secs);
//   timeInSecs = parseInt(secs);
//   ticker = setInterval(tick(), 1000);
//   console.log(secs);
// }

// function tick() {
//   console.log("444");
//   var secs = timeInSecs;

//   if (secs > 0) {
//     timeInSecs--;
//   }
//   else {
//     window.location.replace('game_over.html');
//     // clearInterval(ticker);
//     // startTimer(60);
//   }

//   var mins = Math.floor(secs / 60);
//   secs %= 60;
//   var pretty = ((mins < 10) ? "0" : "") + mins + ":" + ((secs < 10) ? "0" : "") + secs;
//   console.log("444");
//   console.log(pretty);
//   if(document.getElementById("countdown")==null){
//     console.log("222");
//   }
//   document.getElementById("countdown").innerHTML = pretty;
// }
// startTimer(60);
//  function checkLevel(level) {
//   if (level == 1) {
//     minute = 60;
//     // location.replace('page.html');
//     startTimer(60);
//   }
//   if (level == 2) {
//     minute = 40;
//     // window.location.replace('page.html');
//     startTimer(40);
//   }
//   if (level == 3) {
//     minute = 20;
//     // window.location.replace('page.html');
//     startTimer(20);
//   }
// }
// startTimer(minute);

// location.replace('page.html');

// var timeInSecs;
// var ticker;

// function pass() {
//   window.location.replace('game_easy.html');

// }

// function startTimer(secs) {
//   timeInSecs = parseInt(secs);
//   ticker = setInterval("tick1()", 1000);
// }
// function tick1() {
//   console.log("777")
//   var secs = timeInSecs;
//   if (secs > 0) {
//     timeInSecs--;
//   }
//   else {
//     // clearInterval(ticker);
//     window.location.replace('game_over.html');
//     // startTimer(60);
//   }
//   var mins = Math.floor(secs / 60);
//   secs %= 60;
//   var pretty = ((mins < 10) ? "0" : "") + mins + ":" + ((secs < 10) ? "0" : "") + secs;
 
//   document.getElementById("countdown").innerHTML = pretty;
// }
// startTimer(60); // 4 minutes in seconds




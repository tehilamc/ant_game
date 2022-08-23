// function pass2() {
//     window.location.replace('game_normal.html');

// }


// var timeInSecs;
// var ticker;

// function startTimer1(secs) {
//     timeInSecs = parseInt(secs);
//     ticker = setInterval("tick2()", 1000);
// }
// function tick2() {
//     console.log("888");
//     var secs = timeInSecs;
//     if (secs > 0) {
//         timeInSecs--;
//     }
//     else {
//         clearInterval(ticker);
//         window.location.replace('game_over.html');
//     }

//     var mins = Math.floor(secs / 60);
//     secs %= 60;
//     var pretty = ((mins < 10) ? "0" : "") + mins + ":" + ((secs < 10) ? "0" : "") + secs;
//     document.getElementById("countdown").innerHTML = pretty;
// }
// startTimer1(40); // 4 minutes in seconds

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
      var fiveMinutes= 40 ,
      display = document.querySelector('#time');
      startTimer(fiveMinutes, display);
    };

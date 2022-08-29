localStorage.clear();
var minute;
 function checkLevel1() {
  window.location.replace('page.html');
  startTimer(60);
}
function checkLevel2() {
  window.location.replace('page.html');
  startTimer(40);
}
function checkLevel3() {
  window.location.replace('page.html');
  startTimer(20);
}


// location.replace('page.html');



var timeInSecs;
var ticker;

function startTimer(secs) {
  timeInSecs = parseInt(secs);
  ticker = setInterval("tick()", 1000);
}

function tick() {
  var secs = timeInSecs;
  if (secs > 0) {
    timeInSecs--;
  }
  else {
    window.location.replace('game_over.html');
    // clearInterval(ticker);
    // startTimer(60);
  }

  var mins = Math.floor(secs / 60);
  secs %= 60;
  var pretty = ((mins < 10) ? "0" : "") + mins + ":" + ((secs < 10) ? "0" : "") + secs;

  document.getElementById("countdown").innerHTML = pretty;
}

startTimer(60); // 4 minutes in seconds
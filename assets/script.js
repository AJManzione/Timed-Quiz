var timerEl = document.getElementById("time");
var startBtn = document.getElementById("start");
startBtn.addEventListener("click", countDown);







function countDown() {
    timeLeft = 3:00;
  var timeInterval = setInterval(function () {

    if (timeLeft > 0) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      loseGame();
    }
  }, 1000);
};
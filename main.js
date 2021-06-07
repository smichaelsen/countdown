var timer = {
  element: null,
  targetTime: 0,
  init: function() {
    timer.element =  document.querySelector('[data-countdown]');
    var secondsTotal = timer.element.dataset.countdownMinutes * 60;
    timer.targetTime = new Date(new Date().getTime() + secondsTotal * 1000);
    timer.updateView();
    window.setInterval(timer.updateView, 500);
  },
  updateView: function() {
    var now = new Date();
    var secondsRemaining = timer.targetTime - now;
    var minutes = Math.floor((secondsRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((secondsRemaining % (1000 * 60)) / 1000);
    timer.element.innerText = minutes + ':' + seconds;
  },
};

window.addEventListener('load', timer.init);

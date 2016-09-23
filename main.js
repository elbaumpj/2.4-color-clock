(function(){
  "use strict";

  var hours = document.querySelector('.hours');
  var minutes = document.querySelector('.minutes');
  var seconds = document.querySelector('.seconds');
  var currentTime;
  var hexColor;
  var clock = document.querySelector('.clock');

function displayTime() {
  currentTime = new Date();
  hours.textContent = ("0" + currentTime.getHours()).slice(-2) + " :"; //used example from class for .slice
  minutes.textContent = ("0" + currentTime.getMinutes()).slice(-2) + " :";
  seconds.textContent = ("0" + currentTime.getSeconds()).slice(-2);
  percentOfMinute();
}

function percentOfMinute() {
  var minutePercent = (currentTime.getSeconds()/60) * 100;
  var timerBar = document.querySelector('.timer-bar');
  timerBar.style.width = minutePercent.toString() + "%" ; //Mady gave help with toString();
  setHex();
}

function setHex() {
  //var hexNumbers = currentTime.getHours() + currentTime.getMinutes() + currentTime.getSeconds();
  var hoursHex = ('0' + currentTime.getHours().toString(16)).slice(-2);
  var minutesHex = ('0' + currentTime.getMinutes().toString(16)).slice(-2);
  var secondsHex = ('0' + currentTime.getSeconds().toString(16)).slice(-2);
  hexColor = "#" + hoursHex + minutesHex + secondsHex;
  var container = document.querySelector('.container');
  container.style.backgroundColor = hexColor;
}

  clock.addEventListener("mousemove", clockToHex);

  function clockToHex(){
    window.clearInterval(displayTime);
    displayHex();
  }


function displayHex() {
  hours.textContent = hexColor;
  minutes.textContent = "";
  seconds.textContent = "";
}

window.setInterval(displayTime, 1000);








}());

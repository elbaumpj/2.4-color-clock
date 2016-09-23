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
  hexColor = "#" + "0D" + currentTime.getMinutes() + currentTime.getSeconds();
  var container = document.querySelector('.container');
  container.style.backgroundColor = hexColor;
}

  clock.addEventListener("mousemove", clockToHex);

  function clockToHex(){
    window.clearInterval(displayTime);
    displayHex();
  }


function displayHex() {
  hours.textContent = "#" + "0D" + currentTime.getMinutes() + currentTime.getSeconds();
  minutes.textContent = "";
  seconds.textContent = "";
}

window.setInterval(displayTime, 1000);








}());

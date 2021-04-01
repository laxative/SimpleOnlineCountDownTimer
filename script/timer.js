const TIME = 60 * 60 * 24 * 3;

const SECOND = 1;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

var currentTime = TIME;

var dayElement = document.querySelector('#days')
var hourElement = document.querySelector('#hours')
var minuteElement = document.querySelector('#minutes')
var secondElement = document.querySelector('#seconds')

function countDown() {
  currentTime--;
  
  let days = Math.floor(currentTime / DAY);
  let hours = Math.floor((currentTime % DAY) / HOUR)
  let minutes = Math.floor(((currentTime % DAY) % HOUR) / MINUTE)
  let seconds = Math.floor((((currentTime % DAY) % HOUR) % MINUTE) / SECOND)

  updateCardData(days, hours, minutes, seconds)
}

function pad2(number) {
  return (number < 10 ? '0' : '') + number
}

function updateCardData(days, hours, minutes, seconds) {
  dayElement.querySelector('.timer-card-countdown-number').innerHTML = pad2(days);
  hourElement.querySelector('.timer-card-countdown-number').innerHTML = pad2(hours);
  minuteElement.querySelector('.timer-card-countdown-number').innerHTML = pad2(minutes);
  secondElement.querySelector('.timer-card-countdown-number').innerHTML = pad2(seconds);
}

setInterval(() => countDown(), 1000);
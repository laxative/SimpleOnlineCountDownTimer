const TIME = 60 * 60 * 24 * 3;

const SECOND = 1;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

var currentTime = TIME;

var countDownInterval = null;

var dayElement = document.querySelector('#days')
var hourElement = document.querySelector('#hours')
var minuteElement = document.querySelector('#minutes')
var secondElement = document.querySelector('#seconds')

var currentDays;
var currentHours;
var currentMinutes;
var currentSeconds;

document.querySelectorAll('.timer-card').forEach(node => {
  node.addEventListener('animationend', (event) => {
    switch (event.animationName) {
      case 'rotate':
        node.classList.remove('rotate')
        node.classList.add('rotateBack')
        rotate(node)
        break;
      case 'rotateBack':
        node.classList.remove('rotateBack')
        break;
    }
  })
})

function countDown() {
  currentTime--;
  checkCardUpdate();

  if (!currentTime && countDownInterval) clearInterval(countDownInterval);
}

function pad2(number) {
  return (number < 10 ? '0' : '') + number
}

function checkCardUpdate() {
  currentDays = Math.floor(currentTime / DAY);
  currentHours = Math.floor((currentTime % DAY) / HOUR)
  currentMinutes = Math.floor(((currentTime % DAY) % HOUR) / MINUTE)
  currentSeconds = Math.floor((((currentTime % DAY) % HOUR) % MINUTE) / SECOND)

  if (isChange(dayElement.querySelector('.timer-card-countdown-number'), pad2(currentDays))) {
    dayElement.classList.add('rotate');
  }

  if (isChange(hourElement.querySelector('.timer-card-countdown-number'), pad2(currentHours))) {
    hourElement.classList.add('rotate');
  }

  if (isChange(minuteElement.querySelector('.timer-card-countdown-number'), pad2(currentMinutes))) {
    minuteElement.classList.add('rotate');
  }

  if (isChange(secondElement.querySelector('.timer-card-countdown-number'), pad2(currentSeconds))) {
    secondElement.classList.add('rotate');
  }
}

function rotate(element) {
  switch (element.id) {
    case 'days':
      element.querySelector('.timer-card-countdown-number').innerHTML = pad2(currentDays)
      break;
    case 'hours':
      element.querySelector('.timer-card-countdown-number').innerHTML = pad2(currentHours)
      break;
    case 'minutes':
      element.querySelector('.timer-card-countdown-number').innerHTML = pad2(currentMinutes)
      break;
    case 'seconds':
      element.querySelector('.timer-card-countdown-number').innerHTML = pad2(currentSeconds)
      break;
  }
}

function isChange(element, value) {
  return element.innerHTML !== value
}

countDownInterval = setInterval(() => countDown(), 1000);

checkCardUpdate();
// Data Initial
const square = document.querySelectorAll('.square');
const btnStart = document.querySelector('#btn-start');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;

// Events
square.forEach(id => {
    id.addEventListener('mouseup', () => {
      if (id.id === hitPosition) {
        result++;
        score.textContent = result;
      }
    })
});

btnStart.addEventListener('click', moveMole);

// Functions
function randomSquare() {
  square.forEach(className => {
    className.classList.remove('mole');
    className.classList.remove('active');
  });

  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add('mole');
  randomPosition.classList.add('active');

  //  assign the id of the randomPosition to hitPosition for us to use later
  hitPosition = randomPosition.id;
}

let timerId = null;
function moveMole() {
  timerId = setInterval(randomSquare, 1000);
  if (currentTime <= 30) {
      timerId = setInterval(randomSquare, 300);
  }

  timerId = setInterval(countDown, 1000);
}

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(timerId);
    alert('GAME OVER! Seu score: ' + result);
    reset();
  }
}

function reset() {
  timeLeft.textContent = 60;
  currentTime = timeLeft.textContent;
  score.textContent = 0;
}
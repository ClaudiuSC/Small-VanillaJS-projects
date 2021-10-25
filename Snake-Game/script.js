const board = document.querySelector(".board");
const gameState = document.getElementById("game-state");
const startBtn = document.querySelector(".btn");
const scoreEl = document.getElementById("score-el");
let boxes = [];
let snake = [3, 2, 1];
let direction = 1;
let prevDirection = 1;
let randomNo = 0;
let timeInterval = 1000;
let snakeInterval;
let score = 0;

// create 100 divs for the game board
for (let i = 0; i < 100; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  // box.textContent = i;
  boxes.push(box);
  board.appendChild(box);
}

const divBoxes = document.querySelectorAll(".box");

// generate snake
function generateSnake() {
  snake.forEach((index) => divBoxes[index].classList.add("snake"));
}

generateSnake();

// move snake
function moveSnake() {
  // check for collision
  if (
    (snake[0] < 10 && direction === -10) ||
    (snake[0] > 89 && direction === 10) ||
    (snake[0] % 10 === 9 && direction === 1) ||
    (snake[0] % 10 === 0 && direction === -1) ||
    snake.includes(snake[0] + direction)
  ) {
    gameState.textContent = "Game Over!";
    return clearInterval(snakeInterval);
  }
  //---------------------------------------
  const tail = snake.pop();
  divBoxes[tail].classList.remove("snake");
  snake.unshift(snake[0] + direction);
  divBoxes[snake[0]].classList.add("snake");

  // check for apple/regenerate apple/grow snake/add to score/increase snake speed
  if (snake[0] === randomNo) {
    divBoxes[randomNo].classList.remove("apple");
    generateApple();
    snake.push(tail);
    generateSnake();
    score += 1;
    scoreEl.textContent = score;
    if (timeInterval > 150) {
      clearInterval(snakeInterval);
      timeInterval -= 50;
      snakeInterval = setInterval(moveSnake, timeInterval);
    }
  }
  //---------------------------------------
}

// control snake
function redirectSnake(e) {
  prevDirection = direction;
  if (e.code === "ArrowUp") {
    direction = -10;
  } else if (e.code === "ArrowDown") {
    direction = 10;
  } else if (e.code === "ArrowLeft") {
    direction = -1;
  } else if ((e.code = "ArrowRight")) {
    direction = 1;
  }
  // prevent self collision
  if (direction + prevDirection === 0) {
    direction = direction * -1;
  } else if (snake.includes(snake[0] + direction)) {
    direction = prevDirection;
  }
  // --------------------------------------
}

document.addEventListener("keydown", redirectSnake);

// generate random apple
function generateApple() {
  do {
    randomNo = Math.floor(Math.random() * 100);
  } while (snake.includes(randomNo));
  divBoxes[randomNo].classList.add("apple");
}

generateApple();

// start event
startBtn.addEventListener("click", () => {
  start();
  startBtn.textContent = "Restart";
});

// start game function
function start() {
  timeInterval = 1000;
  clearInterval(snakeInterval);
  snakeInterval = setInterval(moveSnake, timeInterval);
  direction = 1;
  prevDirection = 1;
  snake.forEach((index) => divBoxes[index].classList.remove("snake"));
  divBoxes[randomNo].classList.remove("apple");
  snake = [3, 2, 1];
  generateApple();
  generateSnake();
  gameState.textContent = "";
  score = 0;
  scoreEl.textContent = 0;
}

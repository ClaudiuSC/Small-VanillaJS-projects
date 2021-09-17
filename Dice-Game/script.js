const playerTurn = document.getElementById("player-turn")
const scoreOne = document.getElementById("score1")
const scoreTwo = document.getElementById("score2")
const diceOne = document.getElementById("dice1")
const diceTwo = document.getElementById("dice2")
const rollDiceBtn = document.getElementById("roll-dice")
const resetGameBtn = document.getElementById("reset-game")
let turn = true
let trackScoreOne = 0
let trackScoreTwo = 0

rollDiceBtn.addEventListener("click", () => play())

resetGameBtn.addEventListener("click", ()=> {    
    turn = 1
    trackScoreOne = 0
    trackScoreTwo = 0
    diceOne.textContent = "-"
    diceTwo.textContent = "-"
    scoreOne.textContent= "0"
    scoreTwo.textContent= "0"
    playerTurn.textContent ="Player 1 Turn"
    switchActiveClass(rollDiceBtn, resetGameBtn)
})

function play() {
  if (turn) {
    const dice = Math.floor(Math.random() * 6 + 1)
    trackScoreOne += dice
    scoreOne.textContent = trackScoreOne
    diceOne.textContent = dice
    playerTurn.textContent ="Player 2 Turn"
    switchActiveClass(diceTwo, diceOne)
    checkScore()
  } else {
    const dice = Math.floor(Math.random() * 6 + 1)
    trackScoreTwo += dice
    scoreTwo.textContent = trackScoreTwo
    diceTwo.textContent = dice
    playerTurn.textContent ="Player 1 Turn" 
    switchActiveClass(diceOne, diceTwo)
    checkScore()
  }
  turn = !turn
} 

function checkScore() {
  if(trackScoreOne >= 20) {
    playerTurn.textContent ="Player 1 Has Won 🥳"
    switchActiveClass(resetGameBtn, rollDiceBtn)
  } else if(trackScoreTwo >= 20) {
    playerTurn.textContent ="Player 2 Has Won 🎉"
    switchActiveClass(resetGameBtn, rollDiceBtn)
  }
}

function switchActiveClass(a, b) {
  a.classList.add("active")
  b.classList.remove("active")
}




let totalScore = document.getElementById("total-score")
const btnEl = document.getElementById("calculate-shots")
const twoPoints = document.getElementById("input-el2")
const threePoints = document.getElementById("input-el3")

btnEl.addEventListener("click", ()=> {
    totalScore.textContent = "Total score is: " + calc(twoPoints, threePoints)
})

function calc(a, b) {
    let total = ""
    total = a.value*2 + b.value*3
    return total
}

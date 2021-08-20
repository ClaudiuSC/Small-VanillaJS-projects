
const checkBtn = document.getElementById("check-btn")
const messageEl = document.getElementById("message-el")
let resultEl = document.getElementById("result-el")

checkBtn.addEventListener("click", function() {checkNumbers()})

function checkNumbers() {
    resultEl.textContent = "Result is:"
    const firstNumber = parseInt(document.getElementById("first-number").value)
    const secondNumber = parseInt(document.getElementById("second-number").value)
    if (isNaN(firstNumber) && isNaN(secondNumber)){
        let elStyle = `<span style="color:red"> Please populate at least one of the inputs</span>`
        resultEl.innerHTML += elStyle
    }
    else if (firstNumber === 100 || secondNumber === 100 || firstNumber + secondNumber === 100) {
        resultEl.textContent += " True"
    }
    else {
        resultEl.textContent += " False"
    }
}






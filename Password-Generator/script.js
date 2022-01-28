const passLength = document.getElementById("password-length")
const uppercaseCheck = document.getElementById("password-uppercase")
const lowercaseCheck = document.getElementById("password-lowercase")
const numbersCheck = document.getElementById("password-numbers")
const symbolsCheck = document.getElementById("password-symbols")
const generateBtn = document.querySelector(".generate-btn")
const passwordResult = document.getElementById("password-result")
const clipboardBtn = document.querySelector(".clipboard-btn")

let functionsArray

generateBtn.addEventListener("click", generatePassword)

clipboardBtn.addEventListener("click", () => {
    const textArea = document.createElement("textarea")
    const password = passwordResult.innerText
    
    if(!password) return

    textArea.value = password
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand("copy")
    textArea.remove()
    alert("Password copied to clipboard!")
})

function generatePassword() {
    let pass = ""

    checkOptions()
    
    if(functionsArray.length > 0) {
        for(i = 0; i < +passLength.value; i++) {
            const randomNo = Math.floor(Math.random() * functionsArray.length)
            pass += functionsArray[randomNo]()
        }
        passwordResult.textContent = pass
    } else {
        passwordResult.textContent = ""
    }
}

function checkOptions() {
    functionsArray = []

    uppercaseCheck.checked && functionsArray.push(getRandomUpper)
    lowercaseCheck.checked && functionsArray.push(getRandomLower)
    numbersCheck.checked && functionsArray.push(getRandomNumber)
    symbolsCheck.checked && functionsArray.push(getRandomSymbol)
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}




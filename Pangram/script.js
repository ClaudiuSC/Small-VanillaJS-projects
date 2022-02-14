const result = document.getElementById("result")
const text = document.getElementById("text")
const missing = document.getElementById("missing")

const alphabet = []
let textToCompare 

text.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        textToCompare = event.target.value
        isPangram()
    }
})

function isPangram() {
    !alphabet.length && getAlphabetLetters()
    const missingLetters = []
    
    alphabet.forEach(letter => {
        if(!textToCompare.toLowerCase().includes(letter)) {
            missingLetters.push(letter)
        }
    })
    
    missingLetters.length === 0 ? result.innerText = "Text is a pangram!" : result.innerText = "Text is NOT a pangram!"
    if(missingLetters.length > 0) {
        missing.innerText = `The misssing letters are: ${missingLetters.join("").toUpperCase().split("")}.`
    } else {
        missing.innerText = ""
    }
}

function getAlphabetLetters() {
    for(let i = 0; i < 26; i++) {
        alphabet.push(String.fromCharCode(97 + i))
    }
}

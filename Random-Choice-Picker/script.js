const textArea = document.getElementById("text")
const renderChoices = document.querySelector(".render-here")
let counter = 0

textArea.focus()

textArea.addEventListener("keyup", e => {
    const checkContent = textArea.value.replace(/(\r\n|\n|\r)/gm, "")

    if(e.key === "Enter" && checkContent !== "") {
        const textEntered = checkContent.split(",")

        renderChoices.innerHTML = textEntered.map(item => {
            if(item !== "") {
                return `<div class="tags">${item}</div>`
            }
        }).join("")

        const getTags = document.querySelectorAll(".tags")

        const interval = setInterval(() => {
            const randomNo = Math.floor(Math.random() * getTags.length)

            getTags.forEach(tag => {
                tag.classList.remove("active")
            })

            getTags[randomNo].classList.add("active")

            counter++
            if(counter === 30) {
                clearInterval(interval)
            }
        }, 100)

        textArea.value = ""
    }
    counter = 0
})

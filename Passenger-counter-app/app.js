let count = 0
let countEl = document.getElementById("current-count")
let countLog = document.getElementById("counter-log")

function peopleCounter() {
    count += 1
    countEl.textContent = count
}

function save() {
    countLog.textContent += count + " - "
    count = 0
    countEl.textContent = count
}


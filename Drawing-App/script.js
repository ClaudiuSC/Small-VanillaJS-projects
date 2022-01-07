const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const sizeEl = document.getElementById("size")
let size = parseInt(sizeEl.innerText)
let isPressed = false
let color = document.getElementById("color").value
let x
let y


// _______________________drawing mechanics______________________________
canvas.addEventListener("mousedown", (e) => {
    isPressed = true
    
    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener("mouseup", (e) => {
    isPressed = false
    
    x = undefined
    y = undefined
})

canvas.addEventListener("mousemove", (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
        
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        
        x = x2
        y = y2
    }
})

function drawCircle() {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}


// _____________________tollbox controls______________________________
document.getElementById("decrease").addEventListener("click", () => {
    if(size > 5) {
        size -= 5
        sizeEl.innerText = size
    }
})

document.getElementById("increase").addEventListener("click", () => {
    if(size < 50) {
        size += 5
        sizeEl.innerText = size
    }
})

document.getElementById("clear").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

document.getElementById("color").addEventListener("change", () => {
    color = document.getElementById("color").value
})
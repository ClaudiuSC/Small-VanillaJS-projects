const search = document.getElementById("search")
const form = document.getElementById("form")
const solution = document.getElementById("solution")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    try {
        getUsers()
    } catch {
        console.log("error")
    }
})

async function getUsers() {
    const res = await fetch("http://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    generateList(sortUsers(data))
}

function sortUsers(users) {
    return users.filter(user => user.name.toLowerCase().includes(search.value))
}

function generateList(users) {    
    solution.innerHTML = ""
    const ul = document.createElement("ul")
    users.forEach(user => {
        const li = document.createElement("li")
        li.innerHTML = `${user.name} </br>${user.email}<hr>`
        ul.append(li)
    })
    solution.append(ul)
}


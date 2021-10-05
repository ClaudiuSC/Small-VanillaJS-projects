const jokeEL = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// Using async/await
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  jokeEL.innerText = data.joke;
}

// Using .then() method
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEL.innerText = data.joke;
//     });
// }

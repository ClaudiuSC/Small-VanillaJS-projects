const inputEl = document.getElementById("input-el");
const btnEl = document.getElementById("btn-el");
const sumEl = document.getElementById("sum-el");

btnEl.addEventListener("click", () => {
  let sum = 0;
  if (inputEl.value > 0 && inputEl.value < 1001) {
    for (let i = 1; i <= inputEl.value; i++) {
      sum += i;
    }
    sumEl.textContent = sum;
  } else {
    sumEl.textContent = "Enter a number from 1 to 100!";
  }
});

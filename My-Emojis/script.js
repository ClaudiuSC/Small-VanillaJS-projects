const inputEl = document.getElementById("input-emoji");
const addEnd = document.getElementById("add-end");
const addBeginning = document.getElementById("add-beginning");
const removeEnd = document.getElementById("remove-end");
const removeBeginning = document.getElementById("remove-beginning");
let myEmojis = document.getElementById("emoji-div");
let emojiList = ["😀", "😍", "🥶"];

function renderEmojis() {
  inputEl.value = "";
  myEmojis.textContent = "";
  for (let i = 0; i < emojiList.length; i++) {
    myEmojis.innerHTML += emojiList[i];
  }
}

renderEmojis();

addEnd.addEventListener("click", () => {
  emojiList.push(inputEl.value);
  renderEmojis();
});

addBeginning.addEventListener("click", () => {
  emojiList.unshift(inputEl.value);
  renderEmojis();
});

removeEnd.addEventListener("click", () => {
  emojiList.pop();
  renderEmojis();
});

removeBeginning.addEventListener("click", () => {
  emojiList.shift();
  renderEmojis();
});

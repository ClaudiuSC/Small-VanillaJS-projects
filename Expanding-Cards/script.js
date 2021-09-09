const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// for (let i = 0; i < panels.length; i++) {
//   panels[i].addEventListener("click", () => {
//     removeClass();
//     panels[i].classList.add("active");
//   });
// }

// function removeClass() {
//   for (let i = 0; i < panels.length; i++) {
//     panels[i].classList.remove("active");
//   }
// }

const container = document.querySelector(".container");
const button = document.querySelector(".grid-btn");

for (let i = 0; i < 256; i++) {
  const box = document.createElement("div");
  container.appendChild(box);
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "purple";
  });
  button.addEventListener("click", () => {
    let userInput = prompt("What size grid?");
    box.style.backgroundColor = "orange";
    i = userInput;
    i = userInput;
  });
}

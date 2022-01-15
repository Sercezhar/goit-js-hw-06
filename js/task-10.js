function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const boxesRef = document.querySelector("#boxes")
// const createBtn = document.querySelector("[data-create]");

// function createBoxes(amount) {
//   const box = document.createElement("div");
//   box.style.backgroundColor = getRandomHexColor();
//   boxesRef.append(box);
// }

// createBtn.addEventListener("click", createBoxes);
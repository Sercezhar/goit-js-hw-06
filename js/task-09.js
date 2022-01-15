function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = document.body.style.backgroundColor;
});

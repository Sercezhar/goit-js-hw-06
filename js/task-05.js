const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener("input", (event) => {
  // outputText.textContent = event.currentTarget.value;

  // if (outputText.textContent === "") {
  //   outputText.textContent = "Anonymous";
  // }

  inputText.value === ""
    ? (outputText.textContent = "Anonymous")
    : (outputText.textContent = inputText.value);
});

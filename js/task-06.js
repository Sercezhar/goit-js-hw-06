const inputRef = document.querySelector("#validation-input");
const dataLength = Number(inputRef.getAttribute("data-length"));

console.log(dataLength);

inputRef.addEventListener("blur", (event) => {
  // if (event.currentTarget.value.length === dataLength) {
  //   inputRef.classList.remove("invalid");
  //   inputRef.classList.add("valid");
  // }

  // if (event.currentTarget.value.length !== dataLength) {
  //   inputRef.classList.remove("valid");
  //   inputRef.classList.add("invalid");
  // }

  inputRef.value.length === dataLength
    ? (inputRef.classList.remove("invalid"), inputRef.classList.add("valid"))
    : (inputRef.classList.remove("valid"), inputRef.classList.add("invalid"));
});

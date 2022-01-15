const formRef = document.querySelector(".login-form");

const userData = {
  name: "",
  password: "",
};

formRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields to login");
  }

  userData.name = `${email.value}`;
  userData.password = `${password.value}`;
  console.log(userData);
  event.currentTarget.reset();
}

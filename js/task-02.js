const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const addItems = ingredients.map((ingredient) => {
  const addItem = document.createElement("li");
  addItem.textContent = ingredient;
  addItem.classList.add("item");
  return addItem;
});

const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...addItems);

const categoriesRef = document.querySelector("#categories");
const itemsRef = categoriesRef.querySelectorAll(".item");
console.log(`Number of categories: ${itemsRef.length}`);

itemsRef.forEach((item) => {
  const categoryName = item.querySelector("h2");
  const elementsQuantity = item.querySelectorAll("li");
  console.log(`Category: ${categoryName.textContent} (elements quantity: ${elementsQuantity.length})`)
});
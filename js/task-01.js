const categoriesRef = document.querySelector("#categories");
const itemsRef = categoriesRef.querySelectorAll(".item");
console.log("Number of categories: ", itemsRef.length);

itemsRef.forEach((item) => {
  console.log("Category:", item.querySelector("h2").textContent);
  console.log("Elements:", item.querySelectorAll("li").length);
});

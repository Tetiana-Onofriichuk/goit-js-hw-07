`use strict`;
const categories = document.querySelector("#categories");
const number = categories.querySelectorAll("li.item");
console.log(`Number of categories: ${number.length}`);

const itemCategories = document.querySelectorAll(".item");
itemCategories.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("ul li").length}`);
});

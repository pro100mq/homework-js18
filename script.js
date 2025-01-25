// 1
const allCategoriesLength = document.querySelectorAll("ul#categories");
console.log(`У списку ${allCategoriesLength.length} категорії`);

const firstCategories = document.querySelector("ul#categories");
const firstTitle = firstCategories.querySelector("h2").textContent;
const firstItem = firstCategories.querySelectorAll("li");
console.log(`Категорія: ${firstTitle}`);
console.log(`Кількість елементів: ${firstItem.length}`);

const secondCategories = document.querySelector("ul#categories:nth-child(2)");
const secondTitle = secondCategories.querySelector("h2").textContent;
const secondItem = secondCategories.querySelectorAll("li");
console.log(`Категорія: ${secondTitle}`);
console.log(`Кількість елементів: ${secondItem.length}`);

const thirdCategories = document.querySelector("ul#categories:nth-child(3)");
const thirdTitle = thirdCategories.querySelector("h2").textContent;
const thirdItem = thirdCategories.querySelectorAll("li");
console.log(`Категорія: ${thirdTitle}`);
console.log(`Кількість елементів: ${thirdItem.length}`);

// 2
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsList = document.querySelector("ul#ingredients");
const itemElement = document.createElement("li");
itemElement.textContent = ingredients;
ingredientsList.append(itemElement);

// 3

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const markUp = images.map((image) => {
    const layout =`<li>
    <img width="300px" src="${image.url}" alt="${image.alt}">
    </li>`;

    return layout;
});
console.log(markUp)

const markUpToAdd = markUp.join("")
console.log(markUpToAdd)

const gallery = document.querySelector("ul#gallery")
gallery.insertAdjacentHTML("afterbegin", markUpToAdd)

gallery.style.display = "flex";
gallery.style.flexWrap = "wrap"
gallery.style.padding = "0";
gallery.style.margin = "0";
gallery.style.gap = "20px";
gallery.style.wigth = "300px"

// 4

let counterValue = 0
const value = document.querySelector("#value");
const plusBtn = document.querySelector('button[data-action="increment"]')
plusBtn.addEventListener("click", () =>{
  counterValue += 1
  value.textContent = counterValue
});


const minusBtn = document.querySelector('button[data-action="decrement"]')
minusBtn.addEventListener("click", () => {
  counterValue -= 1
  value.textContent = counterValue
})

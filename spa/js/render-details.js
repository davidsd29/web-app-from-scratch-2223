import {SetProduct} from './set-list.js';

const product = {
    img: document.querySelector(".heading img"),
    name: document.querySelector(".heading h1"),
    addButton: document.querySelector(".heading button"),
    nutrition: document.querySelector("nutrition-score"),
    productContent: document.querySelector("product-content"),
    nutritionalValues: document.querySelector("nutritional-values"),
}

const nutrition = {
  a: document.getElementById("nutriscore-A"),
  b: document.getElementById("nutriscore-B"),
  c: document.getElementById("nutriscore-C"),
  d: document.getElementById("nutriscore-D"),
  e: document.getElementById("nutriscore-E"),
}

const addButton = document.querySelector(".heading button");

// Render prodcut and updating the UI
export function RenderProduct(productInfo, barcode) {
    // detailPage.classList.remove("hidden");
    console.log(productInfo);
    product.name.textContent = `${productInfo.product_name}`;
    product.img.setAttribute("src", `${productInfo.image_url}`);
    product.img.setAttribute("alt", `${productInfo.product_name}`);

    if (productInfo.nutrition_grades == "a") {
        nutrition.a.classList.add("currentScore");
    } else if (productInfo.nutrition_grades == "b") {
        nutrition.b.classList.add("currentScore");
    } else if (productInfo.nutrition_grades == "c") {
        nutrition.c.classList.add("currentScore");
    } else if (productInfo.nutrition_grades == "d") {
        nutrition.d.classList.add("currentScore");
    } else if (productInfo.nutrition_grades == "e") {
        nutrition.e.classList.add("currentScore");
     }


    addButton.addEventListener("click",() => {
      SetProduct(barcode)
    });
}
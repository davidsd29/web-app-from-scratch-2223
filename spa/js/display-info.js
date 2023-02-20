const product = {
    img: document.querySelector(".intro img"),
    name: document.querySelector(".intro h1"),
    addButton: document.querySelector(".intro button"),
    nutrition: document.querySelector("nutrition-score"),
    productContent: document.querySelector("product-content"),
    nutritionalValues: document.querySelector("nutritional-values"),
}

/*Jeffrey hielp */

export function displayProductDetail(productInfo) {
    console.log(productInfo);
      // product.name.textContent = "lalalla";
    product.name.textContent = `${productInfo.product_name}`;

    product.img.setAttribute("src", `${productInfo.image_url}`);
    product.img.setAttribute("alt", `${productInfo.product_name}`);
}
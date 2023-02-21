import {SetProduct} from './set-list.js';
const listFrame = document.getElementById("list-frame");
// const product = {
//     img: document.querySelector(".heading img"),
//     name: document.querySelector(".heading h1"),
//     koolhydr: document.getElementById(".heading button"),
//     sugar: document.getElementById("nutrition-score"),
//     salt: document.getElementById("product-content")
// }

export function RenderListProduct(productInfo) {

// const li = document.createElement("li")
const xmlString  =
    `<li> 
        <img src='${productInfo.image_url}' alt='${productInfo.product_name}'></img>
        <aside>
            <h3>${productInfo.product_name}</h3>
            <p><span id='koolhydr'>${productInfo.nutriments.proteins}</span>Koolhydr</p>
            <p><span id='sugar'>${productInfo.nutriments.sugars}</span>Sugar</p>
            <p><span id='salt'>${productInfo.nutriments.salt}</span>Salt</p>
        </aside>
        
    </li> `;

const listItem = new DOMParser().parseFromString(xmlString, "text/xml");
// li.setAttributeNode(listItem)
console.log(listItem)

// Append to another element:
document.getElementById("list-frame").appendChild(listItem.documentElement);


    // console.log(productInfo);
    // product.name.textContent = `${productInfo.product_name}`;
    // product.img.setAttribute("src", `${productInfo.image_url}`);
    // product.img.setAttribute("alt", `${productInfo.product_name}`);

    // addButton.addEventListener("click",() => {
    //   SetProduct(barcode)
    // });
}


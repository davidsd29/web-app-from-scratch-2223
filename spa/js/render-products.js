import {filter} from './variable.js';
import { FetchGroceriesList} from './API/fetch-product.js';

const filterToggle = document.querySelector("input[name='open-filter']");
const filterSumbit = document.getElementById("filter-submit");
const listFeedback = document.getElementById("empty-list");
const listFrame = document.getElementById("list-frame");
let totalSugars = 0,
    totalSalt = 0,
    totalProteins = 0,
    totalKoolhydr = 0,
    productAmount = 0;

function RenderGroceriesListProduct (productInfo, productAmount) {
    const groceriesList = JSON.parse(localStorage.getItem("groceries") || "[]");
    let listItem;

    for (let index = 0; index < groceriesList.length; index++) { 

        totalSugars = totalSugars + productInfo.nutriments.sugars;
        totalSalt = totalSalt + productInfo.nutriments.salt;
        totalProteins = totalProteins + productInfo.nutriments.proteins;
        totalKoolhydr = totalKoolhydr + productInfo.nutriments.carbohydrates;

    if (productInfo.nutriments.sugars === null) productInfo.nutriments.sugars = 0;
    if (productInfo.nutriments.salt === null) productInfo.nutriments.salt = 0;
    if (productInfo.nutriments.proteins === null) productInfo.nutriments.proteins = 0;
    if (productInfo.nutriments.carbohydrates === null) productInfo.nutriments.carbohydrates = 0;

    const xmlString  =
        `<li> 
            <img src='${productInfo.image_url}' alt='${productInfo.product_name}'></img>
            <aside>
                <div>
                    <h3>${productInfo.product_name}</h3>
                    <span>${productAmount} x</span>
                </div>

                <section>
                    <div>
                        <p>Proteins:</p>
                        <p id='proteins'>${productInfo.nutriments.proteins} g</p>
                    </div>
                    <div>
                        <p>Koolhydr:</p>
                        <p id='koolhydr'>${productInfo.nutriments.carbohydrates} g</p>
                    </div>
                    <div>
                        <p>Sugar:</p>
                        <p id='sugar'>${productInfo.nutriments.sugars} g</p>
                    </div>
                    <div>
                        <p>Salt:</p>
                        <p id='salt'>${productInfo.nutriments.salt} g</p>
                    </div>
                </section>
            </aside>
        </li> `;

     listItem = new DOMParser().parseFromString(xmlString, "text/xml");
    }

    // Append to another element:
    listFrame.appendChild(listItem.documentElement);
}


function GetGroceriesList() {
    const groceriesList = JSON.parse(localStorage.getItem("groceries") || "[]");


    if (groceriesList.length === 0) {
        filter.value.textContent = groceriesList.length + " products";
        listFeedback.style.display = "block";
    } else listFeedback.style.display = "none"; 

        groceriesList.forEach(item => {
            productAmount = productAmount + item.productAmount;
        }); 

            const hash = window.location.hash; // Get the hash from the URL
            const linkParts = hash.split('/'); // Split the hash into an array of parts

        if (filterToggle.checked == false  || linkParts.length < 2)  SetProductAmount(productAmount);

        groceriesList.forEach(item => {
            FetchGroceriesList(item);
        });          
}

function SetProductAmount(amount) {
     filter.title.textContent = "Products";
    filter.value.textContent = amount + " items";
}

filterSumbit.addEventListener("click", () => {  SetProductAmount(productAmount) });

export { 
    GetGroceriesList,
    RenderGroceriesListProduct, 
    totalSugars,
    totalSalt,
    totalProteins,
    totalKoolhydr
}
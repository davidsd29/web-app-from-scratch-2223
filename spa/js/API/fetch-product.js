import {RenderProduct} from '../render-details.js';
import {RenderListProduct} from '../render-products.js';

function GetProductData(barcode) {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
    .then((response) => response.json())
    .then(( data => {
        RenderProduct(data.product, barcode);
    }));
}

function GetSelectedProductData(barcode) {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
    .then((response) => response.json())
    .then(( data => {
        RenderProduct(data.product, barcode);
    }));
}

function GetGroceriesListData() {
    const groceriesList = JSON.parse(localStorage.getItem("groceries") || "[]");

    groceriesList.forEach(item => {
        console.log(item.productCode);

        fetch(`https://world.openfoodfacts.org/api/v0/product/${item.productCode}.json`)
        .then((response) => response.json())
        .then(( data => {

            RenderListProduct(data.product);
        }));
    });
}

export { GetProductData, GetGroceriesListData, GetSelectedProductData };
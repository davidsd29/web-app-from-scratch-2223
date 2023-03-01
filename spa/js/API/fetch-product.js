import {RenderProduct} from '../render-details.js';
import {EditProduct} from '../render-details.js';
import {RenderListProduct} from '../render-products.js';
let groceriesListItemcount;

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
        EditProduct(data.product, barcode);
    }));
}

function GetGroceriesListData() {
    const groceriesList = JSON.parse(localStorage.getItem("groceries") || "[]");
    console.log(groceriesList.length)
    

    groceriesList.forEach(item => {
        console.log(item.productCode);
        
        fetch(`https://world.openfoodfacts.org/api/v0/product/${item.productCode}.json`)
        .then((response) => response.json())
        .then(( data => {
            // if(groceriesListItemcount != groceriesList.length ){
                RenderListProduct(data.product);
            // }    
        }));
    });

groceriesListItemcount = groceriesList.length;
}

// GetGroceriesListData();
export { GetProductData, GetGroceriesListData, GetSelectedProductData };
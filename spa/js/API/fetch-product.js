import {RenderProduct} from '../render-details.js';
import {RenderListProduct} from '../render-products.js';

export function GetData(barcode) {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
    .then((response) => response.json())
    .then(( data => {
        RenderProduct(data.product, barcode);
    }));
}

export function GetListData(productList) {
    productList.forEach(item => {
        console.log(item.productCode);

        fetch(`https://world.openfoodfacts.org/api/v0/product/${item.productCode}.json`)
        .then((response) => response.json())
        .then(( data => {

            RenderListProduct(data.product);
        }));
    });
}
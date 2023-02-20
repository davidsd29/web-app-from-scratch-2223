import {displayProductDetail} from '../display-info.js'

export function FetchProduct(barcode) {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
    .then((response) => response.json())
    .then(( data => {
        // return data; 
        displayProductDetail(data.product);
    }));
}
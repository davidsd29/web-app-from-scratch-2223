import {GetProductData, GetSelectedProductData, GetGroceriesListData} from './API/fetch-product.js';
import {FilterProduct} from './filter-products.js';
import {ScanCardBarcode} from './barcode-handler.js';
import {CreateBarcodeImage} from './API/create-card.js';
import {shopping} from './variable.js';


const title = {
    home: document.querySelector("#home h1"),
    shoppingList: document.querySelector("#shopping-list h1"),
    productList: document.querySelector("#products h1"),
}

const pages = {
    home: document.getElementById("home"),
    card: document.getElementById("shopping-card"),
    shoppingList: document.getElementById("shopping-list"),
    productList: document.getElementById("products"),
    detail: document.getElementById("product-detail"),
    edit: document.getElementById("edit-product"),
}
function CheckCardExist() {
    const shoppingCardBarcode = JSON.parse(localStorage.getItem("shoppingCard") || "[]");
        if (shoppingCardBarcode.length == 0) {
            shopping.card.classList.add("hidden");
        } else {
            shopping.card.classList.remove("hidden");
            shopping.invite.classList.add("hidden");
        }
}

function GetRouter() {
    const hash = window.location.hash; // Get the hash from the URL
    const linkParts = hash.split('/'); // Split the hash into an array of parts
    switch (linkParts[0]) { // Check which part of the hash we're dealing with
        case "#home":
            CheckCardExist();
        
            title.home.textContent = "Welcome Jhon Doe";
            if (pages.home.classList.contains("hidden")) pages.home.classList.remove("hidden");
            if (!pages.edit.classList.contains("hidden")) pages.edit.classList.add("hidden");
            if (!pages.detail.classList.contains("hidden")) pages.detail.classList.add("hidden");
            if (!pages.shoppingList.classList.contains("hidden")) pages.shoppingList.classList.add("hidden");
            if (!pages.productList.classList.contains("hidden")) pages.productList.classList.add("hidden");
            if (!shopping.frame.classList.contains("hidden")) shopping.frame.classList.add("hidden");


        break; 

        case "#shopping-list":
             title.shoppingList.textContent = "Shopping list";
            if (pages.shoppingList.classList.contains("hidden")) pages.shoppingList.classList.remove("hidden");
            if (!pages.edit.classList.contains("hidden")) pages.edit.classList.add("hidden");
            if (!pages.home.classList.contains("hidden")) pages.home.classList.add("hidden");
            if (!pages.detail.classList.contains("hidden")) pages.detail.classList.add("hidden");
            if (!pages.productList.classList.contains("hidden")) pages.productList.classList.add("hidden");
            if (!shopping.frame.classList.contains("hidden")) shopping.frame.classList.add("hidden");

            GetGroceriesListData();

             if (linkParts.length > 1) {
                const filterLink = linkParts[1]; // Get the filter from the hash
                FilterProduct(filterLink);  
                console.log(filterLink);
             }
        break;        
        
        case "#products":
            title.productList.textContent = "Resent scaned products";
            if (pages.productList.classList.contains("hidden")) pages.productList.classList.remove("hidden");
            if (!pages.edit.classList.contains("hidden")) pages.edit.classList.add("hidden");
            if (!pages.home.classList.contains("hidden")) pages.home.classList.add("hidden");
            if (!pages.detail.classList.contains("hidden")) pages.detail.classList.add("hidden");
            if (!pages.shoppingList.classList.contains("hidden")) pages.shoppingList.classList.add("hidden");
            if (!shopping.frame.classList.contains("hidden")) shopping.frame.classList.add("hidden");

        break;   
        
        case "#product":
            if (linkParts.length > 1) {
                const barcode = linkParts[1]; // Get the ID from the hash
                GetProductData(barcode);

                title.productList.textContent = "Resent scaned products";
                if (pages.detail.classList.contains("hidden")) pages.detail.classList.remove("hidden");
                if (!pages.edit.classList.contains("hidden")) pages.edit.classList.add("hidden");
                if (!pages.home.classList.contains("hidden")) pages.home.classList.add("hidden");
                if (!pages.shoppingList.classList.contains("hidden")) pages.shoppingList.classList.add("hidden");
                if (!pages.productList.classList.contains("hidden")) pages.productList.classList.add("hidden");
                if (!shopping.frame.classList.contains("hidden")) shopping.frame.classList.add("hidden");

            }
        break;         
        
        case "#shopping-card":
            // let number = 2622213062385;
            if (linkParts.length > 1) {
                const barcode = linkParts[1]; // Get the ID from the hash
                CreateBarcodeImage(barcode);
            } else {
                ScanCardBarcode();
            }

            CheckCardExist();
            title.productList.textContent = "Resent scaned products";
            if (pages.card.classList.contains("hidden")) pages.card.classList.remove("hidden");
            if (!pages.detail.classList.contains("hidden")) pages.detail.classList.add("hidden");
            if (!pages.edit.classList.contains("hidden")) pages.edit.classList.add("hidden");
            if (!pages.home.classList.contains("hidden")) pages.home.classList.add("hidden");
            if (!pages.shoppingList.classList.contains("hidden")) pages.shoppingList.classList.add("hidden");
            if (!pages.productList.classList.contains("hidden")) pages.productList.classList.add("hidden");
            
        break;  
        
        case "#edit-product":
            if (linkParts.length > 1) {
                const barcode = linkParts[1]; // Get the ID from the hash
                GetSelectedProductData(barcode);

                title.productList.textContent = "Resent scaned products";
                if (pages.edit.classList.contains("hidden")) pages.edit.classList.remove("hidden");
                if (!pages.detail.classList.contains("hidden")) pages.detail.classList.add("hidden");
                if (!pages.home.classList.contains("hidden")) pages.home.classList.add("hidden");
                if (!pages.shoppingList.classList.contains("hidden")) pages.shoppingList.classList.add("hidden");
                if (!pages.productList.classList.contains("hidden")) pages.productList.classList.add("hidden");
                 if (!shopping.frame.classList.contains("hidden")) shopping.frame.classList.add("hidden");
            }
        break;        
        
        default:
            console.log("nothing found");
    }
}

export { GetRouter };
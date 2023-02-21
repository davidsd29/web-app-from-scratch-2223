import {GetData} from './API/fetch-product.js';

const title = {
    home: document.querySelector("#home h1"),
    shoppingList: document.querySelector("#shopping-list h1"),
    productList: document.querySelector("#products h1"),
}

const pages = {
    home: document.getElementById("home"),
    shoppingList: document.getElementById("shopping-list"),
    productList: document.getElementById("products"),
    detail: document.getElementById("product-detail"),
}

export function GetRouter() {
    const hash = window.location.hash; // Get the hash from the URL
    const linkParts = hash.split('/'); // Split the hash into an array of parts
    switch (linkParts[0]) { // Check which part of the hash we're dealing with
        case "#home":
            title.home.textContent = "Welcome Jhon Doe";
            if (pages.home.classList.contains("hidden")) pages.home.classList.remove("hidden");
            if (!pages.detail.classList.contains("hidden")) pages.detail.classList.add("hidden");
            if (!pages.shoppingList.classList.contains("hidden")) pages.home.classList.add("hidden");
            if (!pages.productList.classList.contains("hidden")) pages.home.classList.add("hidden");

        break; 

        case "#shopping-list":
             title.shoppingList.textContent = "Shopping list";
            if (pages.shoppingList.classList.contains("hidden")) pages.shoppingList.classList.remove("hidden");
            if (!pages.home.classList.contains("hidden")) pages.home.classList.add("hidden");
            if (!pages.detail.classList.contains("hidden")) pages.detail.classList.add("hidden");
            if (!pages.productList.classList.contains("hidden")) pages.productList.classList.add("hidden");
        break;        
        
        case "#products":
            title.productList.textContent = "Resent scaned products";
            if (pages.productList.classList.contains("hidden")) pages.productList.classList.remove("hidden");
            if (!pages.home.classList.contains("hidden")) pages.home.classList.add("hidden");
            if (!pages.detail.classList.contains("hidden")) pages.detail.classList.add("hidden");
            if (!pages.shoppingList.classList.contains("hidden")) pages.shoppingList.classList.add("hidden");
        break;   
        
        case "#product":
            if (linkParts.length > 1) {
                const barcode = linkParts[1]; // Get the ID from the hash
                GetData(barcode);

                title.productList.textContent = "Resent scaned products";
                if (pages.detail.classList.contains("hidden")) pages.detail.classList.remove("hidden");
                if (!pages.home.classList.contains("hidden")) pages.home.classList.add("hidden");
                if (!pages.shoppingList.classList.contains("hidden")) pages.shoppingList.classList.add("hidden");
                if (!pages.productList.classList.contains("hidden")) pages.productList.classList.add("hidden");
            }
        break;        
        
        default:
            console.log("nothing found");
    }
}
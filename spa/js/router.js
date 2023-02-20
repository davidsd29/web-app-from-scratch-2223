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
    switch (window.location.hash) {
        case "#home":
            title.home.textContent = "Welcome Jhon Doe";
            if (pages.home.classList.contains("hidden")) pages.home.classList.remove("hidden");
            if (!pages.shoppingList.classList.contains("hidden")) pages.home.classList.add("hidden");
            if (!pages.productList.classList.contains("hidden")) pages.home.classList.add("hidden");

        break; 

        case "#shopping-list":
             title.shoppingList.textContent = "Shopping list";
            if (pages.shoppingList.classList.contains("hidden")) pages.shoppingList.classList.remove("hidden");
            if (!pages.home.classList.contains("hidden")) pages.home.classList.add("hidden");
            if (!pages.productList.classList.contains("hidden")) pages.productList.classList.add("hidden");
        break;        
        
        case "#products":
            title.productList.textContent = "Resent scaned products";
            if (pages.productList.classList.contains("hidden")) pages.productList.classList.remove("hidden");
            if (!pages.home.classList.contains("hidden")) pages.home.classList.add("hidden");
            if (!pages.shoppingList.classList.contains("hidden")) pages.shoppingList.classList.add("hidden");
        break;        
        
        default:
            console.log("nothing found");
    }
}
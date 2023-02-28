import {SaveProduct} from './localstorage.js';

let counter = 0;
let shoppingCartAmount = 0;

const count = {
    increaseBtn: document.querySelector(".increase"),
    decreaseBtn: document.querySelector(".decrease"),
    counterIndex: document.getElementById("counter"),
    shoppingListIndex: document.getElementById("shopping-list-index"),
}

count.counterIndex.textContent = counter;


export function SetProduct(barcode) {

    const obj = { 
        productCode: barcode,
        productAmount: counter 
    };

    if (counter != 0) {
        SaveProduct(obj);
        CheckShoppingList(counter);

        counter = 0;

        // Saving
        localStorage.setItem("groceries", JSON.stringify(groceries));
        
    } else {
        count.counterIndex.classList.add("required");
        console.log("Please give an amount");
    }
}

function CheckShoppingList(productAmount) {
    shoppingCartAmount = shoppingCartAmount + productAmount;

    if ( shoppingCartAmount != 0){
        count.shoppingListIndex.style.display = "block";
        count.shoppingListIndex.textContent = shoppingCartAmount;
    }
}

count.increaseBtn.addEventListener("click", () => {
    if (count.counterIndex.classList.contains("required")) count.counterIndex.classList.remove("required");
    counter++;
    count.counterIndex.textContent = counter;
});

count.decreaseBtn.addEventListener("click", () => {
    counter--;
    count.counterIndex.textContent = counter;
});
function SaveProduct(product) {
    console.log("checked");

    const groceriesList = JSON.parse(localStorage.getItem("groceries") || "[]");


    if (groceriesList === null) {
    console.log("no products in de list");

    localStorage.setItem("groceries", JSON.stringify(product));
    } else {
    console.log("product saved");
    groceriesList.push(product);
    localStorage.setItem("groceries", JSON.stringify(groceriesList));
    }
}

// Remove the story from localstorage
function DeleteProduct(product) {
  console.log("unchecked");

    const groceriesList = JSON.parse(localStorage.getItem("groceries") || "[]");

    // Get index of the product
    const productIndex = groceriesList.indexOf(product);

    groceriesList.splice(productIndex, 1);

    // Set the new list back in localstorage
    localStorage.setItem("groceries", JSON.stringify(groceriesList));
}

export { SaveProduct, DeleteProduct};
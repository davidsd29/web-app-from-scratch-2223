const form = {
  name: document.getElementById("product-name"),
  savedImg: document.getElementById("saved-product-img"),
  img: document.getElementById("product-img").src,
  sugar: document.getElementById("product-sugar"),
  salt: document.getElementById("product-salt"),
  nutrition: document.getElementById("product-nutrition"),
  submit: document.getElementById("edit-submit")
};

const filter = {
    value: document.getElementById("filter-awnser"),
    title: document.querySelector("#shopping-list h3"),
}

export{ form, filter }
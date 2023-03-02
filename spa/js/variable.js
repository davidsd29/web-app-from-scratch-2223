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

const scan = {
    start: document.getElementById("start-camera-scan"),
    stop: document.getElementById("stop-camera-scan")
} 

const shopping = {
  frame: document.querySelector("#shopping-card"),
  button: document.querySelector("#shopping-card button"),
  invite: document.querySelector("#shopping-card >section:first-of-type"),
  card: document.querySelector("#shopping-card >section:last-of-type")
} 

export{ form, filter, scan, shopping}
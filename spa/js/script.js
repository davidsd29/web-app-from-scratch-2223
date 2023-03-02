import {GetRouter} from './router.js';
import {ScanProductBarcode , StopCameraScan, GetFileBarcode} from './barcode-handler.js';
import {scan, shopping} from './variable.js';
import {PostProductData} from './API/post-product.js';

const fileinput = document.getElementById("qr-input-file");
const editBtn = document.getElementById("edit-product-btn");


const popUp = {
    frame: document.getElementById("error-pop-up"),
    closeBtn: document.querySelector(".close")
}

const form = {
    edit: document.getElementById("edit-product-form"),
    filter: document.getElementById("filters"),
}

function GetCodeFromUrl() {
    const hash = window.location.hash; // Get the hash from the URL
    const linkParts = hash.split('/'); // Split the hash into an array of parts

    if (linkParts.length > 1) {
        const code = linkParts[1]; // Get the ID from the hash
        return code;
    }
}

form.filter.addEventListener("input", (e) => {
    e.preventDefault();
    window.location.hash = `#shopping-list/filter= ${e.target.value}`;
});

form.edit.addEventListener("sumbit", (e) => {
    e.preventDefault();
    const barcode = GetCodeFromUrl();
    PostProductData(barcode);
});

popUp.closeBtn.addEventListener("click", () => {
    popUp.frame.classList.remove("open");
});

editBtn.addEventListener("click", () => {
    const barcode = GetCodeFromUrl();
    window.location.hash = `#edit-product/${barcode}`;   
});

shopping.button.addEventListener("click", () => {
    if (window.location.hash === "#shopping-card") {
        window.location.hash = "#home";
    } else shopping.frame.classList.add("hidden");
});

scan.stop.addEventListener("click", StopCameraScan);
scan.start.addEventListener("click", ScanProductBarcode); 

fileinput.addEventListener('change', e => { GetFileBarcode(e); });

window.onload = GetRouter(); 
window.addEventListener('hashchange', () => {
    GetRouter();
}, false);
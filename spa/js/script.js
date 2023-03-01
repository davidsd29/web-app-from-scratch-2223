import {GetRouter} from './router.js';
import {StartCameraScan} from './barcode-handler.js';
import {StopCameraScan} from './barcode-handler.js';
import {GetFileBarcode} from './barcode-handler.js';
import {PostProductData} from './API/post-product.js';

const fileinput = document.getElementById("qr-input-file");
const editBtn = document.getElementById("edit-product-btn")

const form = {
    edit: document.getElementById("edit-product-form"),
    filter: document.getElementById("filters"),
}

const scan = {
    start: document.getElementById("start-camera-scan"),
    stop: document.getElementById("stop-camera-scan"),
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

editBtn.addEventListener("click", () => {
    const barcode = GetCodeFromUrl();
    window.location.hash = `#edit-product/${barcode}`;   
});

scan.stop.addEventListener("click", () => {
    StopCameraScan()
    scan.stop.style.display = "none";
});

scan.start.addEventListener("click", () => {
    // Set delay on appearance of stopscan button
    setTimeout(function() {scan.stop.style.display = "block";}, 1400);
    StartCameraScan();
}); 

fileinput.addEventListener('change', e => { GetFileBarcode(e); });

window.onload = GetRouter(); 
window.addEventListener('hashchange', () => {
    GetRouter();
}, false);
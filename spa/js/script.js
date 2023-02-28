import {GetRouter} from './router.js';
import {StartCameraScan} from './barcode-handler.js';
import {StopCameraScan} from './barcode-handler.js';
import {GetFileBarcode} from './barcode-handler.js';
import {GetGroceriesListData} from './API/fetch-product.js';

const listBtn = document.querySelector("footer li:last-of-type a");
const fileinput = document.getElementById("qr-input-file");
const editBtn = document.getElementById("edit-product")

const scan = {
    start: document.getElementById("start-camera-scan"),
    stop: document.getElementById("stop-camera-scan"),
} 

editBtn.addEventListener("click", () => {
    const hash = window.location.hash; // Get the hash from the URL
    const linkParts = hash.split('/'); // Split the hash into an array of parts

    if (linkParts.length > 1) {
        const barcode = linkParts[1]; // Get the ID from the hash
        window.location.hash = `#edit-product/${barcode}`;
    }
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

listBtn.addEventListener("click", () => {
    GetGroceriesListData();
});

window.onload = GetRouter(); 
window.addEventListener('hashchange', () => {
    GetRouter();
}, false);
import {FetchProduct} from './API/fetch-product.js';
import {GetRouter} from './router.js';
// import {productInfo} from './API/fetch-product.js';

const scan = {
    start: document.getElementById("start-camera-scan"),
    stop: document.getElementById("stop-camera-scan"),
} 
const scanner = new Html5Qrcode("scanner");

scan.stop.addEventListener("click", stopScanning);
scan.start.addEventListener("click", () => {
    // Set delay on appearance of stopscan button
    setTimeout(function() {scan.stop.style.display = "block";}, 1400);
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    const qrCodeSuccessCallback = (barcode) => {
        const productInfo = FetchProduct(barcode);
        stopScanning();
        pages.detail.classList.remove("hidden");
        console.log(productInfo);
        yolo()
        // DisplayProductDetail(productInfo);
    };

    scanner.start({ facingMode: "environment" }, config, qrCodeSuccessCallback).catch((err) => {
        console.log(err);
    });
}); 


export function yolo(data){ /*Jeffrey hielp */
    console.log(data)
}

// Stops scanning of the
function stopScanning() {
    scanner.stop().then((ignore) => {
        // QR Code scanning is stopped.
        // Clears scanning instance. Stops the camera
        scanner.clear();

        // Removes reader element from DOM since no longer needed
        document.getElementById("scanner").remove();
    })
    .catch((err) => {
        // Stop failed, handle it.
        console.log("Stop function faild, please try again");
    });
}



// window.onload = router(); 
window.addEventListener('hashchange', function () {
    GetRouter();
}, false);
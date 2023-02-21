import {RenderProduct} from './render-details.js';
import {GetData} from './API/fetch-product.js';

const scanner = new Html5Qrcode("scanner");
const stopScanningBtn = document.getElementById("stop-camera-scan");

export function StartScan () {
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    const qrCodeSuccessCallback = (barcode) => {
        // GetData(barcode);
        // // return data; 
        StopScanning();
        window.location.hash = `#product/${barcode}`;
        GetRouter();
    };

    scanner.start({ facingMode: "environment" }, config, qrCodeSuccessCallback).catch((err) => {
        console.log(err);
    });
}

// Stops scanning of the
export function StopScanning() {
    scanner.stop().then((ignore) => {
        // QR Code scanning is stopped.
        // Clears scanning instance. Stops the camera
        scanner.clear();

        // Removes reader element from DOM since no longer needed
        // document.getElementById("scanner").remove();
        stopScanningBtn.style.display = "none";
    })
    .catch((err) => {
        // Stop failed, handle it.
        console.log("Stop function faild, please try again");
    });
}
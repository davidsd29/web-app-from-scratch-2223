const scanner = new Html5Qrcode("scanner");
const stopScanningBtn = document.getElementById("stop-camera-scan");
const fileCodeReader = new Html5Qrcode("reader");

// Start scanning of the camera
function StartCameraScan () {
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    const qrCodeSuccessCallback = (barcode) => {
        // // return data; 
        StopCameraScan();
        window.location.hash = `#product/${barcode}`;
        GetRouter();
        console.log("lalal");
    };

    scanner.start({ facingMode: "environment" }, config, qrCodeSuccessCallback).catch((err) => {
        console.log(err);
    });
}

// Stops scanning of the camera
function StopCameraScan() {
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

function GetFileBarcode(event) {
    if (event.target.files.length == 0) {
        console.log("no file found");
        return;
    }

    const imageFile = event.target.files[0];

    // Scan QR Code
    fileCodeReader.scanFile(imageFile, true)
    .then(barcode => {
    // barcode succes = true
    window.location.hash = `#product/${barcode}`;
    console.log(barcode);
    
    })
    .catch(err => {
    // failure, handle it.
    console.log(`Error scanning file. Reason: ${err}`)
    });
}

export { StartCameraScan, StopCameraScan, GetFileBarcode };
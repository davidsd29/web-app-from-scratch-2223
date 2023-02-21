import {GetRouter} from './router.js';
import {StartScan} from './scan.js';
import {StopScanning} from './scan.js';
import {groceries} from './set-list.js';
import {GetListData} from './API/fetch-product.js';



window.addEventListener("DOMContentLoaded", () => {
const listBtn = document.querySelector("footer li:last-of-type a")

    const scan = {
        start: document.getElementById("start-camera-scan"),
        stop: document.getElementById("stop-camera-scan"),
    } 

    scan.stop.addEventListener("click", () => {
        StopScanning()
        scan.stop.style.display = "none";
    });

    scan.start.addEventListener("click", () => {
        // Set delay on appearance of stopscan button
        setTimeout(function() {scan.stop.style.display = "block";}, 1400);
        StartScan();
        
    }); 

    listBtn.addEventListener("click", () => {
        GetListData(groceries);
    });

    window.onload = GetRouter(); 
    window.addEventListener('hashchange', () => {
        GetRouter();
    }, false);

    console.log("DOM fully loaded and parsed");
});
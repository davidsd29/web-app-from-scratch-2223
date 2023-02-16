console.log(Html5QrcodeScanner);

const scanner = new Html5QrcodeScanner("scanner", {
// Scanner will be initialized in DOM inside element with id of 'scanner'\
// Box styling (relative to scanner element width)
    qrbox: {
        width: 300,
        height: 250,
    },  
    // Frames per second to attempt a scan
    fps: 20,
});
    // Render to the succes fnc if there is an succes else Error fnc
    scanner.render(success, error);
    // Starts scanner

    function success(result) {
console.log(result);
        // Prints result as a link inside result element
        document.getElementById('result').innerHTML = `
            <h2>Success!</h2>
            <p><a href="${result}">${result}</a></p>
        `;

        // Clears scanning instance. Stops the camera
        scanner.clear();

        // Removes reader element from DOM since no longer needed
        document.getElementById('scanner').remove();
    }

    function error(err) {
        // Prints any errors to the console
        console.error(err);
    }
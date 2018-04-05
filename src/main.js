const electron = require('electron')
const remote = electron .remote

document.getElementById("close-button").addEventListener("click", function(e) {
    // alert("Close button pressed")
    const window = remote.getCurrentWindow()
    window.close()
})
const BORDER = "1px dashed #ccc";

var blockedImgUrl = browser.extension.getURL("images/no.png");

var images = document.images;
var links = document.querySelectorAll("a");

// Base definitions for overlays appled to images.
var overlayTemplate = document.createElement("div");
overlayTemplate.style.backgroundImage = "url(" + blockedImgUrl + ")";
overlayTemplate.style.backgroundRepeat = "no-repeat";
overlayTemplate.style.backgroundPosition = "center";
overlayTemplate.style.border = BORDER;
overlayTemplate.style.padding = 0;
overlayTemplate.style.margin = 0;
overlayTemplate.style.width = "100%";
overlayTemplate.style.height = "100%";

function applyOverlay(node) {
    var overlay = overlayTemplate.cloneNode(false);
    /*
    overlay.onclick = function() {
    }
    */

    node.prepend(overlay);
}


for (var i = 0; i < links.length; i++) {
    var style = window.getComputedStyle(links[i]);
    //if (style.getPropertyValue("background-image") != 'none') {
    if (style.getPropertyValue("background-image").startsWith("url")) {
        applyOverlay(links[i]);
    }
}

for (var i = 0; i < images.length; i++) {
    applyOverlay(images[i])
    //images[i].old_src = images[i].src;
    //images[i].src = blockedImgUrl;
    //if (!images[i].border)
}

const IMAGE_BORDER = "1px dashed #ccc"
// Add border to all images
var images = document.querySelectorAll("img");

for (var i = 0; i < images.length; i++) {
    if (!images[i].border)
        images[i].style.border = IMAGE_BORDER;
}

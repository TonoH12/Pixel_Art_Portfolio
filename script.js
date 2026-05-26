function clickImage(this) {
    sessionStorage.setItem(currentImage, this.getAttribute.src);
}

function setImage() {
    let img = document.getElementById("dependImage");
    img.src = sessionStorage.getItem(currentImage);
}
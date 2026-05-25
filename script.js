function clickImage(this) {
    sessionStorage.setItem(currentImage, this.getAttribute.src);
}

function setImage(this) {
    this.firstElementChild.src = sessionStorage.getItem(currentImage);
}
function clickImage(this) {
    sessionStorage.setItem(currentImage, this.getAttribute.src);
    window.location.href = "image";
}

function setImage(this) {
    this.firstElementChild.src = sessionStorage.getItem(currentImage);
}
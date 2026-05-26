function clickImage(this) {
    sessionStorage.setItem(currentImage, this.getAttribute.src);
}

// function setImage() {
//     let img = document.getElementById('dependImage').setAttribute('src', 'Images/Cat.png');
//     // sessionStorage.getItem("");
// }

window.onload = function() {
    document.getElementById('dependImage').src = 'Images/Cat.png';
};
function resizeTextboxes() {
    let width = window.innerWidth;
    let withoutMargins = width ;

    let leftLength = (withoutMargins * 0.6);
    let rightLength = (withoutMargins * 0.4);

    document.documentElement.style.setProperty('--left_div_width', leftLength + 'px');
    document.documentElement.style.setProperty('--right_div_width', rightLength + 'px');
}

resizeTextboxes();
window.addEventListener('resize', function() {
    resizeTextboxes();
});

let currentImage = 1;
let timer;
function imageMinus() {
    currentImage -= 2;
    nextImage();
    clearInterval(timer);
    timer = setInterval(nextImage, 3000);
}

function imageAdd() {
    nextImage();
    clearInterval(timer);
    timer = setInterval(nextImage, 3000);
}

function nextImage() {
    currentImage++;
    if (currentImage > 3) {
        currentImage = 1;
    } else if (currentImage < 1) {
        currentImage = 3;
    }
    
    switch (currentImage) {
        case 1:
            document.getElementById('rotatingImage').src = 'Images/Juice_Light.png';
            break;
        case 2:
            document.getElementById('rotatingImage').src = 'Images/Dallies_Exotic.png';
            break;
        case 3:
            document.getElementById('rotatingImage').src = 'Images/Dallies_Bubbles.png';
            break;
    }
}

// window.addEventListener('load', function() {
document.addEventListener('DOMContentLoaded', function() {
    currentImage = 1;
    if (document.getElementById('imageCarousel') != null) {
        timer = setInterval(nextImage, 3000);
    }
});
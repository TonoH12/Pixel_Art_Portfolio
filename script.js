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
    document.getElementById('circle1').style.backgroundColor = 'transparent';
    document.getElementById('circle2').style.backgroundColor = 'transparent';
    document.getElementById('circle3').style.backgroundColor = 'transparent';

    currentImage++;
    if (currentImage > 3) {
        currentImage = 1;
    } else if (currentImage < 1) {
        currentImage = 3;
    }
    
    switch (currentImage) {
        case 1:
            document.getElementById('rotatingImage3').style.opacity = 0;
            document.getElementById('rotatingImage1').style.opacity = 1;
            document.getElementById('circle1').style.backgroundColor = '#fff7e4';
            break;
        case 2:
            document.getElementById('rotatingImage1').style.opacity = 0;
            document.getElementById('rotatingImage2').style.opacity = 1;
            document.getElementById('circle2').style.backgroundColor = '#fff7e4';
            break;
        case 3:
            document.getElementById('rotatingImage2').style.opacity = 0;
            document.getElementById('rotatingImage3').style.opacity = 1;
            document.getElementById('circle3').style.backgroundColor = '#fff7e4';
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
function getImage(event) {
    event.preventDefault();
    sessionStorage.setItem('givenImage', event.target.querySelector('img'));
    window.location.href = 'image.html';
}

function setPage() {
    // document.getElementById('dependImage').src = 'Images/Cat.png';
    // sessionStorage.setItem('givenImage', 'Images/Cat.png');
    document.getElementById('dependImage').src = sessionStorage.getItem('givenImage');
    // document.getElementById('checkerText').textContent = sessionStorage.getItem('givenImage');
}
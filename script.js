function getImage(event) {
    event.preventDefault();
    sessionStorage.setItem('givenImage', this.querySelector('img').src);
    window.location.href = 'image.html';
}

function setPage() {
    // document.getElementById('dependImage').src = 'Images/Cat.png';
    document.getElementById('dependImage').src = sessionStorage.getItem('givenImage');
}
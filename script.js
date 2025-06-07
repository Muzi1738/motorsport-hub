let images = document.querySelectorAll('.fullscreen-gallery img');
let fullscreenImage = document.getElementById('fullscreen-image');
let fullscreenContainer = document.getElementById('fullscreen-container');
let currentIndex = 0;
function openFullscreen(index) {
currentIndex = index;
fullscreenImage.src = images[currentIndex].src;
fullscreenContainer.style.display = 'flex';
}
function closeFullscreen() {
fullscreenContainer.style.display = 'none';
}
function changeImage(direction) {
currentIndex += direction;
if (currentIndex < 0) {
currentIndex = images.length - 1;
} else if (currentIndex >= images.length) {
currentIndex = 0;
}
fullscreenImage.src = images[currentIndex].src;
}
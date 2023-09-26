const mainPhoto = document.querySelector('#MainPhoto');

mainPhoto.addEventListener('mouseenter', () => {
  // Add the "spin" class when the image is hovered over
  mainPhoto.classList.add('spin');
});

mainPhoto.addEventListener('mouseleave', () => {
  // Remove the "spin" class when the mouse leaves the image
  mainPhoto.classList.remove('spin');
});

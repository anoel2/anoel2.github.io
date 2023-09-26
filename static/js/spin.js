const mainPhoto = document.querySelector('#MainPhoto');

mainPhoto.addEventListener('mouseover', () => {
  // Add the "spin" class when the mouse is over the image
  mainPhoto.classList.add('spin');
});

mainPhoto.addEventListener('mouseout', () => {
  // Remove the "spin" class when the mouse leaves the image
  mainPhoto.classList.remove('spin');
});

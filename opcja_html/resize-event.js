const photos = document.querySelectorAll('.photo');
const backgroundPhoto = document.getElementById('image-360');

photos.forEach(photo => photo.addEventListener('click', () => {
  imageSrc = photo.dataset.src;
  backgroundPhoto.setAttribute('src', imageSrc);
}))
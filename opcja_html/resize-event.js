// pobranie elementów z pliku html

const photos = document.querySelectorAll('.photo');
const backgroundPhoto = document.getElementById('image-360');
const descriptionButton = document.querySelector('.description');

// funkcja zmieniająca tło i pozycję przycisku description po kliknięciu w miniaturę zdjęcia

photos.forEach(photo => photo.addEventListener('click', () => {
  descriptionButton.setAttribute('material', 'color: black; visible: true');
  imageSrc = photo.dataset.src;
  backgroundPhoto.setAttribute('src', imageSrc);
  configArray.forEach(item => {
    if (item.background === imageSrc) {
      descriptionButton.setAttribute('position', item.position);
      descriptionButton.setAttribute('rotation', item.rotation);
    }
  });
}))

// dane na temat obiektów do opisania

const configArray = [
  {
    background: '#waly',
    position: '-9 1 1,5',
    rotation: '0 90 0',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, voluptas? Adipisci quia facilis doloribus nisi minus! Quos velit, iste beatae sed esse sequi aspernatur sit libero maxime laudantium nemo facilis.',
  },
  {
    background: '#katedra',
    position: '-10 6 0',
    rotation: '0 90 0',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, voluptas? Adipisci quia facilis doloribus nisi minus! Quos velit, iste beatae sed esse sequi aspernatur sit libero maxime laudantium nemo facilis.',
  },
  {
    background: '#filharmonia',
    position: '-13 6 0',
    rotation: '0 90 -45',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, voluptas? Adipisci quia facilis doloribus nisi minus! Quos velit, iste beatae sed esse sequi aspernatur sit libero maxime laudantium nemo facilis.',
  },
]

// INFO JAK EDYTOWAĆ ATRYBUTY PRZY ZMIANIE ZDJĘCIA:
// poczta - position='9 3 -2.5' rotation='0 -90 0'
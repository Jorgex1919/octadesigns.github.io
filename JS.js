//JS.js

// Obt�n todas las im�genes de camisetas y sudaderas
const images = document.querySelectorAll('.shirt-item img, .hoodie-item img');

// Obt�n el contenedor del lightbox
const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('img');

// Agrega un evento de clic a cada imagen
images.forEach(image => {
    image.addEventListener('click', () => {
        const imageUrl = image.getAttribute('src'); // Obt�n la URL de la imagen, nombre y precio

        lightboxImg.setAttribute('src', imageUrl); // Establece la URL de la imagen en el lightbox, el nombre y el precio
        lightbox.style.display = 'flex'; // Muestra el lightbox
    });
});

// Agrega un evento de clic al lightbox para cerrarlo
lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Oculta el lightbox al hacer clic en �l
});

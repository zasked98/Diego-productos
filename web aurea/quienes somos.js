document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "imagenes/body/1.jpg",
        "imagenes/body/8.jpg",
        "imagenes/body/9.jpg",
        "imagenes/body/10.jpg",
        "imagenes/body/11.jpg",
        
    ];

    let index = 0;
    const galleryContainer = document.getElementById("gallery-container");

    function changeImage() {
        index = (index + 1) % images.length;
        galleryContainer.innerHTML = `<img src="${images[index]}" alt="Imagen ${index + 1}">`;
    }

    // Cambiar la imagen cada 3 segundos
    setInterval(changeImage, 3000);

    // Permitir avanzar manualmente al hacer clic en la imagen
    galleryContainer.addEventListener("click", changeImage);
});

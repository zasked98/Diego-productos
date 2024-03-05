document.addEventListener('DOMContentLoaded', function() {
    const productImages = document.querySelectorAll('.product-image');

    productImages.forEach(image => {
        image.addEventListener('click', function() {
            this.style.transform = 'scale(1.2)'; // Hace que la imagen se agrande al hacer clic
        });

        image.addEventListener('transitionend', function() {
            if (this.style.transform === 'scale(1.2)') {
                this.style.transform = ''; // Restablece el tamaño normal después de la transición
            }
        });
    });
});

document.addEventListener("mousemove", function(e) {
    const body = document.querySelector("body");
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    body.style.backgroundColor = `rgb(${Math.round(255 * mouseX)}, ${Math.round(255 * mouseY)}, 100)`;
});

document.addEventListener("click", function(e) {
    const body = document.querySelector("body");
    body.style.transition = "background-color 0.5s ease";
    body.style.backgroundColor = "#ffa500";
    setTimeout(function() {
        body.style.transition = "";
    }, 500);
});

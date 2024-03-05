document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (validateForm()) {
            sendEmail();
        }
    });

    function validateForm() {
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const motivo = document.getElementById("motivo").value.trim();

        if (nombre === "" || email === "" || telefono === "" || motivo === "") {
            alert("Por favor completa todos los campos del formulario.");
            return false;
        }

        return true;
    }

    function sendEmail() {
        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();

        xhr.open("POST", "enviar_mail.php");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onload = function() {
            if (xhr.status === 200) {
                alert("¡Mensaje enviado correctamente!");
                form.reset();
            } else {
                alert("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.");
            }
        };

        xhr.send(new URLSearchParams(formData).toString());
    }
});

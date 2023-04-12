document.addEventListener("DOMContentLoaded", function() {
    const formRegistro = document.getElementById('form-registro');

    formRegistro.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(formRegistro);
        const jsonData = {};

        for (let [key, value] of formData.entries()) {
            jsonData[key] = value;
        }

        const jsonResult = JSON.stringify(jsonData);
        localStorage.setItem('usuario', jsonResult);

        // Redireccionar a la página principal
        window.location.href = 'index.html';
    });

    function cargarUsuario() {
        const usuarioJSON = localStorage.getItem('usuario');

        if (usuarioJSON) {
            const usuario = JSON.parse(usuarioJSON);
            const nombreUsuario = usuario.nombre;

            // Actualizar el saludo en la página
            const saludo = document.getElementById('saludo');
            if (saludo) {
                saludo.innerHTML = `Bienvenido, ${nombreUsuario}!`;
            }
        }
    }

    cargarUsuario();
});

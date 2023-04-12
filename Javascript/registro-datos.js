document.addEventListener("DOMContentLoaded", function () {
    const formRegistro = document.getElementById('form-registro');

    formRegistro.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Obtener los valores de los campos del formulario
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirm-password').value;
        var direccion = document.getElementById('direccion').value;
        var telefono = document.getElementById('telefono').value;

        // Validar los datos del usuario
        // Aquí puedes agregar tus propias reglas de validación para cada campo
        if (nombre === '') {
            alert('Por favor ingrese su nombre');
            return;
        }

        if (email === '') {
            alert('Por favor ingrese su correo electrónico');
            return;
        }

        if (password === '') {
            alert('Por favor ingrese su contraseña');
            return;
        }

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        // Enviar una solicitud POST al servidor con los datos del usuario
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/registrar-usuario');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function () {
            if (xhr.status === 200) {
                // Redirigir al usuario a la página de inicio y establecer una sesión
                window.location.href = '/index.html';
                // Aquí puedes establecer una sesión para el usuario en el servidor
            } else {
                // Mostrar un mensaje de error si algo sale mal
                alert('Ha ocurrido un error al registrar el usuario');
            }
        };
        xhr.send(JSON.stringify({
            nombre: nombre,
            email: email,
            password: password,
            direccion: direccion,
            telefono: telefono
        }));
    });
});

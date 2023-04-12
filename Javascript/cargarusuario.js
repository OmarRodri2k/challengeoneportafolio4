function cargarUsuario() {
    const usuarioJSON = localStorage.getItem('usuario');

    if (usuarioJSON) {
        const usuario = JSON.parse(usuarioJSON);
        const nombreUsuario = usuario.nombre;

        // Actualizar el saludo en la página
        const saludo = document.getElementById('saludo');
        saludo.innerHTML = `Bienvenido, ${nombreUsuario}!`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    cargarUsuario();
});

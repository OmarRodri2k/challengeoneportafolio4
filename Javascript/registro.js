// Obtener una referencia al botón "Iniciar sesión"
const botonIniciar = document.getElementById("boton-iniciar");

// Agregar un controlador de eventos clic al botón "Iniciar sesión"
botonIniciar.addEventListener("click", function() {
    // Redirigir al usuario a la página "inicio-sesion.html"
    window.location.href = "registro.html";
});

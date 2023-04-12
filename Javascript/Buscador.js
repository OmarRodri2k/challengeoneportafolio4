
// Obtener el valor del parámetro de consulta "q" de la URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const searchQuery = urlParams.get('q');

// Agregar el valor de búsqueda a un elemento de encabezado HTML
const header = document.querySelector('h1');
header.textContent = `Resultados de búsqueda para "${searchQuery}"`;


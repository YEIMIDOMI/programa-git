// script.js
window.onload = function() {
    alert("¡Bienvenido a la página de suculentas!");
};
// script.js
document.addEventListener("DOMContentLoaded", function() {
    const botonTema1 = document.getElementById("botonTema1");
    const imagenTema1 = document.querySelector("#tema1 + img"); // Selecciona la imagen que sigue al h2

    botonTema1.addEventListener("click", function() {
        if (imagenTema1.style.display === "none" || imagenTema1.style.display === "") {
            imagenTema1.style.display = "block";
            botonTema1.textContent = "Ocultar Detalles";
        } else {
            imagenTema1.style.display = "none";
            botonTema1.textContent = "Mostrar Detalles";
        }
    });
});

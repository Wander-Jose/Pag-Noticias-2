 /* menu retracrtil */
document.getElementById("menuIcon").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
});

 /* hora y fecha */
function actualizarRelojYFecha() {
    const reloj = document.getElementById("reloj");
    const fecha = document.getElementById("fecha");
    const ahora = new Date();
    
    const horas = ahora.getHours().toString().padStart(2, "0");
    const minutos = ahora.getMinutes().toString().padStart(2, "0");
    const segundos = ahora.getSeconds().toString().padStart(2, "0");

    const dia = ahora.getDate().toString().padStart(2, "0");
    const mes = (ahora.getMonth() + 1).toString().padStart(2, "0"); // Los meses comienzan desde 0
    const anio = ahora.getFullYear();

    reloj.textContent = `Hora: ${horas}:${minutos}:${segundos}`;
    fecha.textContent = `Fecha: ${dia}/${mes}/${anio}`;
}

setInterval(actualizarRelojYFecha, 1000); // Actualizar cada segundo
actualizarRelojYFecha(); // Llamar una vez inmediatamente para mostrar la hora inicial
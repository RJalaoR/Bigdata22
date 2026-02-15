// Botón volver arriba
const topBtn = document.getElementById("topBtn");

window.onscroll = function() {
    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Geolocalización (solo mostrará en consola)
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Ubicación detectada:");
        console.log("Latitud: " + position.coords.latitude);
        console.log("Longitud: " + position.coords.longitude);
    });
}

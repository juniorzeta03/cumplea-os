document.addEventListener("DOMContentLoaded", function () {
    const btnContinuar = document.getElementById("continuar");
    const pantallaCarga = document.getElementById("pantalla-carga");
    const contenido = document.getElementById("contenido");
    const audio = document.getElementById("audio-fondo");

    btnContinuar.addEventListener("click", function () {
        pantallaCarga.style.display = "none";
        contenido.classList.remove("oculto");
        audio.play();
    });
});

function ampliarImagen(img) {
    const imagenAmpliada = document.getElementById("imagen-ampliada");
    const imgGrande = document.getElementById("img-grande");
    const descripcion = document.getElementById("descripcion-img");

    imgGrande.src = img.src;

    const descripciones = {
        "foto1.jpg": "Tu sonrisa ilumina como el sol 🌞",
        "foto2.jpg": "Momentos inolvidables 💖",
        "foto3.jpg": "Eres única y especial ✨",
        "foto4.jpg": "Un recuerdo lleno de alegría 🎈",
        "foto5.jpg": "Tu belleza interior resalta siempre 🌷",
        "foto6.jpg": "Simplemente tú, auténtica y maravillosa 🌟"
    };

    const nombreArchivo = img.src.split("/").pop();
    descripcion.textContent = descripciones[nombreArchivo] || "Una foto hermosa de ti";

    imagenAmpliada.style.display = "flex";
}

function cerrarImagen() {
    document.getElementById("imagen-ampliada").style.display = "none";
}

function mostrarCarta() {
    const modalCarta = document.createElement("div");
    modalCarta.classList.add("modal-carta");

    const cartaContenido = document.createElement("div");
    cartaContenido.classList.add("contenido-carta");

    // Flor animada con CSS
    const flor = document.createElement("div");
    flor.classList.add("flor-css");
    cartaContenido.appendChild(flor);

    modalCarta.appendChild(cartaContenido);
    document.body.appendChild(modalCarta);

    setTimeout(() => {
        flor.remove();
        cartaContenido.innerHTML = `
            <div class="contenido-carta-texto">
                <p>Querida Cielito,</p>
                <p>>Hoy es un día muy especial porque celebras un año mas de vida, tu luz y todo lo bonito que transmites a quienes te rodean. Que nunca te falten razones para sonreír, soñar y seguir brillando como lo haces.</p>
                <p>Te deseo un camino lleno de amor, éxito, salud y momentos que te hagan inmensamente feliz y que te valla bien en tu vida💖</p>
                <p>Con mucho cariño,</p>
                <p>💌 espero te guste</p>
                <img class="mini" src="imagenes/foto7.jpg" alt="Ani Maricielo" width="50px" heigth="40px"><br>
                <button onclick="cerrarModal()">Cerrar</button>
            </div>
        `;
    }, 2000);
}

function cerrarModal() {
    const modal = document.querySelector(".modal-carta");
    if (modal) modal.remove();
}

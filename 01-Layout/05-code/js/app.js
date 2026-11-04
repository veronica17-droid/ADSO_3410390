const mburger =document.getElementById('mburger');
const options= document.getElementById('navbar');

mburger.addEventListener('click', function() {
  this.classList.toggle('active');
  options.classList.toggle('active');
});
const navLinks = document.querySelectorAll('#navbar nav.options a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Quitamos la clase 'active' de ambos elementos
    mburger.classList.remove('active');
    options.classList.remove('active');
  });
});

//carrusel
document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.querySelector(".cards");
    const btnPrev   = document.querySelector(".btn-carrusel.prev");
    const btnNext   = document.querySelector(".btn-carrusel.next");

    if (!contenedor || !btnPrev || !btnNext) return;

    const getScrollAmount = () => {
        const card = contenedor.querySelector(".card");
        if (!card) return 300;
        const gap = parseFloat(getComputedStyle(contenedor).gap) || 0;
        return card.offsetWidth + gap;
    };

    const updateButtons = () => {
        const maxScroll = contenedor.scrollWidth - contenedor.clientWidth;
        btnPrev.disabled = contenedor.scrollLeft <= 1;
        btnNext.disabled = contenedor.scrollLeft >= maxScroll - 1;
    };

    btnPrev.addEventListener("click", () => {
        contenedor.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
    });

    btnNext.addEventListener("click", () => {
        contenedor.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
    });

    contenedor.addEventListener("scroll", updateButtons);
    updateButtons(); // estado inicial
});
//ficha tecnica
// Función reutilizable para cualquier carrusel
function initCarrusel(trackSelector, prevSelector, nextSelector) {
    const track = document.querySelector(trackSelector);
    const btnPrev = document.querySelector(prevSelector);
    const btnNext = document.querySelector(nextSelector);

    if (!track || !btnPrev || !btnNext) return;

    const getScrollAmount = () => {
        const item = track.firstElementChild;
        if (!item) return 300;
        const gap = parseFloat(getComputedStyle(track).gap) || 0;
        return item.offsetWidth + gap;
    };

    const updateButtons = () => {
        const maxScroll = track.scrollWidth - track.clientWidth;
        btnPrev.disabled = track.scrollLeft <= 1;
        btnNext.disabled = track.scrollLeft >= maxScroll - 1;
    };

    btnPrev.addEventListener("click", () => {
        track.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
    });
    btnNext.addEventListener("click", () => {
        track.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
    });

    track.addEventListener("scroll", updateButtons);
    updateButtons();
}

document.addEventListener("DOMContentLoaded", () => {
    // Carrusel de películas
    initCarrusel(".cards", ".cards ~ .btn-carrusel.prev", ".cards ~ .btn-carrusel.next");
    // El selector de arriba asume la estructura con .carrusel-wrapper
    // Si tus botones están dentro de .carrusel-wrapper, usa:
    // initCarrusel("#peliculas .cards", "#peliculas .btn-carrusel.prev", "#peliculas .btn-carrusel.next");

    // Carrusel de fichas técnicas
    initCarrusel(
        "#ficha-tecnica .fichas-track",
        "#ficha-tecnica .btn-carrusel.prev",
        "#ficha-tecnica .btn-carrusel.next"
    );
});
//carrusel pie de pagina
// Carrusel del Muro del Caos
initCarrusel(
    "#muro-del-caos .cards-muro",
    "#muro-del-caos .btn-carrusel.prev",
    "#muro-del-caos .btn-carrusel.next"
);
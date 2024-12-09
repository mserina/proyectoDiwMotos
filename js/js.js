function setOption(option) {
    document.getElementById('opcionClub').textContent = option;
  }

  // Datos de ejemplo (puedes reemplazar esto con datos dinámicos de un servidor)
  const events = [
    { title: "Evento Moto 1", date: "03/12/2024", time: "22:10", price: "9€", img: "/img/evento1.jpg" },
    { title: "Evento Moto 2", date: "10/12/2024", time: "18:00", price: "12€", img: "/img/evento1.jpg" },
    { title: "Evento Moto 3", date: "15/12/2024", time: "20:30", price: "15€", img: "/img/evento1.jpg" },
    { title: "Evento Moto 4", date: "20/12/2024", time: "19:00", price: "20€", img: "/img/evento1.jpg" },
    { title: "Evento Moto 5", date: "25/12/2024", time: "21:00", price: "25€", img: "/img/evento1.jpg" },
    { title: "Evento Moto 6", date: "30/12/2024", time: "22:00", price: "30€", img: "/img/evento1.jpg" },
    { title: "Evento Moto 7", date: "30/12/2024", time: "22:00", price: "30€", img: "/img/evento1.jpg" },
    { title: "Evento Moto 8", date: "30/12/2024", time: "22:00", price: "30€", img: "/img/evento1.jpg" }
    
];

const cardsPerPage = 4; // Cantidad de tarjetas por página
let currentPage = 0;

// Referencias a elementos
const cardContainer = document.getElementById("card-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Función para renderizar tarjetas
function renderCards() {
    // Limpiar contenedor
    cardContainer.innerHTML = "";

    // Calcular índice de inicio y final
    const start = currentPage * cardsPerPage;
    const end = start + cardsPerPage;

    // Crear tarjetas para la página actual
    const currentCards = events.slice(start, end);
    currentCards.forEach(event => {
        const card = document.createElement("div");
        card.className = "col-md-4";
        card.id = "tamanoTarjeta"
        card.innerHTML = `
          <div class="card" id="fondoTarjeta">
            <img id="ima" src="${event.img}" class="card-img-top" alt="${event.title}">
            <div class="card-body" id="cuerpoTarjeta">
                <h5 class="card-title" id="tituloTarjeta">${event.title}</h5>
                <p class="card-text">${event.date} - ${event.time}</p>
                <p class="card-text"><strong>${event.price}</strong></p>
                <a href="#" class="btn btn-primary" id="buton">Ver Evento</a>
            </div>
          </div>
        `;

        cardContainer.appendChild(card);
    });

    // Habilitar/deshabilitar botones según la página actual
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = end >= events.length;
}

// Eventos para botones
prevBtn.addEventListener("click", () => {
    if (currentPage > 0) currentPage--;
    renderCards();
});

nextBtn.addEventListener("click", () => {
    if ((currentPage + 1) * cardsPerPage < events.length) currentPage++;
    renderCards();
});

// Inicializar
renderCards();

  
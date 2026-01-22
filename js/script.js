// js/script.js
document.addEventListener("DOMContentLoaded", () => {
  //Cosas para el dropdown
          function toggleDropdown() {
            const dropdown = document.getElementById('dropdownMenu');
            dropdown.classList.toggle('show');
        }
  const heroCarouselEl = document.querySelector('#heroCarousel');
  if (!heroCarouselEl) return;
          window.onclick = function(event) {
            if (!event.target.matches('.category-dropdown') && !event.target.matches('.category-dropdown *')) {
                const dropdown = document.getElementById('dropdownMenu');
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            }
        }

  // Inicializar el carrusel
  const carousel = new bootstrap.Carousel(heroCarouselEl, {
    interval: 5000,   // 5 segundos entre slides
    pause: 'hover',
    ride: 'carousel'
  });
});

// Scroll suave desde productos
document.querySelectorAll('.product-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
  });
});


  document.addEventListener("DOMContentLoaded", function () {
    const el = document.querySelector(
      "#carouselExampleControls.testimonial-carousel"
    );

    if (!el) return;

    const carousel = new bootstrap.Carousel(el, {
      interval: 5000,
      pause: false,
      wrap: true
    });

    carousel.cycle();
  });


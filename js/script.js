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



// testimonios
var multipleCardCarousel = document.querySelector(
  "#carouselExampleControls.testimonial-carousel"
);

if (window.matchMedia("(min-width: 576px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false
  });

  var $inner = $("#carouselExampleControls.testimonial-carousel .carousel-inner");
  var carouselWidth = $inner[0].scrollWidth;
  var cardWidth = $("#carouselExampleControls.testimonial-carousel .carousel-item").width();
  var scrollPosition = 0;

  $("#carouselExampleControls.testimonial-carousel .carousel-control-next")
    .on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth) {
        scrollPosition += cardWidth;
        $inner.animate({ scrollLeft: scrollPosition }, 0);
      }
    });

  $("#carouselExampleControls.testimonial-carousel .carousel-control-prev")
    .on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $inner.animate({ scrollLeft: scrollPosition }, 0);
      }
    });
} else {
  $(multipleCardCarousel).addClass("slide");
}






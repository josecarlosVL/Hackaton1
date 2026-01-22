// js/script.js
document.addEventListener("DOMContentLoaded", () => {
  const heroCarouselEl = document.querySelector('#heroCarousel');
  if (!heroCarouselEl) return;

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







//testimonios
var multipleCardCarousel = document.querySelector("#carouselExampleControls");

if (window.matchMedia("(min-width: 576px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false
  });
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;
  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 1) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}





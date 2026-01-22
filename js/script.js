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


//testimonial
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




// Si Creen que es mucho lo quitamos 

// ========== NEWSLETTER FUNCTIONALITY ==========
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletterForm');
    const successMessage = document.getElementById('successMessage');
    const closeSuccessBtn = document.getElementById('closeSuccess');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Obtener valores del formulario
            const nombre = document.getElementById('nombreNewsletter').value.trim();
            const email = document.getElementById('emailNewsletter').value.trim();
            const aceptaTerminos = document.getElementById('aceptarTerminos').checked;

            // Validaciones
            if (!nombre || !email) {
                alert('Por favor, completa todos los campos');
                return;
            }

            if (!aceptaTerminos) {
                alert('Debes aceptar los términos para continuar');
                return;
            }

            // Validar formato de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingresa un correo electrónico válido');
                return;
            }

            // Agregar estado de loading al botón
            const btnNewsletter = newsletterForm.querySelector('.btn-newsletter');
            btnNewsletter.classList.add('loading');
            btnNewsletter.disabled = true;

            // Simular envío (aquí conectarías con tu backend)
            setTimeout(() => {
                // Guardar en localStorage (opcional)
                const suscriptor = {
                    nombre: nombre,
                    email: email,
                    fecha: new Date().toISOString()
                };
                localStorage.setItem('newsletter_suscrito', JSON.stringify(suscriptor));

                // Ocultar formulario y mostrar mensaje de éxito
                newsletterForm.style.display = 'none';
                successMessage.classList.add('show');

                // Remover loading
                btnNewsletter.classList.remove('loading');
                btnNewsletter.disabled = false;

                // Limpiar formulario
                newsletterForm.reset();

                // Aquí harías la llamada a tu API/backend
                console.log('Nuevo suscriptor:', suscriptor);
                
                // Ejemplo de integración con API:
                /*
                fetch('/api/newsletter/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(suscriptor)
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Suscripción exitosa:', data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
                */
            }, 1500);
        });
    }

    // Cerrar mensaje de éxito
    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', function() {
            successMessage.classList.remove('show');
            newsletterForm.style.display = 'block';
        });
    }

    // Verificar si ya está suscrito
    const yaEstaSuscrito = localStorage.getItem('newsletter_suscrito');
    if (yaEstaSuscrito) {
        const suscriptor = JSON.parse(yaEstaSuscrito);
        console.log('Usuario ya suscrito:', suscriptor.email);
        // Opcionalmente puedes mostrar un mensaje o cambiar el formulario
    }

    // Animación de entrada cuando el newsletter es visible
    const newsletterSection = document.querySelector('.newsletter-section');
    if (newsletterSection) {
        const observerNewsletter = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        observerNewsletter.observe(newsletterSection);
    }
});

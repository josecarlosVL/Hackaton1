// Script para página de error 404
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    // Función de búsqueda
    function performSearch() {
        const query = searchInput.value.trim();
        
        if (query) {
            // Redirigir a la página de productos o búsqueda
            // Puedes cambiar esto a tu página de resultados de búsqueda
            window.location.href = `/pages/calzado.html?search=${encodeURIComponent(query)}`;
        } else {
            // Animación de error si está vacío
            searchInput.classList.add('shake');
            searchInput.style.borderColor = '#dc3545';
            
            setTimeout(() => {
                searchInput.classList.remove('shake');
                searchInput.style.borderColor = '';
            }, 500);
        }
    }

    // Buscar al hacer click en el botón
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }

    // Buscar al presionar Enter
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        // Limpiar el borde rojo al escribir
        searchInput.addEventListener('input', function() {
            this.style.borderColor = '';
        });
    }

    // Agregar animación shake para el input
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
        }
        .shake {
            animation: shake 0.3s ease;
        }
    `;
    document.head.appendChild(style);

    // Easter egg: mensaje en consola
    console.log('%c404 - ¡Oops!', 'font-size: 50px; color: #5A7302; font-weight: bold;');
    console.log('%c¿Te perdiste? No te preocupes, estamos aquí para ayudarte 👟', 'font-size: 16px; color: #184031;');

    // Agregar efecto parallax a los elementos flotantes
    document.addEventListener('mousemove', function(e) {
        const floatingElements = document.querySelectorAll('.floating-shoe');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 10;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            
            element.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // Animación de aparición de elementos
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    const animateElements = document.querySelectorAll('.quick-link');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
        observer.observe(el);
    });
});

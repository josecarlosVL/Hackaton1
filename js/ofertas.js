// Funcionalidad de filtros para página de ofertas
document.addEventListener('DOMContentLoaded', function() {
    const productosGrid = document.getElementById('productosGrid');
    const productItems = document.querySelectorAll('.producto-item');
    const clearFiltersBtn = document.getElementById('clearFilters');
    const productCount = document.getElementById('productCount');
    
    let activeFilters = {
        category: [],
        discount: [],
        price: []
    };

    // Escuchar cambios en los checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const filterType = this.getAttribute('data-filter');
            const filterValue = this.value;

            if (this.checked) {
                activeFilters[filterType].push(filterValue);
            } else {
                activeFilters[filterType] = activeFilters[filterType].filter(v => v !== filterValue);
            }

            filterProducts();
        });
    });

    // Función para filtrar productos
    function filterProducts() {
        let visibleCount = 0;

        productItems.forEach(item => {
            const category = item.getAttribute('data-category');
            const discount = item.getAttribute('data-discount');
            const price = parseInt(item.getAttribute('data-price'));

            let showItem = true;

            // Filtrar por categoría
            if (activeFilters.category.length > 0) {
                showItem = showItem && activeFilters.category.includes(category);
            }

            // Filtrar por descuento
            if (activeFilters.discount.length > 0) {
                showItem = showItem && activeFilters.discount.includes(discount);
            }

            // Filtrar por precio
            if (activeFilters.price.length > 0) {
                let priceMatch = false;
                activeFilters.price.forEach(range => {
                    const [min, max] = range.split('-').map(Number);
                    if (price >= min && price <= max) {
                        priceMatch = true;
                    }
                });
                showItem = showItem && priceMatch;
            }

            // Mostrar u ocultar producto
            if (showItem) {
                item.classList.remove('hidden');
                visibleCount++;
            } else {
                item.classList.add('hidden');
            }
        });

        // Actualizar contador
        productCount.textContent = `Mostrando ${visibleCount} productos`;
    }

    // Limpiar todos los filtros
    clearFiltersBtn.addEventListener('click', function() {
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });

        activeFilters = {
            category: [],
            discount: [],
            price: []
        };

        productItems.forEach(item => {
            item.classList.remove('hidden');
        });

        productCount.textContent = `Mostrando ${productItems.length} productos`;
    });

    // Animación de botones "Agregar al carrito"
    document.querySelectorAll('.btn-oferta').forEach(btn => {
        btn.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = '¡Agregado!';
            this.style.backgroundColor = '#28a745';

            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '';
            }, 1500);
        });
    });
});

// Funcionalidad de filtros para página de ofertas
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script de filtros cargado'); // Para debug
    
    const productosGrid = document.getElementById('productosGrid');
    const productItems = document.querySelectorAll('.producto-item');
    const clearFiltersBtn = document.getElementById('clearFilters');
    const clearFiltersMobileBtn = document.getElementById('clearFiltersMobile');
    const productCount = document.getElementById('productCount');
    
    let activeFilters = {
        category: [],
        discount: [],
        price: []
    };

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
                item.style.display = '';
                visibleCount++;
            } else {
                item.classList.add('hidden');
                item.style.display = 'none';
            }
        });

        // Actualizar contador
        if (productCount) {
            productCount.textContent = `Mostrando ${visibleCount} productos`;
        }
    }

    // Sincronizar checkboxes entre desktop y móvil
    function syncCheckboxes(filterType, filterValue, checked) {
        const checkboxes = document.querySelectorAll(`input[data-filter="${filterType}"][value="${filterValue}"]`);
        checkboxes.forEach(cb => {
            cb.checked = checked;
        });
    }

    // Función para limpiar filtros
    function clearAllFilters() {
        document.querySelectorAll('input[type="checkbox"][data-filter]').forEach(checkbox => {
            checkbox.checked = false;
        });

        activeFilters = {
            category: [],
            discount: [],
            price: []
        };

        productItems.forEach(item => {
            item.classList.remove('hidden');
            item.style.display = '';
        });

        if (productCount) {
            productCount.textContent = `Mostrando ${productItems.length} productos`;
        }
    }

    // Escuchar cambios en TODOS los checkboxes
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"][data-filter]');
    console.log('Checkboxes encontrados:', allCheckboxes.length); // Debug
    
    allCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            console.log('Checkbox cambiado:', this.value); // Debug
            
            const filterType = this.getAttribute('data-filter');
            const filterValue = this.value;

            if (this.checked) {
                if (!activeFilters[filterType].includes(filterValue)) {
                    activeFilters[filterType].push(filterValue);
                }
                syncCheckboxes(filterType, filterValue, true);
            } else {
                activeFilters[filterType] = activeFilters[filterType].filter(v => v !== filterValue);
                syncCheckboxes(filterType, filterValue, false);
            }

            filterProducts();
        });
    });

    // Limpiar filtros Desktop
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Limpiar filtros desktop'); // Debug
            clearAllFilters();
        });
    }

    // Limpiar filtros Móvil
    if (clearFiltersMobileBtn) {
        clearFiltersMobileBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Limpiar filtros móvil'); // Debug
            clearAllFilters();
        });
    }

    // Botón aplicar filtros (solo cierra el offcanvas, los filtros ya se aplicaron)
    const applyFiltersBtn = document.querySelector('.btn-apply-filters');
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', function() {
            console.log('Aplicar filtros'); // Debug
            // Bootstrap cierra automáticamente el offcanvas con data-bs-dismiss
        });
    }

    // Animación de botones "Agregar al carrito"
    document.querySelectorAll('.btn-oferta').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const originalText = this.textContent;
            const originalBg = this.style.backgroundColor;
            
            this.textContent = '¡Agregado!';
            this.style.backgroundColor = '#28a745';

            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = originalBg;
            }, 1500);
        });
    });

    console.log('Filtros inicializados correctamente'); // Debug
});

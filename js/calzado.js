/*`<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`*/
document.addEventListener('DOMContentLoaded', () => {
        renderizarProductos("contenedor-productos");
    });
async function loadData() {
    try {
        const response = await fetch('/json/calzado.json'); // Ubicación del JSON
        if (!response.ok) throw new Error('Network response was not ok'); // Si por alguna razón falla
        const data = await response.json(); //Esperar la respuesta
        return data;  //Envia la información para trabajar con ella
    } catch (error) {
        console.error('There was a problem fetching the JSON:', error);//Mensaje de error
    }
}
async function renderizarProductos(idContenedor) {
    let contenedor = document.getElementById(idContenedor);
    if(!contenedor){
        console.log("No e")
    }
    //console.log(contenedor.innerHTML)
    
    try {
        
         const data = await loadData();
        console.log(data)
        // Limpiamos el contenedor antes de renderizar
        //contenedor.innerHTML = "<h2>Prueba</h2>";

        data.productos.forEach(producto => {
            const cardHTML = `
                <div class="col-12 col-md-6 col-lg-4 mb-4">
                    <div class="card h-100 shadow-sm border-0">
                        <img src="${producto.imagen}" class="card-img-top" alt="${producto.modelo}" style="height: 250px; object-fit: cover;">
                        <div class="card-body d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <h5 class="card-title fw-bold mb-0" style="font-family: 'Oswald', sans-serif;">${producto.modelo}</h5>
                                <span class="badge bg-warning text-dark">
                                    <i class="bi bi-star-fill"></i> ${producto.calificacion}
                                </span>
                            </div>
                            <p class="card-text text-muted small">${producto.descripcion}</p>
                            
                            <div class="mb-3">
                                <small class="fw-bold d-block mb-1">Tallas:</small>
                                ${producto.tallas.map(talla => `<span class="badge border text-dark me-1">${talla}</span>`).join('')}
                            </div>

                            <div class="mt-auto d-flex justify-content-between align-items-center">
                                <span class="h4 mb-0 fw-bold">$${producto.precio.toFixed(2)}</span>
                                <button class="btn btn-dark btn-sm px-3 fw-bold">AÑADIR</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            contenedor.innerHTML += cardHTML;
            //console.log(cardHTML);
        });
    } catch (error) {
        console.error("Error cargando productos:", error);
        contenedor.innerHTML = `<p class="text-center">No se pudieron cargar los productos.</p>`;
    }
}
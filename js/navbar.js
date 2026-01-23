const contenedor = document.getElementById("contenedor-navbar");


const navbarHTML = `
<style>
.navbar{
    font-family: 'Oswald',sans-serif;
    font-size: x-large;
}
.nav-item > a > div{
    font-size: large;
}
#input-busqueda
{
    padding: 0px;
}

#boton-busqueda{
    height:40px;
    margin: 0px;
    border: 0px;
}
.nav-link:hover{
    color: var(--color3-vpasto) !important;
}
.btn:hover{
    background-color: var(--color3-vpasto) !important;
}
</style>
<nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src="./images/zunzo.png"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse w-100" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center">
        <li class="nav-item  d-lg-none">
          <a class="nav-link" href="/">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../pages/calzado.html">Calzado</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../pages/error.html">Ropa</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../pages/ofertas.html">Ofertas</a>
        </li>
        <li class="nav-item  d-lg-none">
          <a class="nav-link" href="#">Login/Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../pages/about.html">About us</a>
        </li>
        <li class="nav-item  d-lg-none">
          <a class="nav-link" href="#">Carrito</a>
        </li>
        <li class="nav-item d-none d-lg-flex align-items-center mx-3">
            <div class="input-group">
                <input type="text" id="input-busqueda" class="form-control" placeholder="Buscar producto..." aria-label="Buscar">
                <button id="boton-busqueda" class="btn btn-dark fw-bold px-4" type="button">
                    BUSCAR
                </button>
            </div>
        </li>
        <li class="nav-item d-none d-lg-block"></li>
        <li class="nav-item d-none d-lg-flex flex-column align-items-center mx-3">
            <a href="#" class="nav-link p-0 text-center text-dark">
                <img src="../images/user.png" width="36px" height="36px" class="mb-1" alt="User">
                <div>Login/Register</div>
            </a>
        </li>
        <li class="nav-item d-none d-lg-flex flex-column align-items-center mx-3">
            <a href="#" class="nav-link p-0 text-center text-dark">
                <img src="../images/carrito.png" width="36px" height="36px" class="mb-1" alt="Cart">
                <div>Carrito</div>
            </a>
        </li>
    </div>
  </div>
</nav>
`
contenedor.innerHTML = navbarHTML;
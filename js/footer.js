const contenedorFooter = document.getElementById("contenedor-footer");
const footerHTML=`    
<style>
footer {
  font-size: 14px;
}

.footer-text{
    text-align: justify;
}

footer ul li {
  margin-bottom: 6px;
}

.footer-list a {
  text-decoration: none;
  color: inherit;
}

.footer-list li {
  position: relative;
  cursor: pointer;
  color: #b5b5b5;
  transition: color 0.3s ease, padding-left 0.3s ease;
}

.footer-list li:hover {
  color: #ffffff;
  padding-left: 6px;
}

.social-icons i {
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-icons i:hover {
  transform: translateY(-4px) scale(1.1);
  color: var(--color4-vclaro); /* color Bootstrap primary */
}

.material-symbols-outlined {
  font-size: 26px;
}

@media (max-width: 576px) {
  footer h2 {
    text-align: center;
  }
}

/* BARRA INFERIOR FOOTER */
.footer-bottom {
  background: linear-gradient(to right, #111, #1a1a1a);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-link {
  color: #b5b5b5;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #ffffff;
}

/* underline animado */
.footer-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0;
  height: 2px;
  background-color: var(--color4-vclaro);
  transition: width 0.3s ease;
}

.footer-link:hover::after {
  width: 100%;
}

.footer-copy {
  color: #b5b5b5;
}

</style>

<footer class="bg-black text-white pt-5">
    <div class="container">
        <div class="row text-center text-md-start">

      <!-- LOGO -->
      <div class="col-12 col-md-4 mb-4">
        <h2 class="fw-bold">Zunzo</h2>
        <p class="footer-text">
          Welcome to our running community! Discover the joy of running, connect with fellow enthusiasts, and unlock your full potential with our expert resources and training programs.
        </p>

        <div class="social-icons d-flex justify-content-center justify-content-md-start gap-3 mt-3">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-github"></i>
        </div>
      </div>

      <!-- COMPAÑÍA / RECURSOS -->
      <div class="col-12 col-md-4 mb-4">
        <div class="row">
          <div class="col-6">
            <h6 class="fw-bold"><small>LINKS</small></h6>
            <ul class="list-unstyled footer-list">
              <li><a href="about.html">About us</a></li>
              <li><a href="#">Our events</a></li>
              <li><a href="#">Latest News</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div class="col-6">
            <h6 class="fw-bold"><small>PAGE</small></h6>
            <ul class="list-unstyled footer-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">My account</a></li>
              <li><a href="#">Wishlist</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- CONTACTO -->
      <div class="col-12 col-md-4 mb-4 text-center text-md-end">

        <div class="d-flex justify-content-center justify-content-md-end align-items-center mb-3 me-2">
          <div>
            <small>Need help?</small><br>
            555-555-5555
          </div>
          <span class="material-symbols-outlined ms-2">phone</span>
        </div>

        

        <div class="d-flex justify-content-center justify-content-md-end gap-3 mt-3">
          <i class="fa-brands fa-cc-visa fa-2x"></i>
          <i class="fa-brands fa-cc-mastercard fa-2x"></i>
          <i class="fa-brands fa-paypal fa-2x"></i>
          <i class="fa-brands fa-cc-apple-pay fa-2x"></i>
        </div>

      </div>

    </div>
  </div>

   <!-- Barra inferior del footer -->
<div class="footer-bottom py-3">
  <div class="container">
    <div class="row align-items-center text-center text-md-start">

      <!-- Links legales -->
      <div class="col-12 col-md-8 mb-2 mb-md-0">
        <div class="d-flex flex-column flex-md-row justify-content-center justify-content-md-start gap-3 small">
          <a href="#" class="footer-link">Home</a>
          <a href="#" class="footer-link">My account</a>
          <a href="#" class="footer-link">Shop</a>
        </div>
      </div>

      <!-- Copyright -->
      <div class="col-12 col-md-4 text-md-end">
        <p class="small mb-0 footer-copy">
          &copy; 2026, <strong>ZUNZO</strong> Todos los derechos reservados
        </p>
      </div>

    </div>
  </div>
    </div>
    </footer>`;
    contenedorFooter.innerHTML = footerHTML;
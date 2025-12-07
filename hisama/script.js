
// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Carrito simple en memoria
let cartCount = 0;
const cartCountSpan = document.getElementById('cart-count');
const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    cartCount++;
    cartCountSpan.textContent = cartCount;
  });
});

// Scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.length > 1) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

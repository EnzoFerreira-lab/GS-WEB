/* ================= MENU HAMBÚRGUER ================= */
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}
/* ================= SLIDESHOW ================= */
const slides = ["imagens/slide1.png", "imagens/slide2.png", "imagens/slide3.png"];
let slideIndex = 0;

function showSlides() {
    const img = document.getElementById('slide');
    slideIndex = (slideIndex + 1) % slides.length;
    img.src = slides[slideIndex];
}
setInterval(showSlides, 3000);
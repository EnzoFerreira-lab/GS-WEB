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
/* ================= VALIDAÇÃO FORMULÁRIO ================= */
function validarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
        alert("❌ Por favor, preencha todos os campos.");
        return false;
    }

    alert("✅ Mensagem enviada com sucesso!");
    return true;
}
/* ================= TROCA DE TEMAS ================= */
function mudarTema(tema) {
    document.body.classList.remove('tema-claro', 'tema-escuro', 'tema-azul');
    document.body.classList.add(tema-${tema});
}
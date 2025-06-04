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
    if (img) {
        slideIndex = (slideIndex + 1) % slides.length;
        img.src = slides[slideIndex];
    }
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
    document.body.classList.add(tema-$,{tema});
}

/* ================= QUIZ ================= */
const quizData = [
    { pergunta: "O que pode causar enchentes?", respostas: ["Chuvas fortes", "Sol", "Neve"], correta: 0 },
    { pergunta: "Qual órgão atua nas enchentes?", respostas: ["Defesa Civil", "Detran", "Correios"], correta: 0 },
    { pergunta: "Enchentes afetam?", respostas: ["Somente carros", "Apenas pessoas", "Pessoas, casas e infraestrutura"], correta: 2 },
    { pergunta: "O que NÃO fazer em enchentes?", respostas: ["Atravessar correntezas", "Procurar abrigo", "Evitar áreas de risco"], correta: 0 },
    { pergunta: "Sinais de risco incluem:", respostas: ["Nuvens carregadas e subida de rios", "Céu azul", "Dia de sol"], correta: 0 },
    { pergunta: "Sensores de nível medem:", respostas: ["Altura da água", "Temperatura", "Velocidade do vento"], correta: 0 },
    { pergunta: "Prevenir enchentes ajuda a:", respostas: ["Salvar vidas", "Causar mais enchentes", "Diminuir a segurança"], correta: 0 },
    { pergunta: "Aplicativos de alerta servem para:", respostas: ["Informar riscos", "Vender produtos", "Compartilhar memes"], correta: 0 },
    { pergunta: "Áreas mais afetadas são:", respostas: ["Desertos", "Áreas próximas a rios", "Praias"], correta: 1 },
    { pergunta: "O Aqua Intel faz:", respostas: ["Alerta e monitoramento", "Venda de roupas", "Streaming de filmes"], correta: 0 },
];

function loadQuiz() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';

    quizData.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('quiz-pergunta');
        div.innerHTML = `
            <h3>${index + 1}. ${item.pergunta}</h3>
            <div class="opcoes">
                ${item.respostas.map((res, i) => `
                    <label>
                        <input type="radio" name="q${index}" value="${i}">
                        <span>${res}</span>
                    </label>
                `).join('')}
            </div>
        `;
        container.appendChild(div);
    });

    const button = document.createElement('button');
    button.innerText = 'Enviar Quiz';
    button.classList.add('quiz-btn');
    button.onclick = submitQuiz;
    container.appendChild(button);
}

function submitQuiz() {
    let score = 0;

    quizData.forEach((item, index) => {
        const resposta = document.querySelector(input[name="q${index}"],checked);
        if (resposta && Number(resposta.value) === item.correta) {
            score++;
        }
    });

    const resultado = document.getElementById('quiz-result');
    resultado.innerHTML = `
        <h2>Resultado do Quiz</h2>
        <p>🎯 Você acertou <strong>${score}</strong> de <strong>${quizData.length}</strong> perguntas.</p>
        <p>${score >= 7 ? "✅ Excelente! Você entende bem sobre prevenção de enchentes." : "⚠️ Atenção! Revise os conceitos sobre enchentes."}</p>
    `;
}
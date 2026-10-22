// 1. Guardar os elementos que vamos usar em variáveis
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// 2. Ao clicar no hambúrguer, abre/fecha o menu
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('ativo');
});

// 3. Ao clicar num link do menu, fecha o menu (útil no telemóvel)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('ativo');
  });
});
// Animação: os elementos aparecem suavemente quando entram no ecrã
const elementos = document.querySelectorAll('section h2, .card, .sobre p, .form-contacto');

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visivel');
    }
  });
}, { threshold: 0.15 });

elementos.forEach(el => {
  el.classList.add('escondido');
  observador.observe(el);
});
const formulario = document.querySelector('.form-contacto');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault(); // impede a página de recarregar
  alert('Mensagem enviada! (demonstração)');
  formulario.reset();      // limpa os campos
});

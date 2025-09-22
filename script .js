// script.js

// Menu Mobile Toggle
const nav = document.querySelector('nav ul');
const menuButton = document.createElement('button');
menuButton.textContent = '☰';
menuButton.classList.add('menu-btn');
document.querySelector('.header').prepend(menuButton);

menuButton.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
});

// Leia Mais / Leia Menos para artigos
document.querySelectorAll('section#profissoes article').forEach(article => {
  const fullText = article.querySelector('p').textContent;
  if (fullText.length > 100) { // Exemplo: se texto > 100 caracteres
    const shortText = fullText.slice(0, 100) + '...';

    article.querySelector('p').textContent = shortText;

    const btnLeiaMais = document.createElement('button');
    btnLeiaMais.textContent = 'Leia Mais';
    btnLeiaMais.classList.add('btn-leia-mais');
    article.appendChild(btnLeiaMais);

    btnLeiaMais.addEventListener('click', () => {
      if (btnLeiaMais.textContent === 'Leia Mais') {
        article.querySelector('p').textContent = fullText;
        btnLeiaMais.textContent = 'Leia Menos';
      } else {
        article.querySelector('p').textContent = shortText;
        btnLeiaMais.textContent = 'Leia Mais';
      }
    });
  }
});

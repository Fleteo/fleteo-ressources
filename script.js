// ── 1. HEADER en premier ──
document.getElementById('header').innerHTML = `
  <a class="logo" href="index.html">
    Flet<span1>eo</span1><span>ressources</span>
  </a>
  <div class="menu_toggle"></div>
  <div class="text-nav">
    <a href="index.html">Accueil</a>
    <a href="guide-gestion-flotte-pme.html">Gestion de flotte</a>
    <a href="logiciel-suivi-vehicule.html">Logiciel suivi véhicule</a>
    <a href="gestion-flotte-occitanie.html">Gestion de flotte Occitanie</a>
    <a href="checklist-entretien-vehicule.html">Checklist entretien véhicule</a>
    <a href="cout-gestion-flotte.html">Coût de gestion de flotte</a>
  </div>
`;
// ── FOOTER ──
document.getElementById('footer').innerHTML = `
  <div class="footer-content">
    <p>Fleteo suit vos véhicules, vos conducteurs et vos dépenses à votre place. Alertes automatiques, localisation en temps réel, rapports en un clic.</p>
    <a href="https://fleteo.fr" class="footer-btn">
      <strong>Découvrir Fleteo</strong>
      <span>→</span>
    </a>
  </div>
`;
// ── 2. MENU après le header ──
var menu = document.querySelector('.text-nav');
var menu_toggle = document.querySelector('.menu_toggle');
menu_toggle.onclick = function() {
  menu_toggle.classList.toggle('active');
  menu.classList.toggle('responsive');
}

// ── 3. LOADER sans fetch ──
document.getElementById('loader').innerHTML = `
  <div class="loader-spinner"></div>
`;
setTimeout(() => {
  document.getElementById('loader').classList.add('hidden');
}, 3000);

// ── 4. SCROLL REVEAL ──
const articles = document.querySelectorAll('article');

function checkArticles() {
  const triggerBottom = window.innerHeight;
  articles.forEach(article => {
    const articleTop = article.getBoundingClientRect().top;
    if (articleTop < triggerBottom) {
      article.classList.add('active');
    } else {
      article.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', checkArticles);
checkArticles();
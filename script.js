
// ──  MENU ──
var menu = document.querySelector('.text-nav');
var menu_toggle = document.querySelector('.menu_toggle');

if (menu_toggle && menu) {
  menu_toggle.onclick = function() {
    menu.classList.toggle('responsive');

    // Change icône bars ↔ xmark
    const icon = menu_toggle.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
      icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
      icon.classList.replace('fa-xmark', 'fa-bars');
    }
  }
}
// ──  LOADER ──
setTimeout(() => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('hidden');
  }
}, 3000);

// ──  SCROLL ──
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
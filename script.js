
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
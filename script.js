
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
}, 1000);

// ──  SCROLL ──
const elementsToAnimate = document.querySelectorAll('article, section, .container > a');

function checkElements() {
  const triggerBottom = window.innerHeight * 0.9; // Déclenche un peu avant le bas pour plus de fluidité

  elementsToAnimate.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    
    if (elTop < triggerBottom) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

// Un seul écouteur pour tout gérer
window.addEventListener('scroll', checkElements);
// On l'appelle une fois au chargement pour afficher ce qui est déjà à l'écran
checkElements();
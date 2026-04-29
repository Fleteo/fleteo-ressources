const articles = document.querySelectorAll('article');
window.addEventListener('scroll', checkArticles);
function checkArticles() {
    const triggerBottom = window.innerHeight ;
    articles.forEach(article => {
        const articleTop = article.getBoundingClientRect().top;
        if (articleTop < triggerBottom) {
            article.classList.add('active');
        }
        else {
            article.classList.remove('active');
        } 
    });
}  
var menu = document.querySelector('.text-nav'); 
var menu_toggle = document.querySelector('.menu_toggle');
menu_toggle.onclick = function() {
   menu_toggle.classList.toggle('active');
    menu.classList.toggle('responsive');
}

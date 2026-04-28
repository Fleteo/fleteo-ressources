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

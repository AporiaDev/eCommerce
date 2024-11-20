// Ejemplo de lista de artículos
const articles = [
    { title: "Laptop usada", price: "300 USD", image: "example1.jpg" },
    { title: "Teléfono nuevo", price: "500 USD", image: "example2.jpg" },
];

// Función para cargar artículos en la página
function loadArticles() {
    const articlesList = document.querySelector('.articles-list');
    articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
        articleDiv.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.price}</p>
        `;
        articlesList.appendChild(articleDiv);
    });
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', loadArticles);

// Mostrar/ocultar secciones según el menú
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) target.classList.remove('hidden');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Carrega projetos
    const projectsContainer = document.getElementById('projects-container');
    
    projectCard.innerHTML = `
    <img src="${project.images[0]}" alt="${project.title}" class="project-image">
    <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-links">
            <a href="${project.github}" target="_blank">
                <i class="fab fa-github"></i> Código
            </a>
            ${project.demo ? `<a href="${project.demo}" target="_blank">
                <i class="fas fa-external-link-alt"></i> Demo
            </a>` : ''}
            <!-- BOTÃO ADICIONADO AQUI -->
            <button class="view-project-btn" data-id="${project.id}">
                <i class="fas fa-eye"></i> Ver Projeto
            </button>
        </div>
    </div>
`;
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
});
// Substitua esta linha com sua chave pública REAL
emailjs.init('sQYUTJvYCXRjTzXOh'); // Ex: emailjs.init('user_AbC123xyz987');

document.addEventListener('click', (e) => {
    if (e.target.closest('.view-project-btn')) {
        const projectId = parseInt(e.target.closest('.view-project-btn').dataset.id);
        const project = projects.find(p => p.id === projectId);
        if (project) {
            // Preenche o modal existente
            document.getElementById('modal-title').textContent = project.title;
            document.getElementById('modal-description').textContent = project.description;
            document.getElementById('github-link').href = project.github;
            document.getElementById('demo-link').href = project.demo || '#';
            document.getElementById('modal-image').src = project.images[0];
            // Mostra o modal
            document.getElementById('project-modal').style.display = 'block';
        }
    }
});

// Fecha o modal (adicione se não existir)
document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('project-modal').style.display = 'none';
});
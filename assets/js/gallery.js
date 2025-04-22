function openGallery(projectId) {
    const project = projects.find(p => p.id == projectId);
    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    modal.innerHTML = `
        <div class="gallery-content">
            <span class="close">&times;</span>
            <h3>${project.title}</h3>
            <div class="gallery-slides">
                ${project.images.map(img => `
                    <img src="${img}" alt="${project.title}">
                `).join('')}
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    modal.querySelector('.close').addEventListener('click', () => {
        modal.remove();
    });
}

// Adiciona evento aos cards
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('a')) {
                openGallery(index + 1);
            }
        });
    });
});
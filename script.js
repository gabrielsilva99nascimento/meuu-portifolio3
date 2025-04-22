document.addEventListener('DOMContentLoaded', function () {
    // Carrega projetos
    const projectsContainer = document.getElementById('projects-container');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        projectCard.innerHTML = `
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="btn-link">
                        <i class="fab fa-github"></i> Código
                    </a>
                    <a href="#" class="btn-link btn-demo">
                        <i class="fas fa-external-link-alt"></i> Visualizar Projeto
                    </a>
                </div>
            </div>
        `;

        const demoBtn = projectCard.querySelector('.btn-demo');
        demoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (project.images?.length) {
                openImageModal(project.images);
            }
        });

        projectsContainer.appendChild(projectCard);
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
});

let currentImages = [];
let currentIndex = 0;

const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const closeModal = document.getElementById("close-modal");
const prevBtn = document.getElementById("prev-image");
const nextBtn = document.getElementById("next-image");

// Função para abrir modal com imagens
function openImageModal(images) {
    currentImages = images;
    currentIndex = 0;
    modalImg.src = currentImages[currentIndex];
    modal.style.display = "flex";
}

// Navegação
prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    modalImg.src = currentImages[currentIndex];
};

nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    modalImg.src = currentImages[currentIndex];
};

// Fechar modal
closeModal.onclick = () => {
    modal.style.display = "none";
};

emailjs.init('sQYUTJvYCXRjTzXOh');
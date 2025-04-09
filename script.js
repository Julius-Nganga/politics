document.addEventListener('DOMContentLoaded', function() {
    // Hover effects
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        container.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        container.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Click highlighting
    document.querySelectorAll('.about-section').forEach(section => {
        section.addEventListener('click', function() {
            this.classList.toggle('highlight-section');
        });
    });

    // Search functionality
    const searchInput = document.createElement('input');
    searchInput.setAttribute('type', 'text');
    searchInput.setAttribute('placeholder', 'Search politicians...');
    searchInput.style.cssText = `
        padding: 12px;
        width: 80%;
        max-width: 500px;
        margin: 20px auto;
        display: block;
        background: #1a202c;
        border: 2px solid #2b6cb0;
        color: white;
        border-radius: 25px;
    `;
    document.querySelector('header').appendChild(searchInput);

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        document.querySelectorAll('.container').forEach(container => {
            const text = container.textContent.toLowerCase();
            container.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
    });

    // Scroll progress
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        height: 3px;
        background: #4299e1;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // Image zoom
    document.querySelectorAll('.img-fluid').forEach(img => {
        img.addEventListener('click', function() {
            this.classList.toggle('zoomed-image');
        });
    });
});
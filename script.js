function createPetals() {
    const container = document.getElementById('petals-container');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.width = Math.random() * 15 + 10 + 'px';
        petal.style.height = petal.style.width;
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = Math.random() * 3 + 4 + 's';
        petal.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(petal);
    }
}

// Эффект наклона карточек
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;
    document.querySelectorAll('.card').forEach(card => {
        card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    });
});

window.onload = createPetals;

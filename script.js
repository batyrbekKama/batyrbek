// Создание летающих лепестков
function createPetals() {
    const container = document.getElementById('petals-container');
    const petalCount = 30;

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        const size = Math.random() * 15 + 10 + 'px';
        petal.style.width = size;
        petal.style.height = size;
        
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = Math.random() * 5 + 5 + 's';
        petal.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(petal);
    }
}

window.onload = () => {
    createPetals();
};

// Простой параллакс для карточек
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card');
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;
    
    cards.forEach(card => {
        card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    });
});

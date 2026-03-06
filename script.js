// Функция создания плавающих элементов (сердечки и лилии)
function createAmbient() {
    const container = document.getElementById('ambient-container');
    const icons = ['❤️', '⚜️', '🌸', '✨'];
    
    for (let i = 0; i < 20; i++) {
        const el = document.createElement('div');
        el.className = 'floating-element';
        el.innerText = icons[Math.floor(Math.random() * icons.length)];
        el.style.left = Math.random() * 100 + 'vw';
        el.style.top = Math.random() * 100 + 'vh';
        el.style.fontSize = Math.random() * 20 + 15 + 'px';
        el.style.opacity = Math.random() * 0.5;
        
        container.appendChild(el);
        animateElement(el);
    }
}

function animateElement(el) {
    let posX = parseFloat(el.style.left);
    let posY = parseFloat(el.style.top);
    let angle = Math.random() * Math.PI * 2;
    
    function move() {
        posX += Math.cos(angle) * 0.2;
        posY += Math.sin(angle) * 0.2;
        
        if (posX < 0) posX = 100; if (posX > 100) posX = 0;
        if (posY < 0) posY = 100; if (posY > 100) posY = 0;
        
        el.style.left = posX + 'vw';
        el.style.top = posY + 'vh';
        requestAnimationFrame(move);
    }
    move();
}

// ОЧЕНЬ плавное движение карточек
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card');
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    cards.forEach(card => {
        card.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

window.onload = createAmbient;

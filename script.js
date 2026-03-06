// Эффект легкого 3D при движении мыши для всех карточек
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card');
    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;
    
    cards.forEach(card => {
        card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    });
});

console.log("Rushana, ты прекрасна!");

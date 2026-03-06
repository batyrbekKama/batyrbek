// SPA: Функция переключения секций
function showSection(sectionId) {
    // 1. Скрываем все секции
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });

    // 2. Убираем подсветку у всех кнопок
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Показываем нужную секцию с анимацией
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // 4. Подсвечиваем кнопку, на которую нажали
    const activeBtn = Array.from(document.querySelectorAll('.nav-btn')).find(btn => 
        btn.getAttribute('onclick').includes(sectionId)
    );
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Эффект перспективы Bento-grid при наведении (full-3d)
document.querySelectorAll('.card').forEach(card => {
    card.onmousemove = e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
    };
});

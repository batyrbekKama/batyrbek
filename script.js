// Функция переключения секций
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

    // 4. Подсвечиваем кнопку, на которую нажали (находим по тексту onclick)
    const activeBtn = Array.from(document.querySelectorAll('.nav-btn')).find(btn => 
        btn.getAttribute('onclick').includes(sectionId)
    );
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Живые часы
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.innerText = `${hours}:${minutes}`;
    }
}
setInterval(updateClock, 1000);
updateClock();

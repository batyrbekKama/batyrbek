// Пароль доступа (Пусть он будет 1234, это примитивно, но романтично)
const SECRET_PASS = "1234";

// Проверка авторизации
function checkAuth() {
    const input = document.getElementById('pass-input').value;
    const error = document.getElementById('error-msg');
    
    if (input === SECRET_PASS) {
        // Если ключ верный - скрываем авторизацию, показываем сайт
        document.getElementById('auth-overlay').style.display = 'none';
        document.getElementById('site-content').style.display = 'block';
        
        // Сохраняем в браузере, чтобы не вводить каждый раз
        localStorage.setItem('isAuth', 'true');
    } else {
        error.style.display = 'block';
        // Тряска окна при ошибке
        document.querySelector('.auth-card').animate([
            { transform: 'translateX(-5px)' },
            { transform: 'translateX(5px)' },
            { transform: 'translateX(-5px)' },
            { transform: 'translateX(5px)' },
            { transform: 'translateX(0px)' }
        ], { duration: 200, iterations: 2 });
    }
}

// Проверка при загрузке: если уже входил, не спрашивать пароль
window.onload = function() {
    if (localStorage.getItem('isAuth') === 'true') {
        document.getElementById('auth-overlay').style.display = 'none';
        document.getElementById('site-content').style.display = 'block';
    }
    updateClock();
}

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

    // 4. Подсвечиваем кнопку, на которую нажали
    const activeBtn = Array.from(document.querySelectorAll('.nav-btn')).find(btn => 
        btn.getAttribute('onclick').includes(sectionId)
    );
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Живые часы любви
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

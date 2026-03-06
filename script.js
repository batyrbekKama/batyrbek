@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;600;800&family=Bad+Script&display=swap');

:root {
    --bg: #0a0104;
    --card: rgba(255, 255, 255, 0.03);
    --border: rgba(251, 113, 133, 0.2);
    --accent: #fb7185;
    --gold: #fde047;
    --text: #fff1f2;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
body { 
    background: var(--bg); color: var(--text); font-family: 'Plus Jakarta Sans', sans-serif;
    background-image: radial-gradient(circle at 50% -10%, #4c0519 0%, #0a0104 80%);
    min-height: 100vh; overflow-x: hidden;
}

/* Навигация */
.glass-nav {
    position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
    width: 90%; max-width: 700px; background: rgba(10, 10, 10, 0.8);
    backdrop-filter: blur(20px); border: 1px solid var(--border);
    border-radius: 100px; padding: 12px 25px;
    display: flex; justify-content: space-between; align-items: center; z-index: 1000;
}
.nav-links a { color: #fda4af; text-decoration: none; font-weight: 600; margin-left: 15px; font-size: 0.85rem; transition: 0.3s; }
.nav-links a:hover, .nav-links a.active { color: var(--accent); text-shadow: 0 0 10px var(--accent); }

/* Контент */
.main-wrapper { max-width: 1100px; margin: 120px auto 50px; padding: 0 20px; }
.bento-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.card {
    background: var(--card); border: 1px solid var(--border);
    border-radius: 30px; padding: 30px; backdrop-filter: blur(10px);
    transition: 0.4s ease;
}
.card:hover { border-color: var(--accent); transform: translateY(-5px); }
.col-2 { grid-column: span 2; } .col-3 { grid-column: span 3; }

/* Тексты */
.script-font { font-family: 'Bad Script', cursive; color: var(--accent); }
h1 { font-size: 3rem; margin-bottom: 10px; }
h3 { color: var(--gold); margin-bottom: 10px; }
p { opacity: 0.8; line-height: 1.5; }

/* Лепестки */
.petal { position: fixed; top: -10%; background: #fb7185; border-radius: 150% 0 150% 0; opacity: 0.4; animation: fall linear infinite; pointer-events: none; z-index: 1001; }
@keyframes fall { to { transform: translateY(110vh) rotate(720deg); } }

/* Фото */
.rushana-img { width: 100%; max-width: 250px; border-radius: 50%; border: 3px solid var(--accent); animation: float 6s ease-in-out infinite; }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }

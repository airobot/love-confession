const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const photoContainer = document.getElementById('photo-container');
const heartsContainer = document.getElementById('hearts-container');

let heartsInterval; // Переменная для хранения интервала создания сердечек

// Обработчик для кнопки "Да!"
yesBtn.addEventListener('click', () => {
  photoContainer.classList.remove('hidden');
  startHearts(); // Запускаем создание сердечек

  // Останавливаем создание новых сердечек через минуту
  setTimeout(() => {
    stopHearts();
  }, 60000); // 60000 мс = 1 минута
});

// Обработчик для кнопки "Нет"
noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Функция для создания сердечек
function createHearts() {
  const heart = document.createElement('div');
  heart.innerHTML = '❤️';
  heart.classList.add('heart');

  // Случайная позиция на экране
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.top = `${Math.random() * 100}vh`;

  // Случайная задержка анимации
  heart.style.animationDelay = `${Math.random() * 2}s`;

  heartsContainer.appendChild(heart);

  // Удаляем сердечко после завершения анимации
  heart.addEventListener('animationend', () => {
    heart.remove();
  });
}

// Запуск создания сердечек
function startHearts() {
  heartsInterval = setInterval(createHearts, 300); // Создаем сердечко каждые 300 мс
}

// Остановка создания сердечек
function stopHearts() {
  clearInterval(heartsInterval); // Останавливаем интервал
}

// Запускаем сердечки сразу при загрузке страницы (опционально)
startHearts();

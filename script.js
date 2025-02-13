const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const photoContainer = document.getElementById('photo-container');
const heartsContainer = document.getElementById('hearts-container');

// Обработчик для кнопки "Да!"
yesBtn.addEventListener('click', () => {
  photoContainer.classList.remove('hidden');
  startHearts(); // Запускаем создание сердечек
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
  setInterval(createHearts, 300); // Создаем сердечко каждые 300 мс
}

// Запускаем сердечки сразу при загрузке страницы (опционально)
startHearts();

const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const photoContainer = document.getElementById('photo-container');
const heartsContainer = document.getElementById('hearts-container');

// Обработчик для кнопки "Да!"
yesBtn.addEventListener('click', () => {
  photoContainer.classList.remove('hidden');

  // Создаем сердечки
  createHearts();
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
  const heartCount = 50; // Количество сердечек

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');

    // Случайная позиция на экране
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${Math.random() * 100}vh`;

    // Случайная задержка анимации
    heart.style.animationDelay = `${Math.random() * 2}s`;

    heartsContainer.appendChild(heart);
  }
}

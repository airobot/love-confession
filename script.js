const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const photoContainer = document.getElementById('photo-container');

// Обработчик для кнопки "Да!"
yesBtn.addEventListener('click', () => {
  photoContainer.classList.remove('hidden');
});

// Обработчик для кнопки "Нет"
noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

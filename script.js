// Функция создания падающих сердечек
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Случайный символ сердечка
    const hearts = ['❤️', '💖', '💝', '💕', '🌸'];
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
    
    // Случайное положение по горизонтали
    heart.style.left = Math.random() * 100 + "vw";
    
    // Случайная скорость падения
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    
    document.body.appendChild(heart);
    
    // Удаляем сердечко после падения, чтобы не тормозил сайт
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Запускаем создание сердечек каждые 300 миллисекунд
setInterval(createHeart, 300);

// Кнопка с секретом
const button = document.getElementById('magicButton');
const message = document.getElementById('hiddenMessage');

button.addEventListener('click', () => {
    message.style.display = 'block';
    button.style.display = 'none';
});

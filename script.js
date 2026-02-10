const button = document.getElementById('magicButton');
const message = document.getElementById('hiddenMessage');

button.addEventListener('click', () => {
    message.style.display = 'block';
    button.style.display = 'none';
    
    // Эффект конфетти в консоли или можно добавить анимацию
    console.log("Соня будет счастлива!");
});

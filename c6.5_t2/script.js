console.log('Скрипт подключен!')

const btn = document.querySelector('.get_screen_size');

btn.addEventListener('click', () => {
    let width = window.screen.width;
    let height = window.screen.height;
    alert(`Размер экрана ${width} x ${height}`);
});
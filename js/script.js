const buttonHeight = 50;
const buttonWidth = 150;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
    const gak_button = document.getElementById('gak_button');

    gak_button.addEventListener('click', () => {
        gak_button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        gak_button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    });
    //const y_button = document.getElementById('y_button');
});

window.addEventListener('DOMContentLoaded', () => {
    const gas_button = document.getElementById('gas_button').onclick = function () {location.href = 'q1.html'};
});

window.addEventListener('DOMContentLoaded', () => {
    const gmw_button = document.getElementById('gmw_button').onclick = function () {location.href = 'pendek.html'};
});

window.addEventListener('DOMContentLoaded', () => {
    y_button.addEventListener('click', () => alert('yahaha pendek'))
});

window.addEventListener('DOMContentLoaded', () => {
    const y_button = document.getElementById('y_button').onclick = function () {location.href = 'index.html'};
});

window.addEventListener('DOMContentLoaded', () => {
    const back_button = document.getElementById('back_button').onclick = function () {location.href = 'index.html'};
});
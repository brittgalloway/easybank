const $burger = document.getElementById('burger');
const $nav = document.getElementById('toggleNav');
const $backdrop = document.getElementById('backdrop');
const isClosed = $burger.classList.contains('close');

$burger.addEventListener('click', ()=> {
    $burger.classList.toggle('open');
    $burger.classList.toggle('close');
    $nav.classList.toggle('open');
    $nav.classList.toggle('close');
    $backdrop.classList.toggle('close');
})

import './main.css';

let map: HTMLElement = document.getElementById('pacman');

for (let i = 0; i < (20 * 16); i++)
{
    let cell = map.appendChild(document.createElement('div'));
    cell.classList.add('cell');
    cell.innerHTML = '1';
}
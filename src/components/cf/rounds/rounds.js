/** *******************
Скрипт из файла rounds.js
Навигация по теме rounds
rounds100
******************** */
import './element-rounds';
import { dataRoundsNav } from './data-rounds-nav';

// Создаем ссылки для меню mainnav
createMainNav(dataRoundsNav);

function createMainNav(navCode) {
  navCode.forEach((el) => {
    el.elem = document.createElement('a');
    el.elem.href = '';
    el.elem.innerHTML = el.text;
    el.elem.addEventListener('click', (event) => {
      const rounds = document.getElementById('rounds');
      event.preventDefault();
      // добавим class="active"
      classActive(navCode, el.elem);
      rounds.innerHTML = el.content;
      el.act();
    });
  });
}

function classActive(menu, activElem) {
  menu.forEach((el) => {
    el.elem.classList.remove('active');
  });
  activElem.classList.add('active');
}

export default function showRounds() {
  const elemMainNav = document.getElementById('main-nav');
  elemMainNav.innerHTML = '';
  dataRoundsNav.forEach((el) => {
    elemMainNav.appendChild(el.elem);
    el.elem.classList.remove('active');
  });
  // 6. Создадим и вызовем событие click на первом main-nav эелементе
  const eventClick = new Event('click');
  dataRoundsNav[0].elem.dispatchEvent(eventClick);
}

/** *******************
Скрипт из файла rounds400.js
Объект rounds содержит страницу rounds400
Функция showRounds400 показывает страницу rounds400
******************** */
import './js/element-rounds400';
import { createAside, createMain } from './js/f-create-aside';

// 1. Создаем объект rounds400
const rounds400 = {};

// 2. В объекте rounds400 создаем свойство aside
rounds400.aside = createAside();

// 3. В объекте rounds400 создаем свойство main
rounds400.main = createMain();

// 4. Экспортируем функцию showRounds400()
export default function showRounds400() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(rounds400.aside);
    mainAside.append(rounds400.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}

/** *******************
Скрипт из файла rounds500.js
Объект rounds содержит страницу rounds500
Функция showRounds500 показывает страницу rounds400
******************** */
import './js/element-rounds500';
import { createAside, createMain } from './js/f-create-aside';

// 1. Создаем объект rounds500
const rounds500 = {};

// 2. В объекте rounds500 создаем свойство aside
rounds500.aside = createAside();

// 3. В объекте rounds500 создаем свойство main
rounds500.main = createMain();

// 4. Экспортируем функцию showRounds500()
export default function showRounds500() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(rounds500.aside);
    mainAside.append(rounds500.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}

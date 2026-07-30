/** *******************
Скрипт из файла rounds300.js
Объект rounds содержит страницу rounds300
Функция showRounds300 показывает страницу rounds300
******************** */
import './js/element-rounds300';
import { createAside, createMain } from './js/f-create-aside';

// 1. Создаем объект rounds300
const rounds300 = {};

// 2. В объекте rounds создаем свойство aside
rounds300.aside = createAside();

// 3. В объекте rounds создаем свойство main
rounds300.main = createMain();

// 4. Экспортируем функцию showRounds300()
export default function showRounds300() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(rounds300.aside);
    mainAside.append(rounds300.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}

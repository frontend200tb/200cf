/** *******************
Скрипт из файла rounds100.js
Объект rounds содержит страницу rounds100
Функция showRounds100 показывает страницу rounds100
******************** */
import './js/element-rounds100';
import { createAside, createMain } from './js/f-create-aside';

// 1. Создаем объект rounds100
const rounds100 = {};

// 2. В объекте rounds создаем свойство aside
rounds100.aside = createAside();

// 3. В объекте rounds создаем свойство main
rounds100.main = createMain();

// 4. Экспортируем функцию showRounds100()
export default function showRounds100() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(rounds100.aside);
    mainAside.append(rounds100.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
